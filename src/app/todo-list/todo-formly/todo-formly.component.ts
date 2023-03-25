import { Component, OnInit } from '@angular/core';
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
  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      props: {
        label: 'Input',
        placeholder: 'Input placeholder',
        required: true,
      },
    },
    {
      key: 'textarea',
      type: 'textarea',
      props: {
        label: 'Textarea',
        placeholder: 'Textarea placeholder',
        required: true,
      },
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      props: {
        label: 'Checkbox',
      },
    },
    {
      key: 'select',
      type: 'select',
      props: {
        label: 'Select',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ],
      },
    },
    {
      key: 'radio',
      type: 'radio',
      props: {
        label: 'Radio',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
    },
  ];
  constructor() {}
  onSubmit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
  ngOnInit() {}
}
