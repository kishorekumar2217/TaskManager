package com.springboot.app.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.springboot.app.model.Task;

public interface TaskRepository extends MongoRepository<Task, Integer> {

}
