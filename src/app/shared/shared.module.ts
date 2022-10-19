// -- Core imports ---
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
// -- Inner modules

// --- External modules ---
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { CardModule } from "primeng/card";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
// Services
import { ConfirmationService } from "primeng/api";
// Directives
import { NgLetDirective } from './directives/ng-let.directive';


@NgModule({
   declarations: [
    NgLetDirective
  ],
   imports: [
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      ButtonModule,
      MenubarModule,
      CardModule,
      DynamicDialogModule,
      DialogModule,
      ConfirmDialogModule,
      DropdownModule,
      InputTextareaModule,
      ToastModule
   ],
   providers: [ConfirmationService],
   exports: [
      HttpClientModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      ButtonModule,
      MenubarModule,
      CardModule,
      DynamicDialogModule,
      DialogModule,
      ConfirmDialogModule,
      DropdownModule,
      InputTextareaModule,
      ToastModule,
      NgLetDirective
   ]
})
export class SharedModule { }
