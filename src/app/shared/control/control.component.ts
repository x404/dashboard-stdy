import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',

    // recommended by Angular command
    // '(click)': 'onClick()',
  }
})
export class ControlComponent {
  // similar on host in decorator
  // @HostBinding('class') className = 'control';

  @HostListener('click') onClick() {
    console.log('Clicked!')
  }

  label = input.required();
  //
  // onClick(){
  //   console.log('Clicked!')
  // }
}
