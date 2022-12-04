import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    CardComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
