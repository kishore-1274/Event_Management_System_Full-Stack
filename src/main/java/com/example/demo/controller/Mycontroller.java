package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Event;
import com.example.demo.service.serviceinterface;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class Mycontroller {

	@Autowired
	private serviceinterface service;
	
	
	@PostMapping("/event/create")
	public Event createEvent(@RequestBody Event event) {
		return service.createEvent(event);
	}
	
	@GetMapping("/event/eventlist")
	public List<Event> eventsList(){
		return service.eventList();
	}
	
	@GetMapping("/event/{name}")
	public Event eventByName(@PathVariable String name) {
		return service.eventByName(name);
	}
	
	@DeleteMapping("/event/{name}")
	public void deleteByName(@PathVariable String name) {
	 service.deleteByName(name);
	}
	
	@PutMapping("/event/{name}")
	public Event updateByName(@RequestBody Event event, @PathVariable String name ) {
	 return service.updateByName(event,name);	
	}
}
