import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address, AddressType, Countries, Country, States } from '../../models';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  countries: Country[] = Countries;
  states: string[] = States;
  addressKeys = Object.values;
  addressTypes = AddressType;
  address: Address = {
    addressType: null,
    other: null,
    firstAddress: null,
    secondAddress: null,
    country: null,
    city: null,
    province: null,
    state: null,
    zipCode: null
  }
  @Input() addresses: Address[] = []
  @ViewChild('addressForm') addressForm: NgForm;
  @Output() pushedAddresses = new EventEmitter<Address[]>();

  constructor() { }
  add() {
    if (this.addressForm.valid) {
      let pushedAddress: Address = Object.assign({}, this.address);
      this.addresses.push(pushedAddress);
      this.addressForm.reset();
      this.pushedAddresses.emit(this.addresses);
    }
  }
  remove(index: number) {
    this.addresses.splice(index, 1);
  }
  ngOnInit(): void {
  }
}
