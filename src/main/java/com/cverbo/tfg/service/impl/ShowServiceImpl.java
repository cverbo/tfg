package com.cverbo.tfg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;
import com.cverbo.tfg.service.ShowService;

@Service
public class ShowServiceImpl implements ShowService {

	@Autowired
	ShowRepositoryImpl showRepository;
	
	@Override
	public List<Show> getRecommended() {
		return showRepository.getRecommended();
	}

	@Override
	public Show getShow(Integer showId) {
		return showRepository.getShow(showId);
	}

	@Override
	public List<Episode> getEpisodes(Integer showId, Integer seasonNumber) {
		return showRepository.getEpisodes(showId, seasonNumber);
	}

	@Override
	public Episode getEpisode(Integer showId, Integer seasonNumber, Integer episodeNumber) {
		return showRepository.getEpisode(showId, seasonNumber, episodeNumber);
	}
	
}
