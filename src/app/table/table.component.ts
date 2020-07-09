import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from "../services/autos.service"
import { faTrashAlt, faEdit, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmActionComponent } from '../modal-confirm-action/modal-confirm-action.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  searchText;

  displayProgresBar: boolean;

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faPlus = faPlus;
  faSearch = faSearch;

  page: number;
  pageSize: number;

  autos: Automovil[];

  auto: Automovil;

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.displayProgresBar = true;
    this.page = +sessionStorage.getItem('currentPage');
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response)=>{
      setTimeout(()=>{
        this.displayProgresBar = false;
        this.autos = response.data;
      }, 1000)
    });
  }

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto) => {
        this.autoService.updateAutos(auto).subscribe(response => console.log(response));
        sessionStorage.setItem('currentPage', this.page.toString());
        this.ngOnInit;
      },
      (reason) => {
        console.log(reason)
      }
    )
  }

  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = this.auto;
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto) => {
        this.autoService.addAutos(auto).subscribe(response => console.log(response));
        sessionStorage.setItem('currentPage', this.page.toString());
        this.ngOnInit();
      },
      (reason) => {
        console.log(reason)
      }
    )
  }

  openModalConfirmarEliminar(auto: Automovil){
    const modalRef = this.modalService.open(ModalConfirmActionComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autoService.deleteAuto(autoTemp).subscribe(response => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        })
      },
      (reason) => {
        console.log(reason);
      }
    )
  }

}
