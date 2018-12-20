package com.cverbo.tfg.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Show {
	
	private int id;
	
	private String name;
	
	private Date first_air_date;
	
	private String overview;
	
	private String poster_path;
	
	private int number_of_seasons;

}
