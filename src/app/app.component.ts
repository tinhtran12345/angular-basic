import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HomeComponent, RouterModule],
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'Home';
}
