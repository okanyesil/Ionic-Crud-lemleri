import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FirebaseService} from '../services/firebase.service';
import {TodoModel} from '../Models/todo.model';
import { Router} from '@angular/router';


@Component({
  selector: 'app-guncelle',
  templateUrl: './guncelle.page.html',
  styleUrls: ['./guncelle.page.scss'],
})
export class GuncellePage implements OnInit {
  todoKey: string;
  private todo = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    done: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private firebase: FirebaseService, private router: Router) { }

  ngOnInit() {
    const item = this.router.getCurrentNavigation().extras.state;
    this.todo.setValue({
      title: item['title'],
      description: item['description'],
      done: item['done']
    });
    this.todoKey = item['key'];
  }

  guncelle(todo: TodoModel) {
    this.firebase.updateTodo(this.todoKey, todo);
    this.router.navigateByUrl('home').then(r => r);
  }

}
