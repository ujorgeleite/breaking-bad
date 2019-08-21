import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApiService} from './commons/services/api.service';
import { CharacterListModule } from './character-list/character-list.module';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AppComponent, NotificationModalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharacterListModule,
    NgbModalModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
