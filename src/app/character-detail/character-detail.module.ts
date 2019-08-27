import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { CharacterDetailComponent } from './character-detail.component';
import { CharacterDetailService } from './services/character-detail.service';

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule,
    AppRoutingModule,
    BrowserModule],
  providers: [CharacterDetailService],
  exports: [CharacterDetailComponent]
})

export class CharacterDetailModule { }
