import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosModule } from './demos/demos.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TodosModule } from './todos/todos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    DemosModule,
    TodosModule,
    AppRoutingModule, // à mettre en dernier (à cause de **)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
