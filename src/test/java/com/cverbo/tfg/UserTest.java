package com.cverbo.tfg;

import java.util.List;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.User;
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
		
		User user = userServiceImpl.getUser("5c11635a608b891084b7a23a");
		String currentFirstName = user.getFullName();
		System.out.println("Nombre orignal es: " + currentFirstName);
		user.setFullName(newFirstName);
		userServiceImpl.updateUser(user.getId(), user);
		User modifiedUser = userServiceImpl.getUser(user.getId());
		Assert.assertTrue(modifiedUser.getFullName().equals(newFirstName));
		System.out.println("Nombre orignal modificado:"  + modifiedUser.getFullName());
		
		user.setFullName(currentFirstName);
		userServiceImpl.updateUser(user.getId(), user);
		User currentUser = userServiceImpl.getUser(user.getId());
		Assert.assertTrue(currentUser.getFullName().equals(currentFirstName));
		System.out.println("Nombre orignal restaurado: " + currentUser.getFullName());
		
	}
	
	@Test
	@Ignore
	public void getUser_test() {
		
		User user = userServiceImpl.getUser("5c11635a608b891084b7a23a");
		Assert.assertFalse(user.getId() == null);
		
		System.out.println(user.getFullName());
		
	}
	
	@Test
	public void insertUser_test() {
		
		User user = new User();
		
		user.setActive(true);
		user.setEmail("carlos.verbo@gmail.com");
		user.setFullName("Carlos Verbo");
		user.setPassword("1111");
		user.setUserName("carlos.verbo");
		
		List<Show> showList = showService.getRecommended("5c14f902608b892548c1bfa0");
		user.setFollowedShows(showList);
		
		Episode watchedEpisode = new Episode();
		
		watchedEpisode.setShowId(44217);
		watchedEpisode.setSeasonNumber(1);
		watchedEpisode.setEpisodeNumber(1);
		
		user.setFollowedUsers(null);
		user.setWatchedEpisodes(null);
		
		userServiceImpl.insertUser(user);
		
	}
	
}
