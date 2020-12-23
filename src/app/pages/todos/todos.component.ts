import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { NewTodoComponent } from './new-todo/new-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  todoList: Array<Todo>;
  search: string;
  priority: string;
  modalRef: BsModalRef;

  constructor(private todoService: TodoService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getTodoData();
  }

  openModal(): void {
    this.modalRef = this.modalService.show(NewTodoComponent);
  }

  private getTodoData(): void {
    this.todoService.todoData.subscribe(data => {
      this.todoList = data;
    });
  }

}