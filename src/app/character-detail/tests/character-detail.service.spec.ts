import { TestBed } from '@angular/core/testing';

import { CharacterDetailService } from '../services/character-detail.service';
import { CharacterRestService } from 'src/app/commons/rest-services/character.rest.service';
import { CharacterDetailStub as stub } from './stubs/character-detail.stub';
import { CharacterListMock as mock } from '../../commons/mocks/character-list.mock';
describe('CharacterDetailService', () => {
    let service;
    let characterRestService;

    beforeEach(() => {
        const testBed = TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                CharacterDetailService,
                { provide: CharacterRestService, useClass: stub },
            ]
        });

        service = testBed.get(CharacterDetailService);
        characterRestService = testBed.get(CharacterRestService);
    });

    describe('When get Character is called', () => {

        beforeEach(() => {
            spyOn(characterRestService, 'getById').and.callFake(() => mock.getAllCharacterResponseList(0, 1));
        });

        it('Then the characterResponseModel soul be returned', async () => {
            const result = await service.getCharacter(2).toPromise();
            expect(result).toEqual(mock.getAllCharacterResponseList()[0]);
        });
    });

});
