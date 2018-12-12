package com.cverbo.tfg;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;

public class ShowRepositoryTest {
	
	@BeforeClass
	public static void before() {
		
	}
	
	@Autowired
	ShowRepositoryImpl showRepository;

	@Test
	public void getShowTest() {
		
		showRepository.getShow(60735);
		
	}
	
}
