import { Component, OnInit, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.less']
})
export class NotificationModalComponent implements OnInit, OnChanges {
  @ViewChild('notificationContent', null) public templateref: TemplateRef<any>;

  @Input()
  modalMessage: string;

  @Input()
  modalTitle = 'Notification';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.modalMessage.length > 0 ) {
      this.open();
    }
  }

  open() {
    this.modalService.open(this.templateref, {ariaLabelledBy: 'modal-basic-title'});
  }

}
