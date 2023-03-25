import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'todo-formly',
  templateUrl: './todo-formly.component.html',
  styleUrls: ['./todo-formly.component.css'],
})
export class TodoFormlyComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  // https://formly.dev/docs/examples/validation/built-in-validations
  // ajouter un suffix au champs (zzZ...) :
  // https://formly.dev/docs/examples/other/material-prefix-suffix
  fields: FormlyFieldConfig[] = [
    {
      key: 'label',
      type: 'input',
      props: {
        label: 'Label',
        placeholder: '',
        required: true,
        maxLength: 20,
        minLength: 4,
        pattern: /^[a-zA-Z0-9àáâäãåèéêëìíîïòóôöõùúûüýÿ\s]*$/,
      },

      validation: {
        messages: {
          pattern: 'Le label ne peut pas contenir de caractères spéciaux',
        },
      },
    },
  ];

  @Output()
  newLabelEvent = new EventEmitter<string>();

  constructor() {}
  onSubmit(): void {
    if (this.form.valid) {
      this.newLabelEvent.emit(this.model['label']);
      this.form.reset();
    }
  }
  ngOnInit() {}
}
