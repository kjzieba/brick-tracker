package com.example.bricktracker.repository;

import com.example.bricktracker.model.CustomSetParts;
import com.example.bricktracker.model.CustomSetPartsId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface CustomSetPartsRepository extends JpaRepository<CustomSetParts, CustomSetPartsId> {
    ArrayList<CustomSetParts> findAllByCustomSetCustomSetId(UUID customSetId);
}