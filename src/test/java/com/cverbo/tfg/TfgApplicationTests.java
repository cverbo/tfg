package com.cverbo.tfg;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TfgApplicationTests {

	@Autowired
	ShowRepositoryImpl showRepository;

	@Test
	public void getShowTest() {
		
		showRepository.getShow(60735);
		
	}

}
