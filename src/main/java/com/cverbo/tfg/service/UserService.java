package com.cverbo.tfg.service;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.User;

public interface UserService {

	User insertUser(User user);
	
	User getUser(String userId);
	
	User updateUser(String userId, User user);
	
	User inactiveUser(String userId);
	
	User addFollowedShow(String userId, Show show);
	
	User markShowAsFavorite(String userId, int showId);
	
	User addWatchedEpisode(String userId, int showId, Episode episode);
	
	User addFollowedUser(String userId, User followedUser);
	
}
