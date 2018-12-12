package com.cverbo.tfg.model.mongo;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MongoFollowedUser {

	private String userId;
	
	private boolean followBack;
	
}
