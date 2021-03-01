package com.springboot.app.service;

import java.util.List;

import com.springboot.app.model.Task;

public interface TaskService {

	void add(Task task);
	
	List<Task> findAll();
	
	String taskStatus(int id);

}
