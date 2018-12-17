package com.cverbo.tfg;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ShowRepositoryTest {
	
	@Autowired
	ShowRepositoryImpl showRepository;

	@Test
	@Ignore
	public void getShowTest() {
		
		showRepository.getShow(60735);
		
	}

	@Test
	public void getEpisodesTest() {
		
		List<Episode> episodesList = showRepository.getEpisodes(60735, 1);
		for (Episode episode : episodesList) {
			System.out.println(episode.getId() + " - " + episode.getName() + " - " + episode.getEpisode_number());
		}		
		
	}

	@Test
	public void getEpisodeTest() {
		
		Episode episode = showRepository.getEpisode(60735, 1, 1);
		System.out.println(episode.getId() + " - " + episode.getName() + " - " + episode.getEpisode_number());
		
	}
	
}
