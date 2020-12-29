import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ekle',
  templateUrl: './ekle.page.html',
  styleUrls: ['./ekle.page.scss'],
})
export class EklePage implements OnInit {

  private todo = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    done: ['', Validators.required]
  });
  constructor(private firebase: FirebaseService, private fb: FormBuilder) { }

  ngOnInit() {
  }
  addTodo() {
    this.firebase.create(this.todo.value);
  }

}
