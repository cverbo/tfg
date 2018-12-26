package com.cverbo.tfg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.ShowCalendar;
import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;
import com.cverbo.tfg.service.ShowService;

@Service
public class ShowServiceImpl implements ShowService {

	@Autowired
	ShowRepositoryImpl showRepository;
	
	@Override
	public List<Show> getRecommended(String userId) {
		return showRepository.getRecommended(userId);
	}

	@Override
	public Show getShow(String userId, Integer showId) {
		return showRepository.getShow(userId, showId);
	}

	@Override
	public List<Show> searchShow(String userId, String text) {
		return showRepository.searchShow(userId, text);
	}

	@Override
	public List<Episode> getEpisodes(String userId, Integer showId, Integer seasonNumber) {
		return showRepository.getEpisodes(userId, showId, seasonNumber);
	}

	@Override
	public List<Episode> getEpisodesAllSeasons(String userId, Integer showId) {
		return showRepository.getEpisodesAllSeasons(userId, showId);
	}

	@Override
	public Episode getEpisode(String userId, Integer showId, Integer seasonNumber, Integer episodeNumber) {
		return showRepository.getEpisode(userId, showId, seasonNumber, episodeNumber);
	}

	@Override
	public List<ShowCalendar> getPersonalCalendar(String userId) {
		return showRepository.getPersonalCalendar(userId);
	}
	
}
