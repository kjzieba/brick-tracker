package com.example.bricktracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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

    @ManyToOne
    private User creator;

    @CreationTimestamp
    private LocalDate creationDate;

    public CustomSet(String title, String description, byte[] photo, byte[] instruction, User user) {
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.instruction = instruction;
        this.creator = user;
    }
}
