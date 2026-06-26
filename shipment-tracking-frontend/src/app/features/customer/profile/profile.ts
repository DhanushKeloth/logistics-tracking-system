import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-profile',
  imports: [RouterModule,MatIconModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}

