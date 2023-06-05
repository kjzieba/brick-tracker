package com.example.bricktracker.controller;

import com.example.bricktracker.dto.UserDTO;
import com.example.bricktracker.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    private final UserService userService;

    @GetMapping("/user")
    public UserDTO getUser() {
        return userService.getUser();
    }
}
