import { of, Observable, throwError } from 'rxjs';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterListComponent } from '../character-list.component';
import { CharacterListService } from '../services/character-list.service';
import { CharacterListStub } from './stubs/character-list.stub';
import { CharacterListMock } from './stubs/character-list.mock';

describe('CharacterListComponent', () => {
  let characterListService: CharacterListService;
  let component: CharacterListComponent;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: CharacterListService, useClass: CharacterListStub }
      ],
      declarations: [
        CharacterListComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.debugElement.componentInstance;
    characterListService = TestBed.get(CharacterListService);

  }));

  describe('Given that the component be initialized', () => {
    beforeEach(() => {
      spyOn(component.openNotification, 'emit');
      spyOn(characterListService, 'setIdMaxForPagination').and.callFake(() => of(16));
    });

    it('should be created', () => {
      spyOn(characterListService, 'getPreviousPage').and.callFake(() => CharacterListMock.getCharacterViewModel());
      expect(characterListService).toBeDefined();
    });

    describe('And nextPage is called, ', () => {
      describe('And return with sucess', () => {
        beforeAll(() => {
          spyOn(characterListService, 'getNextPage').and.callFake(() => CharacterListMock.getCharacterViewModel());
          component.nextPage();
        });
        it('then the characterModel will be populated', () => {
          expect(component.characterViewModel).not.toBeNull();
        });

        it('then the openNotification event will not be called', () => {
          expect(component.openNotification.emit).not.toHaveBeenCalled();
        });
      });

      describe('And throw exception', () => {
        it('then the characterModel will not be populated', () => {
          spyOn(characterListService, 'getNextPage').and.callFake(() => throwError(''));
          component.nextPage();
          expect(component.characterViewModel).toBeUndefined();
        });

        it('then the openNotification event will be called', () => {
          spyOn(characterListService, 'getNextPage').and.callFake(() => throwError(''));
          component.nextPage();
          expect(component.openNotification.emit).toHaveBeenCalled();
        });
      });
    });

    describe('And previousPage is called, ', () => {
      describe('And return with sucess', () => {
        beforeAll(() => {
          spyOn(characterListService, 'getPreviousPage').and.callFake(() => CharacterListMock.getCharacterViewModel());
          component.previousPage();
        });
        it('then the characterModel will be populated', () => {
          expect(component.characterViewModel).not.toBeNull();
        });

        it('then the openNotification event will not be called', () => {
          expect(component.openNotification.emit).not.toHaveBeenCalled();
        });
      });

      describe('And throw exception', () => {
        it('then the characterModel will not be populated', () => {
          spyOn(characterListService, 'getPreviousPage').and.callFake(() => throwError(''));
          component.previousPage();
          expect(component.characterViewModel).toBeUndefined();
        });

        it('then the openNotification event will be called', () => {
          spyOn(characterListService, 'getPreviousPage').and.callFake(() => throwError(''));
          component.previousPage();
          expect(component.openNotification.emit).toHaveBeenCalled();
        });
      });
    });
  });

});
