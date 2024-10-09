import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              Welcome {{name}}
            </h2>
            <button (click)="onClick($event)">Greet</button>
            {{greeting}}
            `,
  styles: []
})
export class TestComponent {

  public name  = "Shubham";
  public greeting = "";

  onClick(event: MouseEvent) {
    console.log(event);
    this.greeting = "Shubham";
  }

  
}
