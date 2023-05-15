import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/modules/patient/models/patient.contact';
import { PhoneType } from '../../models/enums/phone.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  phoneTypes = PhoneType;
  contact: Contact = {
    phoneType: null,
    phoneNumber: '',
    email: '',
    additionalInfo: ''
  }
  @Input() contacts: Contact[] = []
  @ViewChild('contactForm') contactForm: NgForm;
  @Output() pushedContacts = new EventEmitter<Contact[]>();
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    if (this.contactForm.valid) {
      let pushedContacts: Contact = Object.assign({}, this.contact);
      this.contacts.push(pushedContacts);
      this.contactForm.reset();
      this.pushedContacts.emit(this.contacts);
    }
  }
  remove(index: number) {
    this.contacts.splice(index, 1);
  }
}
