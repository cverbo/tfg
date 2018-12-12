package com.cverbo.tfg;

import java.util.Date;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.service.impl.UserServiceImpl;

public class UserTest {
	
	@Autowired
	UserServiceImpl userServiceImpl;	
//	static UserServiceImpl userServiceImpl;
	
//	@BeforeClass
//	public static void before() {
//		userServiceImpl = new UserServiceImpl();
//	}
	
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
		
		user.setFollowedShows(null);
		user.setFollowedUsers(null);
		user.setViewedEpisodes(null);
		
		userServiceImpl.insertUser(user);
		
	}
	
}
