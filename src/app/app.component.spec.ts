import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CharacterListModule } from './character-list/character-list.module';
import { NotificationModalModule } from './notification-modal/notification-modal.module';
import { CharacterListService } from './character-list/services/character-list.service';
import { ApiService } from './commons/services/api.service';
import { PageButtonsService } from './commons/services/page-buttons.service';
import { CharacterDetailModule } from './character-detail/character-detail.module';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         CharacterListModule,
//         NotificationModalModule,
//         CharacterDetailModule
//       ],
//       providers: [
//         ApiService,
//         PageButtonsService
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'breaking-bad'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('breaking-bad');
//   });

// });
