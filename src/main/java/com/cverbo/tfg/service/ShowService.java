package com.cverbo.tfg.service;

import java.util.List;

import com.cverbo.tfg.model.Show;

public interface ShowService {

	public List<Show> getRecommended();
	
	public Show getShow(Integer showId);
	
}
