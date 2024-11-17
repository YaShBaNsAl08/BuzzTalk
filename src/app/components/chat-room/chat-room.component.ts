import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule,CommonModule,UserListComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent implements OnInit{
  messageContent: string = '';
  messages: Array<{ user: string; text: string }> = [];
  username: string | null = '';

  constructor(private chatService: ChatServiceService) {}
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username') || 'Anonymous';

    // this.chatService.getMessages().subscribe((msgs) => {
    //   this.messages = msgs;
    // });
  }
  sendMessage() {
    if (this.username && this.messageContent) {
      // this.chatService.sendMessage(this.username, this.messageContent);
      this.messageContent = ''; // Clear input after sending
    }
  }

}
