package com.cverbo.tfg.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Episode {
	
	private int episodeId;
	
	private int showId;
	
	private int episodeNumber;
	
	private String name;
	
	private int seasonNumber;
	
	private String overview;
	
	private String stillPath;
	
	private Date airDate;
	
	private boolean watched;
	
}
