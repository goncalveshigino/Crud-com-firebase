import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HeroisComponent } from './pages/herois/herois.component';

const routes: Routes = [

  { path: 'herois', component: HeroisComponent },
  { path: 'heroi/:id', component: HeroiComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'herois' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
