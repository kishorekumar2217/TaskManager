 package com.springboot.app.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.app.model.Task;

import com.springboot.app.service.TaskService;

@RestController
@RequestMapping("/taskcon")
@CrossOrigin
public class TaskController {
	@Autowired
private TaskService taskService;
	
	@PostMapping("/addTask")
	
	public String saveTask(@RequestBody Task task) {
		
		taskService.add(task);
		
		return "Sucess" ;
	}
	
	
	@GetMapping("/taskStatus/{id}")
	
	public String taskStatue(@PathVariable int id) {
		String flag=taskService.taskStatus(id);
		return flag;
		
	}
	
		
	@GetMapping("/findAllTask")

		public List<Task> getTasks(){
	
			return taskService.findAll();
		}


}
