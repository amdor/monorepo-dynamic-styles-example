import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
    @HostBinding('class.lib-button') hostCss = true;

}
