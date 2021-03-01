package com.springboot.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.app.model.Task;
import com.springboot.app.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {
	
	@Autowired
	private TaskRepository repository ;

	
	
	public void add(Task task) {
		
		int size;
	task.getId();
	task.getTask();
	task.setStatus("incomplete");

		List<Task> list =repository.findAll();//id increment
		size=list.size();
		if(size==0)
		task.setId(size+1);
		else
		{
			size=list.size();
			Task task1=list.get(size-1);
			task.setId((task1.getId())+1);
		}
		repository.save(task);
		
	}
	
	
 
		//list of task
	public List<Task> findAll() {
		
		return repository.findAll();
	}

	
	//status updation

	public String taskStatus(int id) {
		String flag;
		try {
			
			Optional<Task> task=repository.findById(id);
			Task task1=task.get();
			if(task1.getStatus().contentEquals("incomplete"))
					task1.setStatus("complete");
			else
				task1.setStatus("incomplete");
					
			repository.save(task1);
			flag="sucess";
			return flag;
		} catch (Exception e) {
			flag="error";	
			return flag;
		}
		
	}

}
