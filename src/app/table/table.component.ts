import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from "../services/autos.service"
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  page: number;
  pageSize: number;

  autos: Automovil[];

  auto: Automovil;

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.auto =  { marca: '', submarca: '', modelos: [ ], descripcion: '', fecha_registro: new Date('')};
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    });
  }

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';
  }

  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = this.auto;
    modalRef.componentInstance.accion = 'Agregar';
  }

}
