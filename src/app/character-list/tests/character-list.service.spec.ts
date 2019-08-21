import { TestBed } from '@angular/core/testing';
import { of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService } from 'src/app/commons/services/api.service';
import {CharacterListStub as stub} from './stubs/character-list.stub';
import { CharacterListMock } from './stubs/character-list.mock';
import { CharacterListService } from '../services/character-list.service';
import { CharacterViewModel } from '../models/character-view.model';

describe('CharacterListService', () => {

    let service: CharacterListService;
    let apiService: ApiService;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                CharacterListService,
                {provide: ApiService, useClass: stub}
            ]
        });

        service = testBed.get(CharacterListService);
        apiService = testBed.get(ApiService);
    });

    describe('Initializing service', () => {
        it('Service should be initialized', () => {
            expect(service).toBeDefined();
        });

        describe('When the method GetAll is called, ', () => {
            let result;

            it('then the return should be a characterModelList', async () => {
                spyOn(apiService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList()));
                result = await service.getAll().toPromise();
                expect(result).toEqual(CharacterListMock.getAllCharacterList());
            });

            it('then the ApiService GET method should be called one time', async () => {
                spyOn(apiService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList()));
                result = await service.getAll().toPromise();
                expect(apiService.get).toHaveBeenCalledTimes(1);
            });

            describe('and when the method setIdMaxForPagination is called', () => {
                beforeEach(async () => {
                    spyOn(apiService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList()));
                    result = await service.setIdMaxForPagination().toPromise();
                });

                it('then the return should be a characterModelList', () => {
                    expect(result).toEqual(16);
                });

                it('then the ApiService GET method should be called two times', () => {
                    expect(apiService.get).toHaveBeenCalledTimes(1);
                });
            });

            describe('and when the method getNextPage is called', () => {
                let characterViewModel: CharacterViewModel;
                beforeEach(async () => {
                    spyOn(apiService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList(8, 24)));
                    characterViewModel = await from(service.setIdMaxForPagination())
                                                .pipe(switchMap(() => service.getNextPage())).toPromise();

                });

                it('then the current page should be 8', () => {
                    expect(characterViewModel.currentPage).toBe(8);
                });

                it('then the max page should be 16', () => {
                    expect(characterViewModel.maxPages).toBe(16);
                });

                it('then the next page should be 16', () => {
                    expect(characterViewModel.nextPage).toBe(16);
                });

                it('then the return for characters should be equal characters list 8 to 16', () => {
                    expect(characterViewModel.characters).toEqual(CharacterListMock.getAllCharacterList(8, 16));
                });

            });

            describe('and when the method getPreviousPage is called', () => {
                let characterViewModel: CharacterViewModel;
                beforeEach(async () => {
                    spyOn(apiService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList(0, 24)));
                    characterViewModel = await from(service.setIdMaxForPagination())
                                                .pipe(switchMap(() => service.getPreviousPage())).toPromise();

                });

                it('then the current page should be 0', () => {
                    expect(characterViewModel.currentPage).toBe(0);
                });

                it('then the max page should be 16', () => {
                    expect(characterViewModel.maxPages).toBe(16);
                });

                it('then the next page should be 8', () => {
                    expect(characterViewModel.nextPage).toBe(8);
                });

                it('then the return for characters should be equal characters list 0 to 8', () => {
                    expect(characterViewModel.characters).toEqual(CharacterListMock.getAllCharacterList(0, 8));
                });

            });

        });


    });

});
