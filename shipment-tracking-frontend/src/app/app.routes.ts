import { Routes } from '@angular/router';
import { Login } from './auth/pages/login/login';
import { RegisterCustomer } from './auth/pages/register-customer/register-customer';
import { RegisterDriver } from './auth/pages/register-driver/register-driver';
import { Register } from './auth/pages/register/register';
import { CustomerLayout } from './core/layouts/customer-layout/customer-layout';
import { BookShipment } from './features/customer/book-shipment/book-shipment';
import { ReviewShipment } from './features/customer/review-shipment/review-shipment';
import { ShipmentConfirmation } from './features/customer/shipment-confirmation/shipment-confirmation';
import { Profile } from './features/customer/profile/profile';
import { ProfileOverview } from './features/customer/profile/profile-overview/profile-overview';
import { AddressList } from './features/customer/profile/address-list/address-list';
import { AddressForm } from './features/customer/profile/address-form/address-form';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // 2. Auth Routes
  {
    path: 'auth',
    children: [
      { path: 'login', component: Login },
      { path: 'register-customer', component: RegisterCustomer },
      { path: 'register-driver', component: RegisterDriver },
      { path: 'register', component: Register },
    ],
  },

  {
    path: 'customer',
    component: CustomerLayout,
    children: [
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent
      // },
      {
        path: 'book-shipment',
        component: BookShipment,
      },
      {
        path: 'review-shipment',
        component: ReviewShipment,
      },
      {
        path: 'confirm-shipment',
        component: ShipmentConfirmation,
      },
      {
        path: 'profile',
        component: Profile,
        children: [
          {
            path: '',
            component: ProfileOverview,
          },
          {
            path: 'addresses',
            component: AddressList,
          },
          {
            path: 'addresses/new',
            component: AddressForm,
          },
          {
            path: 'addresses/edit/:id',
            component: AddressForm,
          },
        ],
      },
    ],
  },
];
