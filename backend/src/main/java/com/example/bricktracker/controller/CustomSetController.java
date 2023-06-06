package com.example.bricktracker.controller;

import com.example.bricktracker.dto.CustomSetDTO;
import com.example.bricktracker.dto.CustomSetDetailsDTO;
import com.example.bricktracker.dto.CustomSetRequest;
import com.example.bricktracker.service.CustomSetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class CustomSetController {
    private final CustomSetService customSetService;

    @GetMapping("/public/custom-sets")
    public List<CustomSetDTO> getAllCustomSets() {
        return customSetService.getAllCustomSets();
    }

    @GetMapping("/public/custom-sets/{customSetId}")
    public CustomSetDetailsDTO getCustomSetDetails(@PathVariable UUID customSetId) {
        return customSetService.getCustomSetDetails(customSetId);
    }

    @PostMapping("/custom-sets")
    public void addCustomSet(@ModelAttribute CustomSetRequest request) {
        customSetService.addCustomSet(request);
    }

    @DeleteMapping("/mod/custom-set/{customSetID}")
    public void deleteCustomSet(@PathVariable UUID customSetID) {
        customSetService.deleteCustomSet(customSetID);
    }
}
