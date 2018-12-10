import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  anyo: number;

  constructor() {
    this.anyo = new Date().getFullYear();
  }

}
