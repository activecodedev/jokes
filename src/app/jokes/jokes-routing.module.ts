import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './components/jokes/jokes.component';
import { MyJokesComponent } from './components/my-jokes/my-jokes.component';

const routes: Routes = [{
   path: '',
   component: JokesComponent
},
{
   path: 'my-jokes',
   component: MyJokesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
