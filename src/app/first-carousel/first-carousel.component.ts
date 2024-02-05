import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'first-carousel-component',
  standalone: true,
	imports: [NgbCarouselModule, CommonModule],
  templateUrl: './first-carousel.component.html',
  styleUrls: ['./first-carousel.component.css']
})
export class FirstCarouselComponent implements OnInit {

  shoesData:any=[]
 
  constructor(private api:AdminapiService){}

  ngOnInit(): void {
    this.allShoes()
  }

  allShoes(){
    this.api.fetchData().subscribe({
      next:(res:any)=>{
        // console.log(res);

        const n=3;
        const result = res.reduce((r:any, e:any, i:number) =>
    (i % n ? r[r.length - 1].push(e) : r.push([e])) && r
, []); // => [[0, 1, 2], [3, 4, 5], [6]]

        this.shoesData=result;
        console.log(this.shoesData);
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }


}
