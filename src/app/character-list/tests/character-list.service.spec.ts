import { TestBed } from '@angular/core/testing';
import { of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService } from 'src/app/commons/services/api.service';
import { CharacterListStub as stub } from './stubs/character-list.stub';
import { CharacterListMock } from '../../commons/mocks/character-list.mock';
import { CharacterListService } from '../services/character-list.service';
import { CharacterViewModel } from '../models/character-view.model';
import { PageButtonsService } from 'src/app/commons/services/page-buttons.service';
import { CharacterRestService } from 'src/app/commons/rest-services/character.rest.service';

describe('CharacterListService', () => {

    let service: CharacterListService;
    let apiService: ApiService;
    let pageButtonsService: PageButtonsService;
    let characterRestService: CharacterRestService;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                CharacterListService,
                { provide: ApiService, useClass: stub },
                { provide: CharacterRestService, useClass: stub },
                PageButtonsService
            ]
        });

        service = testBed.get(CharacterListService);
        pageButtonsService = testBed.get(PageButtonsService);
        apiService = testBed.get(ApiService);
        characterRestService = testBed.get(CharacterRestService);
    });

    describe('Initializing service', () => {
        it('Service should be initialized', () => {
            expect(service).toBeDefined();
        });

        describe('When the method GetAll is called, ', () => {
            let result;

            it('then the return should be a characterModelList', async () => {
                spyOn(characterRestService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList()));
                result = await service.getAll().toPromise();
                expect(result).toEqual(CharacterListMock.getAllCharacterList());
            });

            it('then the ApiService GET method should be called one time', async () => {
                spyOn(characterRestService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList()));
                result = await service.getAll().toPromise();
                expect(characterRestService.get).toHaveBeenCalledTimes(1);
            });

            describe('and when the method setIdMaxForPagination is called', () => {

                describe('and result for call return items ', () => {
                    beforeEach(async () => {
                        spyOn(characterRestService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList()));
                        result = await service.setIdMaxForPagination().toPromise();
                    });

                    it('then the return should be a characterModelList', () => {
                        expect(result).toEqual(24);
                    });

                    it('then the ApiService GET method should be called two times', () => {
                        expect(characterRestService.get).toHaveBeenCalledTimes(1);
                    });
                });

                describe('and result for call don\'t return items ', () => {
                    beforeEach(async () => {
                        spyOn(characterRestService, 'get').and.callFake(() => of());
                        result = await service.setIdMaxForPagination().toPromise();
                    });

                    it('then the return should be a undefined object', () => {
                        expect(result).toEqual(undefined);
                    });

                    it('then the ApiService GET method should be called two times', () => {
                        expect(characterRestService.get).toHaveBeenCalledTimes(1);
                    });
                });
            });

            describe('and when the method goToPage is called', () => {

                let characterViewModel: CharacterViewModel;
                beforeEach(async () => {
                    spyOn(characterRestService, 'get').and.callFake(() => of(CharacterListMock.getAllCharacterResponseList(8, 14)));
                    spyOn(characterRestService, 'getWithPagination')
                        .and.callFake(() => of(CharacterListMock.getAllCharacterResponseList(8, 14)));
                    characterViewModel = await from(service.setIdMaxForPagination())
                        .pipe(switchMap(() => service.goToPage(3))).toPromise();

                });

                it('then the characterViewModel will be populated', () => {
                    expect(characterViewModel).not.toBeNull();
                });

                it('then the current page should be 3 ', () => {
                    expect(characterViewModel.currentPage).toBe(3);
                });

                it('then the max page should be 12', () => {
                    expect(characterViewModel.maxPageId).toBe(12);
                });

                it('then the return for characters should be equal characters list 8 to 14', () => {
                    expect(characterViewModel.characters).toEqual(CharacterListMock.getAllCharacterList(8, 14));
                });

            });

        });


    });

});
