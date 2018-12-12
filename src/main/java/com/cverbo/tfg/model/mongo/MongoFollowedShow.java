package com.cverbo.tfg.model.mongo;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MongoFollowedShow {

	private int showId;
	
	private String showName;
	
	private String showImgUrl;
	
	private boolean isFavorite;
	
}
