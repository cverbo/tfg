package com.cverbo.tfg.repository;

import java.util.List;

import com.cverbo.tfg.model.Show;

public interface ShowRepository {

	public List<Show> getRecommended();
	
	public Show getShow(Integer showId);
	
}
