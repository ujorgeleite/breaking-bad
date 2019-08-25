import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ApiService } from './commons/services/api.service';
import { PageButtonsService } from './commons/services/page-buttons.service';
import { CharacterListModule } from './character-list/character-list.module';
import { NotificationModalModule } from './notification-modal/notification-modal.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule,
    CharacterListModule,
    NotificationModalModule],
  providers: [ApiService, PageButtonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
