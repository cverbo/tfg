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

import com.cverbo.tfg.model.Episode;
import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.model.User;
import com.cverbo.tfg.service.impl.UserServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

	@Autowired
	UserServiceImpl userService;

    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
        return userService.insertUser(user);
    }

    @GetMapping(value="/users/{id}")
    public User getUser(@PathVariable("id") String userId) {
    	return userService.getUser(userId);
    }

    @PutMapping(value="/users/{id}")
    public User updateUser(@PathVariable("id") String userId, @Valid @RequestBody User user) {
    	return userService.updateUser(userId, user);
    }
    
    @PutMapping(value="/users/inactive/{id}")
    public User inactiveUser(@PathVariable("id") String userId) {
    	return userService.inactiveUser(userId);
    }

    @PutMapping(value="/users/addshow/{id}")
    public User addFollowedShow(@PathVariable("id") String userId, @Valid @RequestBody Show followedShow) {
    	return userService.addFollowedShow(userId, followedShow);
    }
    
    @PutMapping(value="/users/favoriteshow/{id}")
    public User markShowAsFavorite(@PathVariable("id") String userId, @Valid @RequestParam int showId) {
    	return userService.markShowAsFavorite(userId, showId);
    }
    
    @PutMapping(value="/users/watchepisode/{id}")
    public User addWatchedEpisode(@PathVariable("id") String userId, @Valid @RequestParam int showId, 
    		@Valid @RequestBody Episode watchedEpisode) {
    	return userService.addWatchedEpisode(userId, showId, watchedEpisode);
    }
    
    @PutMapping(value="/users/followuser/{id}")
    public User addFollowedUser(@PathVariable("id") String userId, @Valid @RequestBody User followedUser) {
    	return userService.addFollowedUser(userId, followedUser);
    }
    
}
