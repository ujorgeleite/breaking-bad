import { of } from 'rxjs';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterListComponent } from '../character-list.component';
import { CharacterListService } from '../services/character-list.service';
import { CharacterListStub } from './stubs/character-list.stub';
import { CharacterListMock } from '../../commons/mocks/character-list.mock';
import { ApiService } from 'src/app/commons/services/api.service';
import { PageButtonsService } from 'src/app/commons/services/page-buttons.service';
import { CharacterRestService } from 'src/app/commons/rest-services/character.rest.service';


describe('CharacterListComponent', () => {
  let characterListService: CharacterListService;
  let apiService: ApiService;
  let component: CharacterListComponent;
  let spyApiService;
  let characterRestService: CharacterRestService;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ApiService, useClass: CharacterListStub },
        { provide: CharacterRestService, useClass: CharacterListStub },
        CharacterListService,
        PageButtonsService
      ],
      declarations: [
        CharacterListComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.debugElement.componentInstance;
    characterListService = TestBed.get(CharacterListService);
    apiService = TestBed.get(ApiService);
    characterRestService = TestBed.get(CharacterRestService);

  }));

  describe('Given that the component be initialized', () => {
    beforeEach(() => {
      spyApiService = spyOn(characterRestService, 'get');
      spyApiService.and.callFake(() => of(CharacterListMock.getAllCharacterResponseList()));
      component.ngOnInit();
    });

    afterEach(() => {
      spyApiService.and.callThrough();
    });


    it('should be created', () => {
      expect(component).toBeDefined();
    });

    describe('and the method gotToPage was called with page id 3,', () => {
      describe('and the return for call was with success', () => {
        beforeEach(() => {
          spyOn(component.openNotification, 'emit');
          spyApiService = spyOn(characterRestService, 'getWithPagination');
          spyApiService.and.callFake(() => of(CharacterListMock.getAllCharacterResponseList()));
          component.goToPage(3);
        });

        afterEach(() => {
          spyApiService.and.callThrough();
        });

        it('then the current page should be 3', () => {
          expect(component.characterViewModel.currentPage).toBe(3);
        });

        it('then the max page Id should be 24', () => {
          expect(component.characterViewModel.maxPageId).toBe(24);
        });

        it('then the pagebuttons have to be length 3', () => {
          expect(component.characterViewModel.pageButtons.length).toBe(5);
        });

        it('then the characters should be populated', () => {
          expect(component.characterViewModel.characters).not.toBeNull();
        });

        it('then the notification event haven\'t be called', () => {
          expect(component.openNotification.emit).not.toHaveBeenCalled();
        });

      });

      describe('and the return for call was with failure', () => {
        beforeEach(() => {
          spyOn(component.openNotification, 'emit');
          spyApiService = spyOn(characterRestService, 'getWithPagination');
          spyApiService.and.callFake(() => of({}));
          component.goToPage(1);
        });

        afterEach(() => {
          spyApiService.and.callThrough();
        });

        it('then the current page should be 1', () => {
          expect(component.characterViewModel.currentPage).toBe(1);
        });

        it('then the max page Id should be 0', () => {
          expect(component.characterViewModel.maxPageId).toBe(0);
        });

        it('then the pagebuttons have to be length 0', () => {
          expect(component.characterViewModel.pageButtons.length).toBe(0);
        });

        it('then the characters should be empty', () => {
          expect(component.characterViewModel.characters).toEqual([]);
        });

        it('then the notification service should be called', () => {
          expect(component.openNotification.emit).toHaveBeenCalled();
        });
      });
    });

  });

});
