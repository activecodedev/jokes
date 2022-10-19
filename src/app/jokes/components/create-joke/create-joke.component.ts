import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { v4 as uuid4 } from 'uuid';
import { JokeDto } from '../../models/joke-dto.model';
import { CategoriesService, JokesService } from '../../services';

@Component({
   selector: 'app-create-joke',
   templateUrl: './create-joke.component.html',
   styleUrls: ['./create-joke.component.scss']
})
export class CreateJokeComponent implements OnInit {
   categories$ = this.categoriesService.categories$;
   form = new FormGroup({
      category: new FormControl(''),
      content: new FormControl('')
   });

   constructor(private categoriesService: CategoriesService, private jokesService: JokesService, private refDialog: DynamicDialogRef) { }

   ngOnInit(): void {
   }

   onSubmit(): void {
      console.log(this.form.value);
      const jokeDto: JokeDto = {
         id: uuid4(),
         categoryId: this.form.get('category')?.value as string,
         content: this.form.get('content')?.value as string
      }

      this.jokesService.createJoke(jokeDto).subscribe(data => {
         console.log(`${data}`);
         this.refDialog.close(data);
      });
   }

}
