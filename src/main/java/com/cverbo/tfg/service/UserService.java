package com.cverbo.tfg.service;

import com.cverbo.tfg.model.mongo.MongoFollowedShow;
import com.cverbo.tfg.model.mongo.MongoFollowedUser;
import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.model.mongo.MongoViewedEpisode;

public interface UserService {

	MongoUser insertUser(MongoUser user);
	
	MongoUser getUser(String userId);
	
	MongoUser updateUser(MongoUser user);
	
	MongoUser inactiveUser(String userId);
	
	MongoUser addFollowedShow(String userId, MongoFollowedShow show);
	
	MongoUser markShowAsFavorite(String userId, int showId);
	
	MongoUser addViewedEpisode(String userId, int showId, MongoViewedEpisode episode);
	
	MongoUser addFollowedUser(String userId, MongoFollowedUser followedUser);
	
}
