import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { CharacterDetailComponent } from '../character-detail.component';
import { ApiService } from 'src/app/commons/services/api.service';
import { CharacterListStub } from 'src/app/character-list/tests/stubs/character-list.stub';
import { CharacterRestService } from 'src/app/commons/rest-services/character.rest.service';
import { CharacterDetailService } from '../services/character-detail.service';
import { CharacterListMock as mock } from 'src/app/commons/mocks/character-list.mock';
import { CharacterDetailStub } from './stubs/character-detail.stub';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let characterDetailService: CharacterDetailService;
  let apiService;
  let characterRestService;
  let route;
  let service;
  let routeMap;

  beforeEach(async(() => {

    routeMap = { paramMap: of({ get: (key) => 'value' }) };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ApiService, useClass: CharacterListStub },
        { provide: CharacterRestService, useClass: CharacterListStub },
        { provide: ActivatedRoute, useValue: routeMap },
        { provide: CharacterDetailService, useClass: CharacterDetailStub },

      ],
      declarations: [
        CharacterDetailComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.debugElement.componentInstance;
    characterDetailService = TestBed.get(CharacterDetailService);
    apiService = TestBed.get(ApiService);
    characterRestService = TestBed.get(CharacterRestService);
    route = TestBed.get(ActivatedRoute);
    service = TestBed.get(CharacterDetailService);

  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('and the method on init is called with the route param 8', () => {

    beforeEach(() => {
      spyOn(service, 'getCharacter').and.callFake(() => mock.getAllCharacterList()[0]);
    });

    it('then the get character method should be called', () => {
      component.ngOnInit();
      expect(service.getCharacter).toHaveBeenCalled();
    });

  });

  describe('and the method is Deceased is called', () => {


    describe('and the character in component is deceased', () => {

      it('then the method should be return class that receive from param', () => {
        component.character = mock.getAllCharacterList()[0];
        component.character.status = 'DeAth';
        const result = component.isDeceased('testReturn');
        expect(result).toEqual('testReturn');
      });
    });

    describe('and the character in component is alive', () => {
      it('then the method should be return empty string', () => {
        component.character = mock.getAllCharacterList()[0];
        component.character.status = 'aLive';
        const result = component.isDeceased('testeReturn');
        expect(result).toEqual('');
      });
    });
  });
});
