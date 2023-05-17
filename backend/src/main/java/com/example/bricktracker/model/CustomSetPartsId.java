package com.example.bricktracker.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Data
@Embeddable
public class CustomSetPartsId implements Serializable {
    private Part part;
    private CustomSet customSet;
}
