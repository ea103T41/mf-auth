import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  baseUrl: string = environment.baseUrl;
  imagePath: string = '/assets/images/sign-out.png';

  get imageUrl(): string {
    return `${this.baseUrl}${this.imagePath}`;
  }
}
