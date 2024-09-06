import { Component, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  // }
})
export class ControlComponent {
  // similar on host in decorator
  @HostBinding('class') className = 'control';

  label = input.required();
}
