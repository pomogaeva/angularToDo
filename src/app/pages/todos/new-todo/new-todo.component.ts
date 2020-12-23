import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Todo } from 'src/app/core/interfaces';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  newTodoForm: FormGroup;
  isSubmit = false;
  modalHeader: string;
  todo: Todo;

  constructor(private fb: FormBuilder,
    private bsModalRef: BsModalRef) {

  }

  ngOnInit(): void {
    this.createNewTodoForm();
  }

  get titleControl(): any {
    return this.newTodoForm.get('title') as FormControl;
  }

  onSubmit(): void {
    this.isSubmit = true;

    if (this.newTodoForm.invalid) {
      return;
    }

    this.isSubmit = false;
    this.save(this.newTodoForm.value);
    this.modalHide();
  }

  modalHide(): void {
    this.bsModalRef.hide();
  }

  private createNewTodoForm(): void {
    this.newTodoForm = this.fb.group({
      title: [
        this.todo.title || null,
        [
          Validators.required,
          Validators.minLength]
      ],

      description: [this.todo.description || null],
      isDone: [this.todo.isDone || false],
      priority: [this.todo.priority || 'low'],
      id: [this.todo.id || null]
    });

  }

  private save(newTodo: Todo): void {

  }

}