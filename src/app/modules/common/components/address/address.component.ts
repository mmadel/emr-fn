import { Component, EventEmitter, Input, OnInit, Output, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl, NgForm } from '@angular/forms';
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
  @Input() address: Address
  @Input() addresses: Address[] = []
  @Input() reset: boolean;
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
  remove(index:number){
    this.addresses.splice(index, 1);
  }
  ngOnInit(): void {
  }
}