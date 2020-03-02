import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public form: FormGroup;
  public mode: String = 'list';
  public todo: Todo;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });
    this.load();
  }

  changeMode(mode: String) {
    this.mode = mode;
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    const todo = new Todo(id, title, false);
    this.todoService.addTodo(todo)
      .subscribe(data => { this.todo = data; });
    this.todos.push(new Todo(id, title, false));
    this.clear();
    this.changeMode('list');
  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todoService.deleteTodo(todo)
      .subscribe(data => { this.todo = data;});
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.todoService.updateTodo(todo)
      .subscribe(data => { this.todo = data; });
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.todoService.updateTodo(todo)
      .subscribe(data => { this.todo = data; });
  }

  // save() {
  //   const data = JSON.stringify(this.todos);
  //   localStorage.setItem('todos', data);
  // }

  load() {
    return this.todoService.getTodos()
      .subscribe(data => this.todos = data);
  }
}