package com.react.springandreact.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Welcome to spring boot and react. Current time is " + new Date();
    }

    @GetMapping("/goodbye")
    public String goodBye() {
        return "Thanks for integrating reactive and spring boot";
    }
}
