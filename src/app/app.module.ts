import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomDatePipe } from './custom-date.pipe';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TodoFormComponent } from './todo-list/todo-form/todo-form.component';
import { MatButtonModule } from '@angular/material/button';
import { TodoFormlyComponent } from './todo-list/todo-formly/todo-formly.component';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

/* Définition des messages d'avertissment formly */
export function minLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `Ce champs doit être supérieur à ${field.props.minLength} caractères`;
}

export function maxLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `Ce champs doit être infieur à ${field.props.maxLength} caractères`;
}

export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `Doit être supérieur à ${field.props.min}`;
}

export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `Doit être inférieur à ${field.props.max}`;
}
/* ---------- */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Champs requis' },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }),
    FormlyMaterialModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [
    AppComponent,
    TodoFormComponent,
    CustomDatePipe,
    TodoListComponent,
    TodoItemComponent,
    TodoFormlyComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
