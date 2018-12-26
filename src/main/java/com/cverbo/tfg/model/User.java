package com.cverbo.tfg.model;

	import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;

	@Document(collection="users")
	@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
	@Getter @Setter
	public class User {
	    @Id
	    private String id;

	    private String userName;
	    
	    private String password;
	    
	    private String email;
	    
	    private String fullName;
	    
	    private String type = "USER";
	    
	    private boolean active = true;

	    private Date createdAt = new Date();
	    
	    private List<Show> followedShows;
	    
	    private List<Episode> watchedEpisodes;
	    
	    private List<User> followedUsers;

}
