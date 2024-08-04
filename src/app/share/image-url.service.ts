import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageUrlService {
  private baseUrl: string = environment.baseUrl;

  getImageUrl(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }
}
