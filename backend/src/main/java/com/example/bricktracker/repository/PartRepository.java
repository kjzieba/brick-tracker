package com.example.bricktracker.repository;

import com.example.bricktracker.model.Part;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PartRepository extends JpaRepository<Part, UUID> {
    @Query("select case when count(p) > 0 then true else false end from Part p where p.partNumber=:partNumber")
    boolean partExists(@Param("partNumber") String partNumber);

    Part findByElementId(int elementId);

    Part findByPartNumberAndColor(String partNumber, String color);

    Part findByPartNumberAndColorId(String partNumber, int colorId);
}
