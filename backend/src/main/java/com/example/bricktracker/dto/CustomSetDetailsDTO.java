package com.example.bricktracker.dto;

import com.example.bricktracker.model.CustomSet;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
public class CustomSetDetailsDTO {
    private UUID customSetId;
    private String title;
    private String description;
    private byte[] photo;
    private byte[] instruction;
    private LocalDate creationDate;
    private PartDetailsDTO[] parts;

    public CustomSetDetailsDTO(CustomSet customSet) {
        this.customSetId = customSet.getCustomSetId();
        this.title = customSet.getTitle();
        this.description = customSet.getDescription();
        this.photo = customSet.getPhoto();
        this.instruction = customSet.getInstruction();
        this.creationDate = customSet.getCreationDate();
    }
}
