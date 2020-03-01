package com.felipemachado.todo.repositories;

import com.felipemachado.todo.models.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITodoRepository extends MongoRepository<Todo, Long> {

}
