package com.cverbo.tfg.repository.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.NextEpisode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.ShowCalendar;
import com.cverbo.tfg.model.ShowDetailed;
import com.cverbo.tfg.model.User;
import com.cverbo.tfg.model.fetch.EpisodeFetch;
import com.cverbo.tfg.model.fetch.EpisodeResultFetch;
import com.cverbo.tfg.model.fetch.ShowFetch;
import com.cverbo.tfg.model.fetch.ShowResultFetch;
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
		User user = userService.getUser(userId);
		List<Integer> followedShowsIdList = new ArrayList<>();
		List<Show> showList = new LinkedList<>();

		if (user.getFollowedShows() != null && !user.getFollowedShows().isEmpty()) {
			for (Show followedShow : user.getFollowedShows()) {
				followedShowsIdList.add(followedShow.getId());
			}
			int randomFollowedShowId = followedShowsIdList.get(random.nextInt(followedShowsIdList.size()));
			showList.add(this.getShow(userId, randomFollowedShowId));
		
			try {
				URL url = new URL(baseUrl + "tv/" + randomFollowedShowId + "/recommendations?page=1&" + apiKey + baseLang);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setRequestMethod("GET");
				conn.setRequestProperty("Accept", "application/json");
				conn.connect();
				
				if (conn.getResponseCode() == 429) {
//					try {
//						Thread.sleep(1000);
						return getRecommended(userId);
//					} catch (InterruptedException e) {
//						e.printStackTrace();
//					}
				} else if (conn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
				}
				
				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				
				ObjectMapper objectMapper = new ObjectMapper();
				objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
				ShowResultFetch showResultFetch = objectMapper.readValue(br, ShowResultFetch.class);
				
				for (ShowFetch showFetch : showResultFetch.getResults()) {
					if (!followedShowsIdList.contains(showFetch.getId())) {
						Show show = fromShowFetchToShow(showFetch, false, false);
						showList.add(show);
					}
				}
				
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			return showList;
		
		} else {
			return getPopular(userId);
		}
				
	}
	
	@Override
	public List<Show> getPopular(String userId) {
		
		User user = userService.getUser(userId);
		List<Integer> followedShowsIdList = new ArrayList<>();
		
		if (user.getFollowedShows() != null && !user.getFollowedShows().isEmpty()) {
			for (Show followedShow : user.getFollowedShows()) {
				followedShowsIdList.add(followedShow.getId());
			}
		}
		
		List<Show> showList = new ArrayList<>();
		
		try {
			URL url = new URL(baseUrl + "tv/popular?page=1&" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() == 429) {
//				try {
//					Thread.sleep(1000);
					return getPopular(userId);
//				} catch (InterruptedException e) {
//					e.printStackTrace();
//				}
			} else if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			ShowResultFetch showResultFetch = objectMapper.readValue(br, ShowResultFetch.class);
			
			for (ShowFetch showFetch : showResultFetch.getResults()) {
				if (!followedShowsIdList.contains(showFetch.getId())) {
					Show show = fromShowFetchToShow(showFetch, false, false);
					showList.add(show);
				}
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return showList;
				
	}

	@Override
	public Show getShow(String userId, Integer showId) {

		Show show = new Show();
		ShowFetch showFetch = new ShowFetch();
		boolean isFollowed = false;
		boolean isFavorite = false;
		
		User user = userService.getUser(userId);
		List<Integer> followedShowsIdList = new ArrayList<>();
		List<Integer> favoriteShowsIdList = new ArrayList<>();

		if (user.getFollowedShows() != null && !user.getFollowedShows().isEmpty()) {
			for (Show followedShow : user.getFollowedShows()) {
				followedShowsIdList.add(followedShow.getId());
				if (followedShow.isFavorite()) {
					favoriteShowsIdList.add(followedShow.getId());
				}
			}
		}
		
		try {
			URL url = new URL(baseUrl + "tv/" + showId + "?" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() == 429) {
//				try {
//					Thread.sleep(1000);
					return getShow(userId, showId);
//				} catch (InterruptedException e) {
//					e.printStackTrace();
//				}
			} else if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			showFetch = objectMapper.readValue(br, ShowFetch.class);
			if (followedShowsIdList.contains(showFetch.getId())) {
				isFollowed = true;
			}
			if (favoriteShowsIdList.contains(showFetch.getId())) {
				isFavorite = true;
			}
			show = fromShowFetchToShow(showFetch, isFollowed, isFavorite);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return show;
	}
	


	@Override
	public ShowDetailed getShowDetailed(String userId, Integer showId) {

		ShowDetailed show = new ShowDetailed();
		ShowFetch showFetch = new ShowFetch();
		boolean isFollowed = false;
		boolean isFavorite = false;
		
		User user = userService.getUser(userId);
		List<Integer> followedShowsIdList = new ArrayList<>();
		List<Integer> favoriteShowsIdList = new ArrayList<>();

		if (user.getFollowedShows() != null && !user.getFollowedShows().isEmpty()) {
			for (Show followedShow : user.getFollowedShows()) {
				followedShowsIdList.add(followedShow.getId());
				if (followedShow.isFavorite()) {
					favoriteShowsIdList.add(followedShow.getId());
				}
			}
		}
		
		try {
			URL url = new URL(baseUrl + "tv/" + showId + "?" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() == 429) {
//				try {
//					Thread.sleep(1000);
					return getShowDetailed(userId, showId);
//				} catch (InterruptedException e) {
//					e.printStackTrace();
//				}
			} else if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			showFetch = objectMapper.readValue(br, ShowFetch.class);
			if (followedShowsIdList.contains(showFetch.getId())) {
				isFollowed = true;
			}
			if (favoriteShowsIdList.contains(showFetch.getId())) {
				isFavorite = true;
			}
			show = fromShowFetchToShowDetailed(showFetch, isFollowed, isFavorite);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return show;
	}
	
	@Override
	public List<Show> searchShow(String userId, String text) {
		
		List<Show> showList = new ArrayList<>();
		
		User user = userService.getUser(userId);
		List<Integer> followedShowsIdList = new ArrayList<>();
		List<Integer> favoriteShowsIdList = new ArrayList<>();
		
		if (user.getFollowedShows() != null && !user.getFollowedShows().isEmpty()) {
			for (Show followedShow : user.getFollowedShows()) {
				followedShowsIdList.add(followedShow.getId());
				if (followedShow.isFavorite()) {
					favoriteShowsIdList.add(followedShow.getId());
				}
			}
		}
		
		try {
			URL url = new URL(baseUrl + "search/tv?query=" + text + "&page=1&" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() == 429) {
//				try {
//					Thread.sleep(1000);
					return searchShow(userId, text);
//				} catch (InterruptedException e) {
//					e.printStackTrace();
//				}
			} else if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			ShowResultFetch showResultFetch = objectMapper.readValue(br, ShowResultFetch.class);
			
			for (ShowFetch showFetch : showResultFetch.getResults()) {
				boolean isFollowed = false;
				boolean isFavorite = false;
				if (followedShowsIdList.contains(showFetch.getId())) {
					isFollowed = true;
				}
				if (favoriteShowsIdList.contains(showFetch.getId())) {
					isFavorite = true;
				}
				Show show = fromShowFetchToShow(showFetch, isFollowed, isFavorite);
				showList.add(show);
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return showList;
	}
	
	@Override
	public List<Episode> getEpisodesAllSeasons(String userId, Integer showId) {
		
		ShowDetailed showDetailed = this.getShowDetailed(userId, showId);
		int numberOfSeasons = showDetailed.getNumberOfSeasons();

		User user = userService.getUser(userId);
		List<Integer> watchedEpisodesIdList = new ArrayList<>();

		if (user.getWatchedEpisodes() != null && !user.getWatchedEpisodes().isEmpty()) {
			for (Episode watchedEpisode : user.getWatchedEpisodes()) {
				watchedEpisodesIdList.add(watchedEpisode.getEpisodeId());
			}
		}
		
		List<Episode> episodeList = new LinkedList<>();
		
		try {
			for (int i = 1; i <= numberOfSeasons; i++) {
				URL url = new URL(baseUrl + "tv/" + showId + "/season/" + i + "?" + apiKey + baseLang);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setRequestMethod("GET");
				conn.setRequestProperty("Accept", "application/json");
				conn.connect();
				
				if (conn.getResponseCode() == 429) {
//					try {
//						Thread.sleep(1000);
						return getEpisodesAllSeasons(userId, showId);
//					} catch (InterruptedException e) {
//						e.printStackTrace();
//					}
				} else if (conn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
				}
				
				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				
				ObjectMapper objectMapper = new ObjectMapper();
				objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
				EpisodeResultFetch episodeResult = objectMapper.readValue(br, EpisodeResultFetch.class);
				
				for (EpisodeFetch episodeFetch : episodeResult.getEpisodes()) {
					boolean isWatched = false;
					if (watchedEpisodesIdList.contains(episodeFetch.getId())) {
						isWatched = true;
					}
					Episode episode = fromEpisodeFetchToEpisode(episodeFetch, isWatched);
					episodeList.add(episode);
				}
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return episodeList;
	}

	@Override
	public List<Episode> getEpisodes(String userId, Integer showId, Integer seasonNumber) {
		
		List<Episode> episodeList = new LinkedList<>();

		User user = userService.getUser(userId);
		List<Integer> watchedEpisodesIdList = new ArrayList<>();
		
		if (user.getWatchedEpisodes() != null && !user.getWatchedEpisodes().isEmpty()) {
			for (Episode watchedEpisode : user.getWatchedEpisodes()) {
				watchedEpisodesIdList.add(watchedEpisode.getEpisodeId());
			}
		}
		
		try {
			URL url = new URL(baseUrl + "tv/" + showId + "/season/" + seasonNumber + "?" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() == 429) {
//				try {
//					Thread.sleep(1000);
					return getEpisodes(userId, showId, seasonNumber);
//				} catch (InterruptedException e) {
//					e.printStackTrace();
//				}
			} else if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			EpisodeResultFetch episodeResult = objectMapper.readValue(br, EpisodeResultFetch.class);
		
			for (EpisodeFetch episodeFetch : episodeResult.getEpisodes()) {
				boolean isWatched = false;
				if (watchedEpisodesIdList.contains(episodeFetch.getId())) {
					isWatched = true;
				}
				Episode episode = fromEpisodeFetchToEpisode(episodeFetch, isWatched);
				episodeList.add(episode);
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return episodeList;
	}

	@Override
	public Episode getEpisode(String userId, Integer showId, Integer seasonNumber, Integer episodeNumber) {

		Episode episode = new Episode();
		EpisodeFetch episodeFetch = new EpisodeFetch();
		boolean isWatched = false;
		
		User user = userService.getUser(userId);
		List<Integer> watchedEpisodesIdList = new ArrayList<>();

		if (user.getWatchedEpisodes() != null && !user.getWatchedEpisodes().isEmpty()) {
			for (Episode watchedEpisode : user.getWatchedEpisodes()) {
				watchedEpisodesIdList.add(watchedEpisode.getEpisodeId());
			}
		}
		
		try {
			URL url = new URL(baseUrl + "tv/" + showId + "/season/" + seasonNumber + "/episode/" + episodeNumber + "?" + apiKey + baseLang);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			conn.connect();
			
			if (conn.getResponseCode() == 429) {
//				try {
//					Thread.sleep(1000);
					return getEpisode(userId, showId, seasonNumber, episodeNumber);
//				} catch (InterruptedException e) {
//					e.printStackTrace();
//				}
			} else if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}
			
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
			episodeFetch = objectMapper.readValue(br, EpisodeFetch.class);
			
			if (watchedEpisodesIdList.contains(episodeFetch.getId())) {
				isWatched = true;
			}
			episode = fromEpisodeFetchToEpisode(episodeFetch, isWatched);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return episode;
	}

	@Override
	public List<ShowCalendar> getPersonalCalendar(String userId) {
		User user = userService.getUser(userId);
		Map<Date, List<NextEpisode>> nextEpisodesMap = new HashMap<>();
		
		List<Show> followedShowsList = user.getFollowedShows();
		for (Show followedShow : followedShowsList) {
			List<Episode> episodesList = getEpisodesAllSeasons(userId, followedShow.getId());
			boolean found = false;
			for (Episode episode : episodesList) {
				if (!found) {
					if(!episode.isWatched()) {
						found = true;
						NextEpisode nextEpisode = new NextEpisode(followedShow, episode);
						List<NextEpisode> nextEpisodeList = nextEpisodesMap.get(episode.getAirDate());
						if(nextEpisodeList == null) {
							nextEpisodeList = new ArrayList<>();
						}
						nextEpisodeList.add(nextEpisode);
						nextEpisodesMap.put(episode.getAirDate(), nextEpisodeList);
					}
				}
			}
		}
		
		List<ShowCalendar> showCalendarList = new ArrayList<>();
		for (Date date : nextEpisodesMap.keySet()) {
			ShowCalendar showCalendar = new ShowCalendar(date, nextEpisodesMap.get(date));
			showCalendarList.add(showCalendar);
		}
		
		Collections.sort(showCalendarList);
		return showCalendarList; 
	}
	
	private Show fromShowFetchToShow(ShowFetch showFetch, boolean followed, boolean favorite) {
		Show show = new Show();
		show.setId(showFetch.getId());
		show.setName(showFetch.getName());
		show.setFirstAirDate(showFetch.getFirst_air_date());
		show.setOverview(showFetch.getOverview());
		show.setPosterPath(showFetch.getPoster_path());
		show.setVoteAverage(showFetch.getVote_average());
		show.setFollowed(followed);
		show.setFavorite(favorite);
		return show;
	}
	
	private ShowDetailed fromShowFetchToShowDetailed(ShowFetch showFetch, boolean followed, boolean favorite) {
		ShowDetailed show = new ShowDetailed();
		show.setId(showFetch.getId());
		show.setName(showFetch.getName());
		show.setFirstAirDate(showFetch.getFirst_air_date());
		show.setOverview(showFetch.getOverview());
		show.setPosterPath(showFetch.getPoster_path());
		show.setVoteAverage(showFetch.getVote_average());
		show.setNumberOfSeasons(showFetch.getNumber_of_seasons());
		show.setFollowed(followed);
		show.setFavorite(favorite);
		return show;
	}
	
	private Episode fromEpisodeFetchToEpisode(EpisodeFetch episodeFetch, boolean isWatched) {
		Episode episode = new Episode();
		episode.setEpisodeId(episodeFetch.getId());
		episode.setShowId(episodeFetch.getShow_id());
		episode.setEpisodeNumber(episodeFetch.getEpisode_number());
		episode.setName(episodeFetch.getName());
		episode.setSeasonNumber(episodeFetch.getSeason_number());
		episode.setOverview(episodeFetch.getOverview());
		episode.setStillPath(episodeFetch.getStill_path());
		episode.setAirDate(episodeFetch.getAir_date());
		episode.setWatched(isWatched);
		return episode;
	}
	
}
