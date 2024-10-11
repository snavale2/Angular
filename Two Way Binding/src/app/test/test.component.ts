import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <input [(ngModel)]="name" type="text">
            {{name}}
            `,
  styles: []
})
export class TestComponent {

  public name  = "";
  
}
