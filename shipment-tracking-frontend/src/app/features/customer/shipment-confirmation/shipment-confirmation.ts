import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BookShipmentResponse } from '../../../core/models/shipment-models/BookShipmentResponse.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shipment-confirmation',
  imports: [MatIconModule,DatePipe],
  templateUrl: './shipment-confirmation.html',
  styleUrl: './shipment-confirmation.css',
})
export class ShipmentConfirmation {
  shipment!: any;
  booking!: BookShipmentResponse;
  totalItems!: number;
  totalQuantity!: number;
  totalWeight!: string;
  quote!: any;
  
  constructor() {
  
    this.shipment = history.state.shipment;
    this.booking = history.state.booking;
    this.totalItems = history.state.totalItems;
    this.totalQuantity = history.state.totalQuantity;
    this.totalWeight = history.state.totalWeight;
    this.quote = history.state.quote;

  }

  copyTrackingNumber() {
    navigator.clipboard.writeText(this.booking.trackingNumber);
  }
  cancelShipment(){
    
  }
}


