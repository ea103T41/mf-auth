import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageUrlService } from '../../share/image-url.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  imagePath: string = '/assets/images/error-404.png';

  constructor(
    private readonly router: Router,
    private readonly imageUrlService: ImageUrlService,
  ) {}

  get imageUrl(): string {
    return this.imageUrlService.getImageUrl(this.imagePath);
  }
  
  cancel(): void {
    this.router.navigate(['../']); // 返回到上一頁
  }

}
