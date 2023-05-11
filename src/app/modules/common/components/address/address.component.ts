import { Component, Input, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
}
