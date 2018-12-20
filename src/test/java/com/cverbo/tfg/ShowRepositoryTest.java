package com.cverbo.tfg;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ShowRepositoryTest {
	
	@Autowired
	ShowRepositoryImpl showRepository;

	@Test
	public void getRecommendedTest() {
		
		List<Show> showList = showRepository.getRecommended("5c14f902608b892548c1bfa0");
		for (Show show : showList) {
			System.out.println(show.getName());
		}
		
	}

	@Test
	@Ignore
	public void getPopularTest() {
		
		List<Show> showList = showRepository.getPopular("5c14f902608b892548c1bfa0");
		for (Show show : showList) {
			System.out.println(show.getName());
		}
		
	}

	@Test
	@Ignore
	public void getShowTest() {
		
		showRepository.getShow(60735);
		
	}

	@Test
	@Ignore
	public void getEpisodesAllSeasonsTest() {
		
		List<Episode> episodesList = showRepository.getEpisodesAllSeasons(60735);
		for (Episode episode : episodesList) {
			System.out.println(episode.getSeason_number() + "x" + episode.getEpisode_number() + " - " + episode.getName());
		}		
		
	}

	@Test
	@Ignore
	public void getEpisodesTest() {
		
		List<Episode> episodesList = showRepository.getEpisodes(60735, 1);
		for (Episode episode : episodesList) {
			System.out.println(episode.getId() + " - " + episode.getName() + " - " + episode.getEpisode_number());
		}		
		
	}

	@Test
	@Ignore
	public void getEpisodeTest() {
		
		Episode episode = showRepository.getEpisode(60735, 1, 1);
		System.out.println(episode.getId() + " - " + episode.getName() + " - " + episode.getEpisode_number());
		
	}
	
}
