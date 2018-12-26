package com.cverbo.tfg.service;

import java.util.List;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.ShowCalendar;

public interface ShowService {

	public List<Show> getRecommended(String userId);
	
	public Show getShow(String userId, Integer showId);
	
	public List<Show> searchShow(String userId, String text);
	
	public List<Episode> getEpisodes(String userId, Integer showId, Integer seasonNumber);
	
	public List<Episode> getEpisodesAllSeasons(String userId, Integer showId);

	public Episode getEpisode(String userId, Integer showId, Integer seasonNumber, Integer episodeNumber);
	
	public List<ShowCalendar> getPersonalCalendar(String userId);
	
}
