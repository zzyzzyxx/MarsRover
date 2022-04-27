package com.sebastianwrobel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sebastianwrobel.dto.HomeDto;

public interface PreferencesRepository extends JpaRepository<HomeDto, Long>{
	
	// the code below on how to create custom queries is not needed, because "findBy..." naming convention is used, which is built in 
	
//	@Query("select dto from HomeDto dto where userId = :userId")
//	@Query(value="select * from mars_api_preferences where user_id = :userId", nativeQuery=true)
	HomeDto findByUserId(Long userId);
	
}