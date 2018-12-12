package com.cverbo.tfg.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.repository.UserRepository;
import com.cverbo.tfg.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public void insertUser(MongoUser user) {
		
		userRepository.insert(user);
		
	}

}
