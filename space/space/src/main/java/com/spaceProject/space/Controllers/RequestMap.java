package com.spaceProject.space.Controllers;


import com.spaceProject.space.DBobjects.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class RequestMap {

    @Autowired
    touristRepository touristRep;

    @Autowired
    flightRepository flightRepo;

    @Autowired
    flightTouristRepository tfRepo;

    @CrossOrigin
    @RequestMapping(value = "/add/tourist", method = RequestMethod.POST)
    void addTourist(@RequestBody tourist  person) throws IOException {

//        if(person != null){
//            touristRep.save(person);
//        }

        FileWriter fileWriter = new FileWriter("sqldatafileName.txt");
        PrintWriter printWriter = new PrintWriter(fileWriter);



        String expected_value = "Hello, world!";
        String file ="sqldata.txt";
        BufferedReader reader = new BufferedReader(new FileReader(file));
        int index =9;
        String currentLine;

        while(index<1200) {
            currentLine = reader.readLine();
            if(currentLine== null) {
                break;
            }

                char numberchar = currentLine.charAt(1);
                char numberchar2 = currentLine.charAt(2);

                if (currentLine.charAt(2) != ')') {
                    printWriter.println("UPDATE `flight` SET `turist_number` = '" + numberchar + numberchar2 + "' WHERE `flight`.`flight_id` = " + index + ";");
                }else {
                    printWriter.println("UPDATE `flight` SET `turist_number` = '" + numberchar + "' WHERE `flight`.`flight_id` = " + index + ";");
                }
                index++;

        }

        reader.close();
        printWriter.close();

    }

    @CrossOrigin
    @RequestMapping(value = "/add/flightTourist", method = RequestMethod.POST)
    void addTouristFlight(@RequestBody tourist_flight  person){

        if(person != null){

            Optional<flight> temp = flightRepo.findById(person.flight_id);
            flight upadeteFlight = temp.get();
            upadeteFlight.turist_number+=1;
            tfRepo.save(person);
            flightRepo.save(upadeteFlight);
        }


    }





    @CrossOrigin
    @RequestMapping("/add/flight")
    void addFlight(@RequestBody flight someflight){

        if(someflight != null){
            flightRepo.save(someflight);
        }

        int prize =2000;

        int[] wolne_miejsca = {1,2,3,4,5,1,3,5};
        int[]  na_pokladzie = {0,1,2,3,4,5,6,7,8,9,10,4,7,10,6};
        int all_seats =0;

        Date departure_date;
        Date arrival_date;

        int rok=2025;
        int mies = 6;
        int dzien = 5;

        int[] czasDotarcia = {7,10,13,15,20,16,18};

        int rok2=2025;
        int mies2 = 6;
        int dzien2 = 5;
        Date d;
        int coun_free=0;
        int count_board=0;
        int count_czas =0;


        for(int i=0;i<1000;i++) {

            if(coun_free >= wolne_miejsca.length){
                coun_free = 0;
            }
            if(count_board >= na_pokladzie.length){
                count_board = 0;
            }
            if(count_czas >= czasDotarcia.length){
                count_czas    =0;        }

            all_seats = wolne_miejsca[coun_free++] + na_pokladzie[count_board++];
            flight tempFlight = new flight();
            d = new Date(rok++, mies++, dzien++);
            tempFlight.setDeparture_date(d);

            tempFlight.setNumber_of_places(all_seats);
            tempFlight.setTicket_price(prize);
            dzien2 = dzien;
            mies2=mies;
            rok2=rok;
            dzien2 += czasDotarcia[count_czas++];

            if( dzien2 >28 ){
                mies2 ++;
                dzien2 -= 28;
            }
            if(mies >= 12){
                rok++;
                mies -=11;
            }

            d = new Date(rok++, mies++, dzien++);
            tempFlight.setArrival_date(d);
            if(rok >= 2100){
                rok = 2030;
            }


            prize+=100;


            if(prize > 5000){
                prize = 2000;
            }

            flightRepo.save(tempFlight);
            tempFlight = new flight();

        }
    }

    @CrossOrigin
    @RequestMapping("/show/tourists")
    @ResponseBody
    Iterable<tourist> showTourists(){


        return touristRep.findAll();

    }

    @CrossOrigin
    @RequestMapping("/show/tourists/{id}")
    @ResponseBody
    tourist showTouristsFlights(@PathVariable Long id){

        Optional<tourist> searchingTourist =  touristRep.findById(id);

        if(searchingTourist.isEmpty()){
            return null;
        }

        return searchingTourist.get();


    }



    @CrossOrigin
    @RequestMapping("/show/flights")
    @ResponseBody
    Iterable<flight> showFlight(){

        return flightRepo.findAll();

    }

    @CrossOrigin
    @RequestMapping("/show/flights/{id}")
    @ResponseBody
    flight showFlight(@PathVariable Long id){


        Optional<flight> searchingFlight =  flightRepo.findById(id);
        if(searchingFlight.isEmpty()){
            return null;
        }
        return searchingFlight.get();

    }


    @CrossOrigin
    @RequestMapping("/flights/del")
    void delFlight(@RequestBody flight delFlightID){

        Optional<flight> searchingFlight =  flightRepo.findById(delFlightID.flight_id);
        if(!searchingFlight.isEmpty()){
            flightRepo.delete(searchingFlight.get());
        }

    }

    @CrossOrigin
    @RequestMapping("/tourist/del")
    void delTourist(@RequestBody tourist delTouristID){

        Optional<tourist> searchTour =  touristRep.findById(delTouristID.tourist_id);
        if(!searchTour.isEmpty()){
            touristRep.delete(searchTour.get());
        }
    }

    @CrossOrigin
    @RequestMapping("/show/flight/tourist/{touristID}")
    @ResponseBody
    List<flight> showFlightByTourist(@PathVariable Long touristID){


        List<Long> listOfFlightsID = tfRepo.findAllFlightsIDByTourist(touristID);

        return  flightRepo.findFlightsWithIDs(listOfFlightsID);


    }

    @CrossOrigin
    @RequestMapping("/show/tourist/flight/{flightID}")
    @ResponseBody
    List<tourist> showTouristsByFlight(@PathVariable Long flightID){

        List<Long> listOfTouristsID = tfRepo.findAllTouristsIDbyFlights(flightID);

        return  touristRep.findTouristsWithIDs(listOfTouristsID);

    }


    @CrossOrigin
    @RequestMapping("/touristFlight/del")
    void delTouristFlight(@RequestBody tourist_flight delFlightTourist){

       System.out.println(delFlightTourist.flight_id + " ss   "+delFlightTourist.tourist_id);

      Iterable<tourist_flight> listoOFFlights = tfRepo.findAll();

        for(tourist_flight tf :  listoOFFlights){
            if(delFlightTourist.tourist_id.equals(tf.tourist_id) && delFlightTourist.flight_id.equals(tf.flight_id)){

                Optional<flight> temp = flightRepo.findById(delFlightTourist.flight_id);
                flight upadeteFlight = temp.get();
                upadeteFlight.turist_number-=1;

                tfRepo.delete(tf);
                flightRepo.save(upadeteFlight);
            }
        }

    }




}
