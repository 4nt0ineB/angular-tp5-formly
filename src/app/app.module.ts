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
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

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
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
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
