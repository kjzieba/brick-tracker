package com.example.bricktracker.repository;

import com.example.bricktracker.model.CustomSet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CustomSetRepository extends JpaRepository<CustomSet, UUID> {
}
