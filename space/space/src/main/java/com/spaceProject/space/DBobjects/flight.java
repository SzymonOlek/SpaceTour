package com.spaceProject.space.DBobjects;



import javax.persistence.*;
import java.sql.Date;

@Entity
public class flight {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long flight_id;
    public Date departure_date;
    public Date arrival_date;
    public int number_of_places;
    public int turist_number;
    public int ticket_price;

    public Long getFlight_id() {
        return flight_id;
    }

    public void setFlight_id(Long flight_id) {
        this.flight_id = flight_id;
    }

    public Date getDeparture_date() {
        return departure_date;
    }

    public void setDeparture_date(Date departure_date) {
        this.departure_date = departure_date;
    }

    public Date getArrival_date() {
        return arrival_date;
    }

    public void setArrival_date(Date arrival_date) {
        this.arrival_date = arrival_date;
    }

    public int getNumber_of_places() {
        return number_of_places;
    }

    public void setNumber_of_places(int number_of_places) {
        this.number_of_places = number_of_places;
    }

    public int getTurist_number() {
        return turist_number;
    }

    public void setTurist_number(int turist_number) {
        this.turist_number = turist_number;
    }

    public int getTicket_price() {
        return ticket_price;
    }

    public void setTicket_price(int ticket_price) {
        this.ticket_price = ticket_price;
    }

}
