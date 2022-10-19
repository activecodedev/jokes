// -- Core imports ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesRoutingModule } from './jokes-routing.module';
// --- Internal modules
import { SharedModule } from '../shared/shared.module';
// --- Components ---
import { JokesComponent } from './components/jokes/jokes.component';
import { CreateJokeComponent } from './components/create-joke/create-joke.component';
import { CreateJokeFormComponent } from './components/create-joke-form/create-joke-form.component';
import { MyJokesComponent } from './components/my-jokes/my-jokes.component';


@NgModule({
  declarations: [
    JokesComponent,
    CreateJokeComponent,
    CreateJokeFormComponent,
    MyJokesComponent
  ],
  entryComponents: [
   CreateJokeFormComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule,
    SharedModule
  ]
})
export class JokesModule { }
