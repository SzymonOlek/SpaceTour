package com.spaceProject.space.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sh")
public class Gretting {

    @RequestMapping("/show")
    String show(){

        return "show";

    }

}
