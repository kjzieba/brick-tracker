package com.example.bricktracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
public class CustomSet {
    @Id
    @GeneratedValue
    private UUID customSetId;

    private String title;
    private String description;
    private byte[] photo;
    private byte[] instruction;

    @CreationTimestamp
    private LocalDate creationDate;

    public CustomSet(String title, String description, byte[] photo, byte[] instruction) {
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.instruction = instruction;
    }
}
