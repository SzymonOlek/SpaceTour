package com.spaceProject.space.DBobjects;


import javax.persistence.*;
import java.sql.Date;

@Entity
public class tourist {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long tourist_id;
    public String name;
    public String lastname;
    public String sex;
    public String country;
    public String notes;
    public Date birth;

    public Long getTourist_id() {
        return tourist_id;
    }

    public void setTourist_id(Long tourist_id) {
        this.tourist_id = tourist_id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

}
