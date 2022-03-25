import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { ClockComponent } from './clock/clock.component';
import { SelectComponent } from './select/select.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CounterComponent } from './counter/counter.component';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos/demos.component';


@NgModule({
  declarations: [
    HelloComponent,
    ClockComponent,
    SelectComponent,
    UserFormComponent,
    CounterComponent,
    DemosComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule
  ],
  exports: [
    DemosComponent
  ]
})
export class DemosModule { }
