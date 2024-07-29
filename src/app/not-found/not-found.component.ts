import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  baseUrl: string = environment.baseUrl;
  imagePath: string = '/assets/images/error-404.png';

  get imageUrl(): string {
    return `${this.baseUrl}${this.imagePath}`;
  }
}
