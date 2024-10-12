import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

            <ng-template #thenBlock>
              <h2>Shubham</h2>
            </ng-template>

            <ng-template #elseBlock>
              <h2>Hidden</h2>
            </ng-template>
            `,
  styles: []
})
export class TestComponent {

  public displayName  = true;
  
}
