package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Event;

public interface serviceinterface {

	Event createEvent(Event event);

	List<Event> eventList();

	Event eventByName(String name);

	void deleteByName(String name);

	Event updateByName(Event event, String name);



	

	



	
	
	

}



