import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users: string[] = ['Yash','Alice', 'Bob', 'Charlie'];

  constructor(){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
