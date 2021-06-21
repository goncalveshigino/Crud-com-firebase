import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroiModel } from 'src/app/models/heroi.model';
import { HeroisService } from 'src/app/services/herois.service';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
})
export class HeroiComponent implements OnInit {

  heroi = new HeroiModel();

  constructor( private heroiServices: HeroisService ) { }

  ngOnInit() {
  }

  salvar( form: NgForm ) {
    
    if (form.invalid) {
      console.log('Formulario nao valido');
      return;
    }

    this.heroiServices.criarHeroi(this.heroi)
      .subscribe(resp => {
        console.log(resp);
        this.heroi = resp;
       })
 }

}
