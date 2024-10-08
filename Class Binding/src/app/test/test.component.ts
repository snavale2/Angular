import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              Welcome {{name}}
            </h2>
            <h2 class="text-success">Shubham</h2>
            <h2 [class]="successClass">Shubham</h2>

            <h2 class="text-special" [class]="successClass">Shubham</h2>
            <h2 [class.text-danger]="hasError">Shubham</h2>
            <h2 [ngClass]="messageClasses">Shubham</h2>
            `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic; 
    }
    `]
})
export class TestComponent {

  public name  = "Shubham";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  
}
