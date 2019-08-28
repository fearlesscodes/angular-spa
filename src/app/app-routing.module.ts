import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page1Component} from './page1/page1.component';
import {Page1Resolver1} from './page1/page1.resolver';


const routes: Routes = [
  {
    path: 'hello',
    resolve: {js: Page1Resolver1 },
    children: [
      {
        path: '**',
        component: Page1Component
      }]
    // component: Page1Component, resolve: {js: Page1Resolver1}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
