package com.cverbo.tfg.repository.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.EpisodeResult;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.ShowResult;
import com.cverbo.tfg.model.mongo.MongoFollowedShow;
import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.repository.ShowRepository;
import com.cverbo.tfg.service.UserService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

@Repository
public class ShowRepositoryImpl implements ShowRepository {
	
	@Value("${themoviedb.api.key}")
	private String apiKey;

	@Value("${themoviedb.api.baseUrl}")
	private String baseUrl;

	@Value("${themoviedb.api.baseLang}")
	private String baseLang;
	
	@Autowired
	private UserService userService;
	
	@Override
	public List<Show> getRecommended(String userId) {
		
		//Recoger un id de serie al azar para devolver las recomendanciones 
		Random random = new Random();
		MongoUser user = userService.getUser(userId);
		List<Integer> followedShowsIdList = new ArrayList<>();
		for (MongoFollowedShow followedShow : user.getFollowedShows()) {
			followedShowsIdList.add(followedShow.getShowId());
		}
		int randomFollowedShowId = followedShowsIdList.get(random.nextInt(followedShowsIdList.size()));
		
		List<Show> showList = new LinkedList<>();
		showList.add(this.getShow(randomFollowedShowId));
		System.out.println(this.getShow(randomFollowedShowId).getName());
		
		try {
			URL url = new URL(baseUrl + "tv/" + randomFollowedShowId + "/recommendations?page=1&" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			ShowResult showResult = objectMapper.readValue(br, ShowResult.class);
			
			for (Show show : showResult.getResults()) {
				if (!followedShowsIdList.contains(show.getId())) {
					showList.add(show);
				}
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return showList;
				
	}
	
	@Override
	public List<Show> getPopular(String userId) {
		
		MongoUser user = userService.getUser(userId);
		List<Integer> followedShowsIdList = new ArrayList<>();
		for (MongoFollowedShow followedShow : user.getFollowedShows()) {
			followedShowsIdList.add(followedShow.getShowId());
		}
		
		List<Show> showList = new ArrayList<>();
		
		try {
			URL url = new URL(baseUrl + "tv/popular?page=1&" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			ShowResult showResult = objectMapper.readValue(br, ShowResult.class);
			
			for (Show show : showResult.getResults()) {
				if (!followedShowsIdList.contains(show.getId())) {
					showList.add(show);
				}
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return showList;
				
	}

	public Show getShow(Integer showId) {
		
		Show show = new Show();
		
		try {
			URL url = new URL(baseUrl + "tv/" + showId + "?" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			show = objectMapper.readValue(br, Show.class);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return show;
	}
	
	@Override
	public List<Show> searchShow(String text) {
		
		List<Show> showList = new ArrayList<>();
		
		try {
			URL url = new URL(baseUrl + "search/tv?query=" + text + "&page=1&" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			ShowResult showResult = objectMapper.readValue(br, ShowResult.class);
			
			showList.addAll(showResult.getResults());
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return showList;
	}
	
	@Override
	public List<Episode> getEpisodesAllSeasons(Integer showId) {
		
		Show show = this.getShow(showId);
		int numberOfSeasons = show.getNumber_of_seasons();

		List<Episode> episodeList = new ArrayList<>();
		
		try {
			for (int i = 1; i <= numberOfSeasons; i++) {
				URL url = new URL(baseUrl + "tv/" + showId + "/season/" + i + "?" + apiKey + baseLang);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setRequestMethod("GET");
				conn.setRequestProperty("Accept", "application/json");
				conn.connect();
				
				if (conn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
				}
				
				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				
				ObjectMapper objectMapper = new ObjectMapper();
				objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
				EpisodeResult episodeResult = objectMapper.readValue(br, EpisodeResult.class);
				
				episodeList.addAll(episodeResult.getEpisodes());
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return episodeList;
	}

	@Override
	public List<Episode> getEpisodes(Integer showId, Integer seasonNumber) {
		
		List<Episode> episodeList = new ArrayList<>();
		
		try {
			URL url = new URL(baseUrl + "tv/" + showId + "/season/" + seasonNumber + "?" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			EpisodeResult episodeResult = objectMapper.readValue(br, EpisodeResult.class);
			
			episodeList.addAll(episodeResult.getEpisodes());
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return episodeList;
	}

	@Override
	public Episode getEpisode(Integer showId, Integer seasonNumber, Integer episodeNumber) {

		Episode episode = new Episode();
		
		try {
			URL url = new URL(baseUrl + "tv/" + showId + "/season/" + seasonNumber + "/episode/" + episodeNumber + "?" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			episode = objectMapper.readValue(br, Episode.class);
			
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return episode;
	}
	
}
