import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { AutosService } from "../services/autos.service"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetallesAutoComponent } from '../modal-detalles-auto/modal-detalles-auto.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page: number;
  pageSize: number;

  autos: Automovil[];
  faEye = faEye;
  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    });

  }

  onSelect(auto: Automovil){
    const modalRef = this.modalService.open(ModalDetallesAutoComponent, { centered: true });
    modalRef.componentInstance.autoSeleccionado = auto;
  }

}