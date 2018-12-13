package com.cverbo.tfg.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cverbo.tfg.model.mongo.MongoFollowedShow;
import com.cverbo.tfg.model.mongo.MongoFollowedUser;
import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.model.mongo.MongoViewedEpisode;
import com.cverbo.tfg.repository.UserRepository;
import com.cverbo.tfg.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public MongoUser insertUser(MongoUser user) {
		
		userRepository.insert(user);
		return user;
		
	}

	@Override
	public MongoUser getUser(String userId) {

		Optional<MongoUser> userOptional = userRepository.findById(userId);
		if (userOptional.isPresent()) {
			return userOptional.get();
		} else {
			return null;
		}
	}

	@Override
	public MongoUser updateUser(MongoUser user) {
		
		if (this.getUser(user.getId()) == null) {
			return null;
		} else {
			return userRepository.save(user);
		}
		
	}

	@Override
	public MongoUser inactiveUser(String userId) {
		
//		if (this.getUser(userId) == null) {
//			return null;
//		} else {
//			return userRepository.save(user);
//		}
		return null;
		
	}

	@Override
	public MongoUser addFollowedShow(String userId, MongoFollowedShow show) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MongoUser markShowAsFavorite(String userId, int showId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MongoUser addViewedEpisode(String userId, int showId, MongoViewedEpisode episode) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MongoUser addFollowedUser(String userId, MongoFollowedUser followedUser) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
