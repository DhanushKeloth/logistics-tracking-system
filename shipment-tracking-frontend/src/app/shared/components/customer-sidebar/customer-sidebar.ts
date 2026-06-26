import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-customer-sidebar',
  imports: [RouterModule,MatIconModule],
  templateUrl: './customer-sidebar.html',
  styleUrl: './customer-sidebar.css',
})
export class CustomerSidebar {
  userName='';
  constructor(private authService:AuthService,private router:Router){
  
  }

   menuItems = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/customer/dashboard'
    },
    {
      label: 'Book Shipment',
      icon: 'add_box',
      route: '/customer/book-shipment'
    },
    {
      label: 'Shipments',
      icon: 'inventory_2',
      route: '/customer/shipments'
    },
    {
      label: 'Track Package',
      icon: 'local_shipping',
      route: '/customer/track'
    },
    {
      label: 'Profile',
      icon: 'person',
      route: '/customer/profile'
    },
    {
      label: 'Help & Support',
      icon: 'support_agent',
      route: '/customer/help'
    }
  ];
  logout(){
    this.authService.logout();
  }
}
