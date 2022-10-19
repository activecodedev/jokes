import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Joke } from '../../models';
import { JokesService } from '../../services';
import { CreateJokeComponent } from '../create-joke/create-joke.component';

const INIT_INDEX = 0;

@Component({
   selector: 'app-jokes',
   templateUrl: './jokes.component.html',
   styleUrls: ['./jokes.component.scss'],
   providers: [DialogService, MessageService]
})
export class JokesComponent implements OnInit {
   index = INIT_INDEX;
   ref!: DynamicDialogRef;
   selectedIndexSubject$ = new BehaviorSubject<number>(INIT_INDEX);
   selectedIndexAction$ = this.selectedIndexSubject$.asObservable();
   selectedJoke$: Observable<Joke>;

   constructor(private jokesService: JokesService, private dialogService: DialogService, private messageService: MessageService) {
      this.selectedJoke$ = this.selectJoke();
   }

   ngOnInit(): void {
   }

   selectJoke(): Observable<Joke> {
      return combineLatest([this.selectedIndexAction$, this.jokesService.jokes$])
         .pipe(
            map(([i, jokes]) => {
               if (i >= jokes.length) {
                  this.index = INIT_INDEX;

                  return jokes[this.index];
               }

               return jokes[i]
            })
         );
   }

   nextJoke(): void {
      this.selectedIndexSubject$.next(++this.index);
   }

   openDialog() {
      this.ref = this.dialogService.open(CreateJokeComponent, {
         header: 'Dodawanie żartu',
         width: '70%',
         height: '70%',
         // contentStyle: { "max-height": "500px", "overflow": "auto" },
         baseZIndex: 10000,
         modal: true
      });

      this.ref.onClose.subscribe((joke: Joke) => {
         if (joke) {
            console.log(joke);
            this.messageService.add({severity:'success', summary: 'Sukces', detail: 'Żart został pomyślnie dodany'});
         }
      });
   }
}
