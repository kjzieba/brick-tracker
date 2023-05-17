package com.example.bricktracker.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CustomSetRequest {
    private String title;
    private String description;
    private MultipartFile photo;
    private MultipartFile instruction;
    private String parts;
}
