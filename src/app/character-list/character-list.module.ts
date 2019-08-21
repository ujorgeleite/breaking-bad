
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

import { CharacterListComponent } from './character-list.component';
import { CharacterListService } from './services/character-list.service';


@NgModule({
  declarations: [CharacterListComponent],
    imports: [CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule],
  providers: [CharacterListService],
  exports: [CharacterListComponent]
})
export class CharacterListModule { }
