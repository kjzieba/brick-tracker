package com.example.bricktracker.service;

import com.example.bricktracker.dto.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final AuthenticationService authenticationService;

    public UserDTO getUser() {
        return new UserDTO(authenticationService.getLoggedInUser());
    }
}
