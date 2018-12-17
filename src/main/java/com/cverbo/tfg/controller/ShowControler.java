package com.cverbo.tfg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ShowControler {

	@Autowired
	ShowRepositoryImpl showRepository;
	
	@GetMapping("/recommended")
    public List<Show> getRecommended() {
        return showRepository.getRecommended();
    }
	
	@GetMapping(value="/show/{id}")
    public Show getShow(@PathVariable("id") Integer showId) {
        return showRepository.getShow(showId);
    }
	
	@GetMapping(value="/show/{id}/season/{season_number}")
    public List<Episode> getEpisodes(@PathVariable("id") Integer showId, @PathVariable("season_number") Integer seasonNumber) {
        return showRepository.getEpisodes(showId, seasonNumber);
    }
	
	@GetMapping(value="/show/{id}/season/{season_number}/episode/{episode_number}")
    public Episode getEpisode(@PathVariable("id") Integer showId, @PathVariable("season_number") Integer seasonNumber, @PathVariable("episode_number") Integer episodeNumber) {
        return showRepository.getEpisode(showId, seasonNumber, episodeNumber);
    }

}
