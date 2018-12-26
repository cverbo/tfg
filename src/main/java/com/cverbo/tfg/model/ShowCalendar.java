package com.cverbo.tfg.model;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ShowCalendar {
	
	private Date date;
	private List<Show> showList;

}
