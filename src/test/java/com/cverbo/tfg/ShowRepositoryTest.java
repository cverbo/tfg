package com.cverbo.tfg;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.NextEpisode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.ShowCalendar;
import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ShowRepositoryTest {
	
	private static final String USERID = "google-oauth2|105912882452691646006";
	private static final int SHOWID = 60735;
	private static final int SEASONID = 1;
	private static final int EPISODEID = 1;
	
	@Autowired
	ShowRepositoryImpl showRepository;
	
	@Test
	public void getPersonalCalendarTest() {
		
		List<ShowCalendar> showCalendarList = showRepository.getPersonalCalendar(USERID);
		for (ShowCalendar showCalendar : showCalendarList) {
			System.out.println("-----------FECHA: " + showCalendar.getDate() + " -----------");
			for (NextEpisode nextEpisode : showCalendar.getNextEpisodes()) {
				System.out.println("-SERIE: " + nextEpisode.getShow().getName());
				System.out.println("-EPISODIO: " + nextEpisode.getEpisode().getSeasonNumber() + "x" + nextEpisode.getEpisode().getEpisodeNumber());
			}
		}
		
	}

	@Test
	@Ignore
	public void getRecommendedTest() {
		
		List<Show> showList = showRepository.getRecommended(USERID);
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
		
		Show show = showRepository.getShow(USERID, SHOWID);
		System.out.println(show.getName());		
		
	}

	@Test
	@Ignore
	public void getEpisodesAllSeasonsTest() {
		
		List<Episode> episodesList = showRepository.getEpisodesAllSeasons(USERID, SHOWID);
		for (Episode episode : episodesList) {
			System.out.println(episode.getSeasonNumber() + "x" + episode.getEpisodeNumber() + " - " + episode.getName());
		}		
		
	}

	@Test
	@Ignore
	public void getEpisodesTest() {
		
		List<Episode> episodesList = showRepository.getEpisodes(USERID, SHOWID, SEASONID);
		for (Episode episode : episodesList) {
			System.out.println(episode.getEpisodeId() + " - " + episode.getName() + " - " + episode.getEpisodeNumber());
		}		
		
	}

	@Test
	@Ignore
	public void getEpisodeTest() {
		
		Episode episode = showRepository.getEpisode(USERID, SHOWID, SEASONID, EPISODEID);
		System.out.println(episode.getEpisodeId() + " - " + episode.getName() + " - " + episode.getEpisodeNumber());
		
	}
	
}
