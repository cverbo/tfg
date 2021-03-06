package com.cverbo.tfg.model.fetch;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class EpisodeFetch {
	
	private int show_id;
	
	private int id;
	
	private int episode_number;
	
	private String name;
	
	private int season_number;
	
	private String overview;
	
	private String still_path;
	
	private Date air_date;
	
}
