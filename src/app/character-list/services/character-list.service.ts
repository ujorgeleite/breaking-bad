import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../commons/services/api.service';
import { CharacterModel } from '../models/character.model';
import { CharacterMapper } from '../../commons/mapper/mapCharacterToModel.mapper';
import { CharacterViewModel } from '../models/character-view.model';
import { MapCharacterCharacterViewModel } from 'src/app/commons/mapper/mapCharactersToCharacterViewModel.mapper';
import { PageParamsModel } from 'src/app/commons/mapper/page-params.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterListService {
    private charactersPerPage = 8;
    private maxPages = 0;
    private characterViewModel: CharacterViewModel;

    constructor(private apiService: ApiService) {
        this.characterViewModel = new CharacterViewModel();
    }

    getAll(): Observable<CharacterModel[]> {
        return from(this.apiService.get('characters'))
            .pipe(map(charactersResponse => CharacterMapper.mapToCharacterModel(charactersResponse)));
    }

    getAllWithPagination(page: number = 0): Observable<CharacterModel[]> {
        return from(this.apiService.get(`characters?limit=${this.charactersPerPage}&offset=${page}`))
            .pipe(map(charactersResponse => CharacterMapper.mapToCharacterModel(charactersResponse)));
    }

    setIdMaxForPagination(): Observable<number> {
        return this.getAll()
            .pipe(map(characters => characters.map(character => character.id)
                .reduce((acc, curr) => this.maxPages = Math.max(acc, (curr - this.charactersPerPage)), 0)));
    }

    getNextPage(): Observable<CharacterViewModel> {
        const currentPage = this.getCurrentPageNumber(this.characterViewModel.currentPage + this.charactersPerPage);

        return this.getAllWithPagination(currentPage)
            .pipe(map(charactersModel => {
                this.characterViewModel = MapCharacterCharacterViewModel.mapToCharacterViewModel(this.getPageParams(currentPage), charactersModel);
                return this.characterViewModel;
            }));
    }

    getPreviousPage(): Observable<CharacterViewModel> {
        const currentPage = this.getCurrentPageNumber(this.characterViewModel.currentPage - this.charactersPerPage);
        return this.getAllWithPagination(currentPage)
            .pipe(map(charactersModel => {
                this.characterViewModel = MapCharacterCharacterViewModel.mapToCharacterViewModel(this.getPageParams(currentPage), charactersModel);
                return this.characterViewModel;
            }));
    }

    private getCurrentPageNumber(currentPage: number): number {
        if (currentPage <= 0) {  return 0; } else if (currentPage >= this.maxPages) {  return this.maxPages; }
        return currentPage;
    }

    private getPreviousPageNumber(currentPage: number): number {
        const previousPage = currentPage - this.charactersPerPage;
        return previousPage <= 0 ? 0 : previousPage;
    }

    private getNextPageNumber(currentPage: number): number {
        const nextPage = currentPage + this.charactersPerPage;
        return nextPage >= this.maxPages ? this.maxPages : nextPage;
    }

    private getPageParams = (currentPage: number): PageParamsModel => {
        const previousPage = this.getPreviousPageNumber(currentPage);
        const nextPage = this.getNextPageNumber(currentPage);
        return new PageParamsModel(this.charactersPerPage, currentPage, this.maxPages, previousPage, nextPage);
    }

}
