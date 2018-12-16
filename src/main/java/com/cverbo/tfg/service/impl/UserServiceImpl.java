package com.cverbo.tfg.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cverbo.tfg.model.mongo.MongoFollowedShow;
import com.cverbo.tfg.model.mongo.MongoFollowedUser;
import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.model.mongo.MongoWatchedEpisode;
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
	public MongoUser updateUser(String userId, MongoUser user) {
		
		if (this.getUser(user.getId()) == null) {
			return null;
		} else {
			return userRepository.save(user);
		}
		
	}

	@Override
	public MongoUser inactiveUser(String userId) {
		
		MongoUser user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			user.setActive(false);
			return this.updateUser(userId, user);
		}
		
	}

	@Override
	public MongoUser addFollowedShow(String userId, MongoFollowedShow show) {
		
		MongoUser user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			List<MongoFollowedShow> followedShows = user.getFollowedShows();
			followedShows.add(show);
			user.setFollowedShows(followedShows);
			return this.updateUser(userId, user);
		}
		
	}

	@Override
	public MongoUser markShowAsFavorite(String userId, int showId) {

		MongoUser user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			List<MongoFollowedShow> followedShows = user.getFollowedShows();
			List<MongoFollowedShow> followedShowsUpdated = new ArrayList<>();
			for (MongoFollowedShow followedShow : followedShows) {
				if (followedShow.getShowId() == showId) {
					followedShow.setFavorite(true);
				}
				followedShowsUpdated.add(followedShow);
			}
			user.setFollowedShows(followedShowsUpdated);
			return this.updateUser(userId, user);
		}
		
	}

	@Override
	public MongoUser addWatchedEpisode(String userId, int showId, MongoWatchedEpisode episode) {
		
		MongoUser user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			List<MongoWatchedEpisode> watchedEpisodes = user.getWatchedEpisodes();
			watchedEpisodes.add(episode);
			user.setWatchedEpisodes(watchedEpisodes);
			return this.updateUser(userId, user);
		}
		
	}

	@Override
	public MongoUser addFollowedUser(String userId, MongoFollowedUser followedUser) {

		MongoUser user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			List<MongoFollowedUser> followedUsers = user.getFollowedUsers();
			followedUsers.add(followedUser);
			user.setFollowedUsers(followedUsers);
			return this.updateUser(userId, user);
		}
		
	}
	
	
}
