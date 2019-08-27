import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CharacterModel } from '../character-list/models/character.model';
import { CharacterDetailService } from './services/character-detail.service';
import { CharacterMapper } from '../commons/mapper/mapCharacterToModels.mapper';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.less']
})
export class CharacterDetailComponent implements OnInit {
  character: CharacterModel;

  constructor(private route: ActivatedRoute,
    private characterDetailService: CharacterDetailService) { }

  ngOnInit() {
    this.character = new CharacterModel();
    this.route.paramMap
      .pipe(switchMap(params => {
        const characterId = Number(params.get('id'));
        return this.characterDetailService.getCharacter(characterId);
      }))
      .subscribe(characterResponse =>
        this.character = CharacterMapper.mapToCharacterModel(characterResponse[0]));

  }

  isDeceased(classDecoration: string): string {
    const statusCheck = ['DECEASED', 'DEAD', 'DEATH'];
    const isDeceased = this.character.status ?
      statusCheck.some(checkStatus => this.character.status.toUpperCase().includes(checkStatus)) : false;

    return isDeceased ? classDecoration : '';
  }

}
