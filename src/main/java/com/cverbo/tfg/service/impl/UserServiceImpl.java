package com.cverbo.tfg.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.User;
import com.cverbo.tfg.repository.UserRepository;
import com.cverbo.tfg.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public User insertUser(User user) {
		
		userRepository.insert(user);
		return user;
		
	}

	@Override
	public User getUser(String userId) {

		Optional<User> userOptional = userRepository.findById(userId);
		if (userOptional.isPresent()) {
			return userOptional.get();
		} else {
			return null;
		}
	}

	@Override
	public User updateUser(String userId, User user) {
		
		if (this.getUser(user.getId()) == null) {
			return null;
		} else {
			return userRepository.save(user);
		}
		
	}

	@Override
	public User inactiveUser(String userId) {
		
		User user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			user.setActive(false);
			return this.updateUser(userId, user);
		}
		
	}

	@Override
	public User addFollowedShow(String userId, Show show) {
		
		User user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			List<Show> followedShows = user.getFollowedShows();
			followedShows.add(show);
			user.setFollowedShows(followedShows);
			return this.updateUser(userId, user);
		}
		
	}

	@Override
	public User markShowAsFavorite(String userId, int showId) {

		User user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			List<Show> followedShows = user.getFollowedShows();
			List<Show> followedShowsUpdated = new ArrayList<>();
			for (Show followedShow : followedShows) {
				if (followedShow.getId() == showId) {
					followedShow.setFavorite(true);
				}
				followedShowsUpdated.add(followedShow);
			}
			user.setFollowedShows(followedShowsUpdated);
			return this.updateUser(userId, user);
		}
		
	}

	@Override
	public User addWatchedEpisode(String userId, int showId, Episode episode) {
		
		User user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			List<Episode> watchedEpisodes = user.getWatchedEpisodes();
			watchedEpisodes.add(episode);
			user.setWatchedEpisodes(watchedEpisodes);
			return this.updateUser(userId, user);
		}
		
	}

	@Override
	public User addFollowedUser(String userId, User followedUser) {

		User user = this.getUser(userId);
		if (user == null) {
			return null;
		} else {
			List<User> followedUsers = user.getFollowedUsers();
			followedUsers.add(followedUser);
			user.setFollowedUsers(followedUsers);
			return this.updateUser(userId, user);
		}
		
	}
	
	
}
