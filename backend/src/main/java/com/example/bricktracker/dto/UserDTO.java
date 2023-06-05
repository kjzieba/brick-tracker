package com.example.bricktracker.dto;

import com.example.bricktracker.model.Role;
import com.example.bricktracker.model.User;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

@Data
public class UserDTO {
    private String username;
    @Enumerated(value = EnumType.STRING)
    private Role role;

    public UserDTO(User user) {
        this.username = user.getUsername();
        this.role = user.getRole();
    }
}
