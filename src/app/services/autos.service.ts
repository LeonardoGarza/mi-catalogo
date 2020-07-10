import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Automovil } from '../models';
import { Observable, of } from 'rxjs';
import { MessagesService} from './messages.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/40';
  private autoURL = 'https://catalogo-autos.herokuapp.com/api/autos';

  constructor(private http: HttpClient, private messagesServices: MessagesService) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=>this.messagesServices.add('Autos Obtenidos'))
    );
  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autoURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap((result) => {
        this.messagesServices.add(`Auto actualizado con id: ${result.data._id}`)
      })
    );
  }

  addAutos(auto: Automovil): Observable<any>{
    return this.http.post<any>(`${this.autoURL}`, auto).pipe(
      catchError(this.handleError<any>('addAutos')),
      tap((result) => {
        this.messagesServices.add(`Auto agregado con id: ${result.data._id}`)
      })
    );
  }

  deleteAuto(auto: Automovil): Observable<any>{
    var id: string = auto._id;
    return this.http.delete<any>(`${this.autoURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAuto')),
      tap((result) => {
        this.messagesServices.add(`Auto borrado con id: ${id}`)
      })
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      this.messagesServices.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }

  }

}
