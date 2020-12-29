import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../../Models/todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  @Input()
  todo: TodoModel;
  constructor() { }

  ngOnInit() {}

}
