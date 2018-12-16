package com.cverbo.tfg.service;

import com.cverbo.tfg.model.mongo.MongoFollowedShow;
import com.cverbo.tfg.model.mongo.MongoFollowedUser;
import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.model.mongo.MongoWatchedEpisode;

public interface UserService {

	MongoUser insertUser(MongoUser user);
	
	MongoUser getUser(String userId);
	
	MongoUser updateUser(String userId, MongoUser user);
	
	MongoUser inactiveUser(String userId);
	
	MongoUser addFollowedShow(String userId, MongoFollowedShow show);
	
	MongoUser markShowAsFavorite(String userId, int showId);
	
	MongoUser addWatchedEpisode(String userId, int showId, MongoWatchedEpisode episode);
	
	MongoUser addFollowedUser(String userId, MongoFollowedUser followedUser);
	
}
