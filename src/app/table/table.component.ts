import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from "../services/autos.service"
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  page = 1;
  pageSize = 10;

  autos: Automovil[];

  constructor(private autoService: AutosService) { }

  ngOnInit(): void {
    
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    });

  }

}
