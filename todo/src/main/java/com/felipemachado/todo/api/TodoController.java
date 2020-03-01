package com.felipemachado.todo.api;

import com.felipemachado.todo.models.Todo;
import com.felipemachado.todo.services.TodoService;
import com.mongodb.lang.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/api/v1/todo")
@RestController
public class TodoController {
    private final TodoService _todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this._todoService = todoService;
    }

    @PostMapping
    public void add(@Valid @NonNull @RequestBody Todo todo){
        _todoService.addTodo(todo);
    }

    @GetMapping
    public List<Todo> Get(){
        return _todoService.GetTodo();
    }

    @PutMapping()
    public void update(@Valid @NonNull @RequestBody Todo todo){
        _todoService.updateTodo(todo);
    }

    @DeleteMapping()
    public  void delete(@Valid @NonNull @RequestBody Todo todo){
        _todoService.removeTodo(todo);
    }
}
