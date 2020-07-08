import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';

@Component({
  selector: 'app-modal-detalles-auto',
  templateUrl: './modal-detalles-auto.component.html',
  styleUrls: ['./modal-detalles-auto.component.css']
})

export class ModalDetallesAutoComponent {

  autoSeleccionado: Automovil;

  closeResult = '';

  constructor(public activeModal: NgbActiveModal) { }
  
}
