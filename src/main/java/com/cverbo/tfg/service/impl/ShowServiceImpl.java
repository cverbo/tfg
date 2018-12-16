package com.cverbo.tfg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cverbo.tfg.model.Show;
import com.cverbo.tfg.repository.impl.ShowRepositoryImpl;
import com.cverbo.tfg.service.ShowService;

@Service
public class ShowServiceImpl implements ShowService {

	@Autowired
	ShowRepositoryImpl showRepository;
	
	@Override
	public List<Show> getRecommended() {
		return showRepository.getRecommended();
	}

	@Override
	public Show getShow(Integer showId) {
		return showRepository.getShow(showId);
	}
	
}
