package com.spaceProject.space.DBobjects;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface flightRepository extends CrudRepository<flight, Long> {

    @Query(value = "SELECT * FROM flight f WHERE f.flight_id IN :flightsID", nativeQuery=true)
    List<flight> findFlightsWithIDs(@Param("flightsID") Collection<Long> flightsID);





}
