import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              Welcome {{name}}
            </h2>
            <h2 [style.color]="'orange'">Shubham</h2>
            <h2 [style.color]="hasError ? 'red' : 'green'">Shubham</h2>
            <h2 [style.color]="highlightColor">Shubham</h2>
            <h2 [ngStyle]="titleStyles">Shubham</h2>
            `,
  styles: []
})
export class TestComponent {

  public name  = "Shubham";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "Blue"

  public titleStyles = {
    color : "yellow",
    fontStyle : "italic"
  }

  
}
