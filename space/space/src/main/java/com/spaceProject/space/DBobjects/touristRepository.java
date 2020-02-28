package com.spaceProject.space.DBobjects;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface touristRepository extends CrudRepository<tourist, Long> {


    @Query(value = "SELECT * FROM tourist t WHERE t.tourist_id IN :touristsID", nativeQuery=true)
    List<tourist> findTouristsWithIDs(@Param("touristsID") Collection<Long> touristsID);

}