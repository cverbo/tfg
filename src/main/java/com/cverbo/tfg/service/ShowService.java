package com.cverbo.tfg.service;

import java.util.List;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;

public interface ShowService {

	public List<Show> getRecommended(String userId);
	
	public Show getShow(Integer showId);
	
	public List<Show> searchShow(String text);
	
	public List<Episode> getEpisodes(Integer showId, Integer seasonNumber);
	
	public List<Episode> getEpisodesAllSeasons(Integer showId);

	public Episode getEpisode(Integer showId, Integer seasonNumber, Integer episodeNumber);
	
}
