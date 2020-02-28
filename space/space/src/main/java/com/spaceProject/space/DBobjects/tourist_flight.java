package com.spaceProject.space.DBobjects;



import javax.persistence.*;

@Entity
public class tourist_flight {


    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long tourist_flight_id;

    public Long tourist_id;

    public Long flight_id;


    public Long getId_tourist_flight() {
        return tourist_flight_id;
    }

    public void setId_tourist_flight(Long id_tourist_flight) {
        this.tourist_flight_id = id_tourist_flight;
    }

    public Long getId_flight() {
        return tourist_id;
    }

    public void setId_flight(Long id_flight) {
        this.tourist_id = id_flight;
    }

    public Long getId_tourist() {
        return flight_id;
    }

    public void setId_tourist(Long id_tourist) {
        this.flight_id = id_tourist;
    }

}
