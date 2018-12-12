package com.cverbo.tfg.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cverbo.tfg.model.mongo.MongoUser;
import com.cverbo.tfg.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

	@Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public List<MongoUser> getAllUsers() {
        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
        return userRepository.findAll(sortByCreatedAtDesc);
    }

    @PostMapping("/users")
    public MongoUser createUser(@Valid @RequestBody MongoUser user) {
        return userRepository.save(user);
    }

    @GetMapping(value="/users/{id}")
    public ResponseEntity<MongoUser> getTodoById(@PathVariable("id") String id) {
        return userRepository.findById(id)
                .map(user -> ResponseEntity.ok().body(user))
                .orElse(ResponseEntity.notFound().build());
    }

//    @PutMapping(value="/users/{id}")
//    public ResponseEntity<User> updateTodo(@PathVariable("id") String id,
//                                           @Valid @RequestBody User user) {
//        return userRepository.findById(id)
//                .map(userData -> {
//                    userData.setTitle(user.getTitle());
//                    userData.setCompleted(user.getCompleted());
//                    User updatedUser = userRepository.save(userData);
//                    return ResponseEntity.ok().body(updatedUser);
//                }).orElse(ResponseEntity.notFound().build());
//    }

    @DeleteMapping(value="/users/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable("id") String id) {
        return userRepository.findById(id)
                .map(todo -> {
                    userRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
    	
}
