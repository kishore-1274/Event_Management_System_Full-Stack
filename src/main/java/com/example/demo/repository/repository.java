package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Event;

public interface repository extends JpaRepository<Event, String> {

	Event findByName(String name);

	void deleteByName(String name);

	

}