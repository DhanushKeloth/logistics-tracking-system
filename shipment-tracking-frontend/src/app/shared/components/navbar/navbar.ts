import { Component, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { AuthService } from '../../../core/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  userName=signal('');
  constructor(private authService:AuthService){
    this.userName.set(this.authService.getFullname()||'');
  }

}
