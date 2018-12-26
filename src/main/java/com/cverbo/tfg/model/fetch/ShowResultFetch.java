package com.cverbo.tfg.model.fetch;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ShowResultFetch {
	
	Integer page;
	
	Integer total_results;
	
	List<ShowFetch> results;
	
}
