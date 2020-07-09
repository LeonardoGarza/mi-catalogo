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

  displayProgresBar: boolean;

  page: number;
  pageSize: number;

  autos: Automovil[];
  faEye = faEye;
  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.displayProgresBar = true;
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response)=>{
      setTimeout(()=>{
        this.displayProgresBar = false;
        this.autos = response.data;
      }, 1000)
    });

  }

  onSelect(auto: Automovil){
    const modalRef = this.modalService.open(ModalDetallesAutoComponent, { centered: true });
    modalRef.componentInstance.autoSeleccionado = auto;
  }

}