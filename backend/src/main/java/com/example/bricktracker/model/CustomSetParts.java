package com.example.bricktracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@IdClass(CustomSetPartsId.class)
public class CustomSetParts {
    @Id
    @ManyToOne
    private Part part;

    @Id
    @ManyToOne
    private CustomSet customSet;

    private int quantity;

    public CustomSetParts(Part part, CustomSet customSet, int quantity) {
        this.part = part;
        this.customSet = customSet;
        this.quantity = quantity;
    }
}
