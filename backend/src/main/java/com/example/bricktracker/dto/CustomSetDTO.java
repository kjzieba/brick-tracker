package com.example.bricktracker.dto;

import com.example.bricktracker.model.CustomSet;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
public class CustomSetDTO {
    private UUID customSetId;
    private String title;
    private byte[] photo;
    private LocalDate creationDate;

    public CustomSetDTO(CustomSet customSet) {
        this.customSetId = customSet.getCustomSetId();
        this.title = customSet.getTitle();
        this.photo = customSet.getPhoto();
        this.creationDate = customSet.getCreationDate();
    }
}
