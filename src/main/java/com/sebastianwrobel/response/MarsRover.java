package com.sebastianwrobel.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MarsRover {
	private Long id;
	private String name;
	
	@JsonProperty("landing_date") 
	private String landingDate;
	//using Data from java.util.Date is fine, but it is not clear which timezone was used to mark it,
	//it is better to use String
	@JsonProperty("launch_date") 
	private String launchDate;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLandingDate() {
		return landingDate;
	}
	public void setLandingDate(String landingDate) {
		this.landingDate = landingDate;
	}
	
	public String getLaunchDate() {
		return launchDate;
	}
	public void setLaunchDate(String launchDate) {
		this.launchDate = launchDate;
	}
	@Override
	public String toString() {
		return "MarsRover [id=" + id + ", name=" + name + ", landingDate=" + landingDate + "]";
	}
	
	
	
}