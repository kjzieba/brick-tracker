package com.example.bricktracker.service;

import com.example.bricktracker.dto.PartDTO;
import com.example.bricktracker.dto.PartDetailsDTO;
import com.example.bricktracker.model.Part;
import com.example.bricktracker.repository.PartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PartService {
    private final PartRepository partRepository;
    private final ExternalApiService externalApiService;

    public boolean partExists(String partNumber) {
        if (!partRepository.partExists(partNumber)) {
            return externalApiService.partExists(partNumber);
        }
        return true;
    }

    public PartDTO partExistsByColor(String partNumber, String color) {
        if (partExists(partNumber)) {
            Part part = partRepository.findByPartNumberAndColor(partNumber, color);
            if (part == null) {
                part = partRepository.findByPartNumberAndColorId(partNumber, Integer.parseInt(color));
            }
            if (part != null) {
                return new PartDTO(part.getElementId());
            } else {
                part = externalApiService.findByPartNumberAndColor(partNumber, color);
                if (part != null) {
                    partRepository.save(part);
                    return new PartDTO(part.getElementId());
                }
            }
        }
        return new PartDTO(0);
    }

    public PartDetailsDTO getPartDetails(String elementId) {
        Part part = partRepository.findByElementId(Integer.parseInt(elementId));
        if (part != null) {
            return new PartDetailsDTO(part);
        }
        return null;
    }
}
