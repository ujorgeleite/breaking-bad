import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CharacterViewModel } from './models/character-view.model';
import { CharacterListService } from './services/character-list.service';
import { NotificationModel } from '../notification-modal/model/notification.model';
import { ErrorMessages } from '../commons/error-messages';




@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.less']
})
export class CharacterListComponent implements OnInit {
  characterViewModel: CharacterViewModel;

  @Output()
  public openNotification: EventEmitter<NotificationModel> = new EventEmitter<NotificationModel>();


  constructor(private characterListService: CharacterListService) { }


  ngOnInit() {
    this.characterViewModel = new CharacterViewModel();
    from(this.characterListService.setIdMaxForPagination())
      .pipe(switchMap(() => this.characterListService.getPreviousPage()))
      .subscribe(characterViewModel => {
        this.characterViewModel = characterViewModel;
      },
      () => this.emitNotification());
  }

  nextPage = () => {
    this.characterListService.getNextPage()
      .subscribe(characterViewModel => {
        this.characterViewModel = characterViewModel;
      },
      () => this.emitNotification());
  }

  previousPage = () => {
    this.characterListService.getPreviousPage()
      .subscribe(characterViewModel => {
        this.characterViewModel = characterViewModel;
      },
      () => this.emitNotification());
  }

  emitNotification = () => {
    this.openNotification.emit(new NotificationModel(ErrorMessages.ERRROR_GET_CHARACTERS, 'Error'));
  }
}
