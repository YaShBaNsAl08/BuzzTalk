import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users: any[]=[];
  selectedUser : string | null = null;

  constructor(private chatservice : ChatServiceService){}

  ngOnInit(): void {
    this.chatservice.getUsers().subscribe((user)=>{
      this.users=user;
    })
  }
  selectuser(user:string){
    this.selectedUser = user;
  }

}
