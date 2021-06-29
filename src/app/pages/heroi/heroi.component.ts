import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


import { HeroiModel } from 'src/app/models/heroi.model';
import { HeroisService } from 'src/app/services/herois.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
})
export class HeroiComponent implements OnInit {

  heroi: HeroiModel = new HeroiModel();

  constructor(private heroisService: HeroisService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    //Obter o argumento passado pela url
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id !== 'novo') {
       
      this.heroisService.getHerois()
        .subscribe(resp => {
           console.log(resp);
        });
        
    }
    

  }

  salvar( form: NgForm ) {
    
    if (form.invalid) {
      console.log('Formulario nao valido');
      return;
    }

    Swal.fire({

      title: 'Espere',
      text: 'Guardando a informacao',
       icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();
    
    let peticao: Observable<any>;

    if (this.heroi.id) {
      peticao = this.heroisService.atualizarHeroi(this.heroi);

         peticao.subscribe(resp => {
      
          Swal.fire({
            title: this.heroi.nome,
            text: 'Atualizado com sucesso',
            icon: 'success',
          })

        });
   
    } else {
      peticao = this.heroisService.criarHeroi(this.heroi)
        peticao.subscribe(resp => {
      
          Swal.fire({
            title: this.heroi.nome,
            text: ' Sucesso',
            icon: 'success',
          })

        });
     
    }
    
   

   
 }

}
