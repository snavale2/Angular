import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
              Welcome {{name}}
            </h2>
            <input [id]="myId" type="text" value="Shubham">
            <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Shubham">
            `,
  styleUrls: []
})
export class TestComponent {

  public name  = "Shubham";
  public myId = "testId";
  public isDisabled = false;
  
}
