package com.cverbo.tfg.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ShowResult {
	
	Integer page;
	
	Integer total_results;
	
	List<Show> results;
	
}
