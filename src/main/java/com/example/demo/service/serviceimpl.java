package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Event;
import com.example.demo.repository.repository;

import jakarta.transaction.Transactional;

@Service
public class serviceimpl implements serviceinterface {

	@Autowired
	private repository repo;
	
	@Override
	public Event createEvent(Event event) {
		return repo.save(event);
		
	}

	@Override
	public List<Event> eventList() {
		return repo.findAll();	}

	@Override
	public Event eventByName(String name) {
		return repo.findByName(name);
	}

	@Transactional
	@Override
	public void deleteByName(String name) {
		 repo.deleteByName(name);
	}
	@Transactional
	@Override
	public Event updateByName( Event event,String name) {
		Event eon = eventByName(name);
		eon.setDate(event.getDate());
		eon.setLocation(event.getLocation());
		eon.setPrice(event.getPrice());
		eon.setTime(event.getTime());
		return repo.save(eon);
	}


	
	

}
