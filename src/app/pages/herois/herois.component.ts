import { Component, OnInit } from '@angular/core';
import { HeroiModel } from 'src/app/models/heroi.model';
import { HeroisService } from 'src/app/services/herois.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {
  
  herois: HeroiModel[] = [];

  constructor( private heroisService: HeroisService) { }

  ngOnInit() {
    
    this.heroisService.getHerois()
      .subscribe((resp: any) =>
        this.herois = resp
     );
  }

}
