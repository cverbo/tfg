package com.cverbo.tfg.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ShowDetailed {
	
	private int id;
	
	private String name;
	
	private Date firstAirDate;
	
	private String overview;
	
	private String posterPath;
	
	private int voteAverage;
	
	private boolean followed;
	
	private boolean favorite;
	
	private int numberOfSeasons;

}
