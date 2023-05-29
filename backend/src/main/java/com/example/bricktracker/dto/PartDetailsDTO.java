package com.example.bricktracker.dto;

import com.example.bricktracker.model.Part;
import lombok.Data;

@Data
public class PartDetailsDTO {
    private int elementId;
    private String partNumber;
    private String name;
    private String color;
    private String imgUrl;
    private int quantity;

    public PartDetailsDTO(Part part, int quantity) {
        this.elementId = part.getElementId();
        this.partNumber = part.getPartNumber();
        this.name = part.getName();
        this.color = part.getColor();
        this.imgUrl = part.getImgUrl();
        this.quantity = quantity;
    }

    public PartDetailsDTO(Part part) {
        this.elementId = part.getElementId();
        this.partNumber = part.getPartNumber();
        this.name = part.getName();
        this.color = part.getColor();
        this.imgUrl = part.getImgUrl();
    }
}
