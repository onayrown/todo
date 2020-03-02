import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from 'src/models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'http://localhost:8080/api/v1/todo';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post(this.apiUrl, todo);
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.apiUrl, todo);
  }

  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + todo.id);
  }

}
