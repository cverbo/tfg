package com.cverbo.tfg.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Episode {
	
	private int id;
	
	private int episode_number;
	
	private String name;
	
	private int season_number;
	
	private String overview;
	
	private String still_path;
	
	private Date air_date;
	
}
