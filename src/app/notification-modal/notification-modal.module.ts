import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationModalComponent } from './notification-modal.component';



@NgModule({
  declarations: [NotificationModalComponent],
    imports: [CommonModule],
  providers: [],
  exports: [NotificationModalComponent]
})
export class NotificationModalModule { }

