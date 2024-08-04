import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

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

  constructor(
    private readonly router: Router
  ) {}

  get imageUrl(): string {
    return `${this.baseUrl}${this.imagePath}`;
  }
  
  cancel(): void {
    this.router.navigate(['../']); // 返回到上一頁
  }

}
