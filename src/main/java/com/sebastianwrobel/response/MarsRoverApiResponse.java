package com.sebastianwrobel.response;

import java.util.ArrayList;
import java.util.List;

public class MarsRoverApiResponse {
	List<MarsPhoto> photos = new ArrayList<>();
	//solution to Bug - no getters and setters 	
	public List<MarsPhoto> getPhotos() {
		return photos;
	}

	public void setPhotos(List<MarsPhoto> photos) {
		this.photos = photos;
	}

	@Override
	public String toString() {
		return "MarsRoverApiResponse [photos=" + photos + "]";
	}
}