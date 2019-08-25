import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { ApiService } from '../../commons/services/api.service';
import { CharacterModel } from '../models/character.model';
import { CharacterMapper } from '../../commons/mapper/mapCharacterToModel.mapper';
import { CharacterViewModel } from '../models/character-view.model';
import { MapCharacterCharacterViewModel } from 'src/app/commons/mapper/mapCharactersToCharacterViewModel.mapper';
import { PageParamsModel } from 'src/app/commons/mapper/page-params.model';
import { PageButtonsService } from 'src/app/commons/services/page-buttons.service';

@Injectable()
export class CharacterListService {
    private charactersPerPage = 6;
    private maxPageId = 0;
    private characterViewModel: CharacterViewModel;

    constructor(private apiService: ApiService,
                private pageButtonService: PageButtonsService) {
        this.characterViewModel = new CharacterViewModel();
    }

    setIdMaxForPagination(): Observable<number> {
        return this.getAll()
            .pipe(map(characters => characters.map(character => character.id)
                .reduce((acc, curr) => {
                    this.pageButtonService.pushPageButton(curr, this.charactersPerPage);
                    return this.maxPageId = curr % this.charactersPerPage === 0 ? curr : acc;
                }, 0)));
    }

    goToPage(pageId: number): Observable<CharacterViewModel> {
        return this.getAllWithPagination(pageId === 1 ? 0 : pageId)
            .pipe(map(charactersModel => {
                const pageParams = this.getPageParams(pageId);
                this.characterViewModel = MapCharacterCharacterViewModel.mapToCharacterViewModel(pageParams, charactersModel);
                return this.characterViewModel;
            }));
    }
    getAll(): Observable<CharacterModel[]> {
        return from(this.apiService.get('characters'))
            .pipe(map(charactersResponse => CharacterMapper.mapToCharacterModel(charactersResponse)));
    }
    getAllWithPagination(page: number = 0): Observable<CharacterModel[]> {
        return from(this.apiService.get(`characters?limit=${this.charactersPerPage}&offset=${page}`))
            .pipe(map(charactersResponse => CharacterMapper.mapToCharacterModel(charactersResponse)));
    }

    private getPageParams = (currentPage: number): PageParamsModel => {
        const pageButtons = this.pageButtonService.getPageButtonList();
        return new PageParamsModel(this.charactersPerPage, currentPage, this.maxPageId, pageButtons);
    }
}
