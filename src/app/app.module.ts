import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { ModalDetallesAutoComponent } from './modal-detalles-auto/modal-detalles-auto.component';
import { ModalConfirmActionComponent } from './modal-confirm-action/modal-confirm-action.component';
import { FormsModule } from '@angular/forms';
import { ValidacionModelosDirective } from './directives/validacion-modelos.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalAddUpdateComponent,
    ModalDetallesAutoComponent,
    ModalConfirmActionComponent,
    ValidacionModelosDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDetallesAutoComponent, ModalAddUpdateComponent, ModalConfirmActionComponent]
})
export class AppModule { }
