import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  newTodoForm: FormGroup;
  isSubmit = false;

  constructor(private fb: FormBuilder, private todoService: TodoService,
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
    this.todoService.addTodo(this.newTodoForm.value);
    this.modalHide();
  }

  modalHide(): void {
    this.bsModalRef.hide();
  }

  private createNewTodoForm(): void {
    this.newTodoForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength]
      ],

      description: [],
      isDone: [false],
      priority: ['low']
    });

  }

}