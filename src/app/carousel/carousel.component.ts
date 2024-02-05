import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel-component',
  standalone: true,
	imports: [NgbCarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images:any = [
    [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-womens-shoes-LwCxXJ.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/38f827b7-59d0-4a77-9459-1e099474fc89/dynamo-go-younger-easy-on-off-shoes-dCf2Zv.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e3d72728-4900-4e71-a4ea-1f323bb570d8/custom-nike-air-force-1-high-by-you-shoes.png",
    ],[
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/741b1b39-4a28-451d-b144-c6d22121c739/zoom-fly-5-road-running-shoes-tMJ7vL.png"
    ]
  ];
}
