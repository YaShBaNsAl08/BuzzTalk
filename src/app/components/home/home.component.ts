import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  username: string = '';

  constructor(private router: Router) {}

  joinChat() {
    sessionStorage.setItem('username', this.username);
    this.router.navigate(['/chat']);
  }

}
