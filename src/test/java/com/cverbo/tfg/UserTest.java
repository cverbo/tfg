package com.cverbo.tfg;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.mongo.MongoFollowedShow;
import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.model.mongo.MongoWatchedEpisode;
import com.cverbo.tfg.service.impl.ShowServiceImpl;
import com.cverbo.tfg.service.impl.UserServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {
	
	@Autowired
	UserServiceImpl userServiceImpl;

	@Autowired
	ShowServiceImpl showService;
	
	@Test
	@Ignore
	public void updateUser_test() {
		
		String newFirstName = "Modified";
		
		MongoUser user = userServiceImpl.getUser("5c11635a608b891084b7a23a");
		String currentFirstName = user.getFirstName();
		System.out.println("Nombre orignal es: " + currentFirstName);
		user.setFirstName(newFirstName);
		userServiceImpl.updateUser(user.getId(), user);
		MongoUser modifiedUser = userServiceImpl.getUser(user.getId());
		Assert.assertTrue(modifiedUser.getFirstName().equals(newFirstName));
		System.out.println("Nombre orignal modificado:"  + modifiedUser.getFirstName());
		
		user.setFirstName(currentFirstName);
		userServiceImpl.updateUser(user.getId(), user);
		MongoUser currentUser = userServiceImpl.getUser(user.getId());
		Assert.assertTrue(currentUser.getFirstName().equals(currentFirstName));
		System.out.println("Nombre orignal restaurado: " + currentUser.getFirstName());
		
	}
	
	@Test
	@Ignore
	public void getUser_test() {
		
		MongoUser user = userServiceImpl.getUser("5c11635a608b891084b7a23a");
		Assert.assertFalse(user.getId() == null);
		
		System.out.println(user.getFirstName());
		
	}
	
	@Test
	public void insertUser_test() {
		
		MongoUser user = new MongoUser();
		
		user.setActive(true);
		user.setBirthDate(new Date());
		user.setEmail("carlos.verbo@gmail.com");
		user.setFirstName("Carlos");
		user.setLastName("Verbo");
		user.setPassword("1111");
		user.setUserName("carlos.verbo");
		
		List<Show> showList = showService.getRecommended("5c14f902608b892548c1bfa0");
		List<MongoFollowedShow> followedShows = new ArrayList<>();
		
		MongoFollowedShow followedShow;
		for (Show show : showList) {
			followedShow = new MongoFollowedShow();
			followedShow.setFavorite(false);
			followedShow.setShowId(show.getId());
			followedShow.setShowImgUrl(show.getPoster_path());
			followedShow.setShowName(show.getName());
			followedShows.add(followedShow);
		}
		
		user.setFollowedShows(followedShows);
		
		MongoWatchedEpisode watchedEpisode = new MongoWatchedEpisode();
		
		watchedEpisode.setShowId(44217);
		watchedEpisode.setSeasonNumber(1);
		watchedEpisode.setEpisodeNumber(1);
		
		user.setFollowedUsers(null);
		user.setWatchedEpisodes(null);
		
		userServiceImpl.insertUser(user);
		
	}
	
}
