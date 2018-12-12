package com.cverbo.tfg.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cverbo.tfg.model.mongo.MongoUser;

@Repository
public interface UserRepository extends MongoRepository<MongoUser, String> {

}