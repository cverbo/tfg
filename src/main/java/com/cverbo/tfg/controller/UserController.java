package com.cverbo.tfg.controller;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cverbo.tfg.model.mongo.MongoFollowedShow;
import com.cverbo.tfg.model.mongo.MongoFollowedUser;
import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.model.mongo.MongoWatchedEpisode;
import com.cverbo.tfg.service.impl.UserServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

	@Autowired
	UserServiceImpl userService;

    @PostMapping("/users")
    public MongoUser createUser(@Valid @RequestBody MongoUser user) {
        return userService.insertUser(user);
    }

    @GetMapping(value="/users/{id}")
    public MongoUser getUser(@PathVariable("id") String userId) {
    	return userService.getUser(userId);
    }

    @PutMapping(value="/users/{id}")
    public MongoUser updateUser(@PathVariable("id") String userId, @Valid @RequestBody MongoUser user) {
    	return userService.updateUser(userId, user);
    }
    
    @PutMapping(value="/users/inactive/{id}")
    public MongoUser inactiveUser(@PathVariable("id") String userId) {
    	return userService.inactiveUser(userId);
    }

    @PutMapping(value="/users/addshow/{id}")
    public MongoUser addFollowedShow(@PathVariable("id") String userId, @Valid @RequestBody MongoFollowedShow followedShow) {
    	return userService.addFollowedShow(userId, followedShow);
    }
    
    @PutMapping(value="/users/favoriteshow/{id}")
    public MongoUser markShowAsFavorite(@PathVariable("id") String userId, @Valid @RequestParam int showId) {
    	return userService.markShowAsFavorite(userId, showId);
    }
    
    @PutMapping(value="/users/watchepisode/{id}")
    public MongoUser addWatchedEpisode(@PathVariable("id") String userId, @Valid @RequestParam int showId, 
    		@Valid @RequestBody MongoWatchedEpisode watchedEpisode) {
    	return userService.addWatchedEpisode(userId, showId, watchedEpisode);
    }
    
    @PutMapping(value="/users/followuser/{id}")
    public MongoUser addFollowedUser(@PathVariable("id") String userId, @Valid @RequestBody MongoFollowedUser followedUser) {
    	return userService.addFollowedUser(userId, followedUser);
    }
    
}
