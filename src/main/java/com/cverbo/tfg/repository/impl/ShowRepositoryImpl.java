package com.cverbo.tfg.repository.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.ShowResult;
import com.cverbo.tfg.repository.ShowRepository;
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
	
	@Override
	public List<Show> getRecommended() {
		
		List<Show> showList = new ArrayList<>();
		
		try {
			URL url = new URL(baseUrl + "tv/popular?" + apiKey + baseLang);
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
			
			showList = showResult.getResults();
			
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
			Show showResult = objectMapper.readValue(br, Show.class);
			
			show = showResult;
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return show;
	}
	
}
