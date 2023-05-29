package com.example.bricktracker.controller;

import com.example.bricktracker.dto.PartDTO;
import com.example.bricktracker.dto.PartDetailsDTO;
import com.example.bricktracker.service.PartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class PartController {
    private final PartService partService;

    @GetMapping("/part/{partNumber}")
    public boolean partExists(@PathVariable String partNumber) {
        return partService.partExists(partNumber);
    }

    @GetMapping("/part/{partNumber}/{color}")
    public PartDTO getElementId(@PathVariable String partNumber, @PathVariable String color) {
        return partService.partExistsByColor(partNumber, color);
    }

    @GetMapping("/element/{elementId}")
    public PartDetailsDTO getPartDetails(@PathVariable String elementId) {
        return partService.getPartDetails(elementId);
    }
}
