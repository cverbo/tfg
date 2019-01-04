package com.cverbo.tfg.model;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor
public class ShowCalendar implements Comparable<ShowCalendar> {
	
	private Date date;
	private List<NextEpisode> nextEpisodes;
	
	@Override
	public int compareTo(ShowCalendar showCalendar) {
		return getDate().compareTo(showCalendar.getDate());
	}

}
