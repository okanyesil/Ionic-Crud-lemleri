import { Component, OnInit } from '@angular/core';
import {TodoModel} from '../../Models/todo.model';
import {FirebaseService} from '../../services/firebase.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-all-todo',
  templateUrl: './list-all-todo.component.html',
  styleUrls: ['./list-all-todo.component.scss'],
})
export class ListAllTodoComponent implements OnInit {
  allTodo: TodoModel[];
  constructor(private firebase: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.firebase.getAll().snapshotChanges().pipe(map(data => data.map(value => {
      return ({key: value.payload.key, ...value.payload.val()});
    }))).subscribe(data => this.allTodo = data);
  }
  toggle(key) {
    this.allTodo.filter(value => value.key === key).map(value => value.toggle = !value.toggle);
  }
  deleteTodo(key: string) {
    this.firebase.deleteTodo(key);
  }
  updateTodo(todoItem: TodoModel) {
    this.router.navigateByUrl('guncelle', {state: todoItem}).then(t => t);
  }

}
