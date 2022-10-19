import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
   path: '',
   redirectTo: 'jokes',
   pathMatch: 'full'
},
{
   path: 'jokes',
   loadChildren: () => import('./jokes/jokes.module').then(x => x.JokesModule)
}];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
