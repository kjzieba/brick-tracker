package com.example.bricktracker.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PartDTO {
    private int elementId;

    public PartDTO(int elementId) {
        this.elementId = elementId;
    }
}
