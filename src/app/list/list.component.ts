import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { AutosService } from "../services/autos.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;

  closeResult = '';
  faEye = faEye;
  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit(): void {
    
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    });

  }

  onSelect(auto: Automovil, content){
    this.autoSeleccionado = auto;
    this.modalService.open(content, {ariaLabelledBy: 'Detalles'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}