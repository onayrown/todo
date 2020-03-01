package com.felipemachado.todo.services;

import com.felipemachado.todo.models.Todo;
import com.felipemachado.todo.repositories.ITodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final ITodoRepository _todoRepository;

    @Autowired
    public TodoService(ITodoRepository todoRepository) {
        this._todoRepository = todoRepository;
    }

    public List<Todo> GetTodo(){
        return _todoRepository.findAll();
    }

    public void addTodo(Todo todo) {
        _todoRepository.insert(todo);
    }

    public void removeTodo(Todo todo){
        _todoRepository.deleteById(todo.getId());
    }

    public void updateTodo(Todo todo){
        _todoRepository.save(todo);
    }
}
