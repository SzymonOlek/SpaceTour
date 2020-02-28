package com.spaceProject.space.DBobjects;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface flightTouristRepository extends CrudRepository<tourist_flight, Long> {

    @Query(value = "SELECT flight_id FROM tourist_flight tf WHERE tf.tourist_id=:touristID" , nativeQuery=true)
    List<Long> findAllFlightsIDByTourist(@Param("touristID") Long touristID);

    @Query(value = "SELECT tourist_id FROM tourist_flight tf WHERE tf.flight_id=:flightID" , nativeQuery=true)
    List<Long> findAllTouristsIDbyFlights(@Param("flightID") Long flightID);




}
