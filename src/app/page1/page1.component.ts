import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor() { }

  htmlToAdd: any;

  ngOnInit() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<aks-my-medium></aks-my-medium>';
  }

}
