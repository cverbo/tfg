package com.cverbo.tfg.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public List<Show> getRecommended(@RequestParam("user") String userId) {
        return showRepository.getRecommended(userId);
    }
	
	@GetMapping(value="/show/{id}")
    public Show getShow(@RequestParam("user") String userId, @PathVariable("id") Integer showId) {
        return showRepository.getShow(userId, showId);
    }
	
	@GetMapping(value="/show/search/{text}")
    public List<Show> showSearch(@RequestParam("user") String userId, @PathVariable("text") String text) {
		try {
			text = URLEncoder.encode(text, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
        return showRepository.searchShow(userId, text);
    }
	
	@GetMapping(value="/show/{id}/episodes/{season_number}")
    public List<Episode> getEpisodes(@RequestParam("user") String userId, @PathVariable("id") Integer showId, @PathVariable("season_number") Integer seasonNumber) {
        return showRepository.getEpisodes(userId, showId, seasonNumber);
    }
	
	@GetMapping(value="/show/{id}/episodes")
    public List<Episode> getEpisodesAllSeasons(@RequestParam("user") String userId, @PathVariable("id") Integer showId) {
        return showRepository.getEpisodesAllSeasons(userId, showId);
    }
	
	@GetMapping(value="/show/{id}/season/{season_number}/episode/{episode_number}")
    public Episode getEpisode(@RequestParam("user") String userId, @PathVariable("id") Integer showId, @PathVariable("season_number") Integer seasonNumber, @PathVariable("episode_number") Integer episodeNumber) {
        return showRepository.getEpisode(userId, showId, seasonNumber, episodeNumber);
    }

}
