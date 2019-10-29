import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './_services/auth.service';
// import { _servicesComponent } from './_services/_services.component';
import { MemeberListComponent } from './memeber-list/memeber-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ContratSocieteAddComponent } from './contrat-societe-add/contrat-societe-add.component';
import { ContratSocieteGetComponent } from './contrat-societe-get/contrat-societe-get.component';
//import { contratsocieteService} from './_services/contratsociete.service';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      HomeComponent,
      RegisterComponent,
      MemeberListComponent,
      ListsComponent,
      MessagesComponent,
      ProductAddComponent,
      ProductGetComponent,
      ContratSocieteAddComponent,
      ContratSocieteGetComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
