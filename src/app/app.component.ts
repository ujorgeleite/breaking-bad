import { Component } from '@angular/core';
import { NotificationModel } from './notification-modal/model/notification.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'breaking-bad';
  modalMessage = '';
  modalTitle = '';


  receiverEvent(event: NotificationModel) {
    this.modalTitle = event.title;
    this.modalMessage = event.message;
  }

}
