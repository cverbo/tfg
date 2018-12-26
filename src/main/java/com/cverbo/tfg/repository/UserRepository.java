package com.cverbo.tfg.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cverbo.tfg.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}