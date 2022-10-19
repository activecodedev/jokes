import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Joke } from '../../models';
import { JokesService } from '../../services';
import { CreateJokeComponent } from '../create-joke/create-joke.component';

@Component({
   selector: 'app-my-jokes',
   templateUrl: './my-jokes.component.html',
   styleUrls: ['./my-jokes.component.scss'],
   providers: [DialogService, MessageService]
})
export class MyJokesComponent implements OnInit {
   jokes$ = this.jokesService.jokes$;
   ref!: DynamicDialogRef;
   displayConfirmationDialog: boolean = false;

   constructor(private jokesService: JokesService, private dialogService: DialogService, private messageService: MessageService) { }

   ngOnInit(): void {
   }

   openCreateDialog() {
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

   openConfirmationDialog() {
      this.displayConfirmationDialog = true;
   }
}
