package com.example.bricktracker.service;

import com.example.bricktracker.dto.*;
import com.example.bricktracker.model.CustomSet;
import com.example.bricktracker.model.CustomSetParts;
import com.example.bricktracker.model.Part;
import com.example.bricktracker.model.User;
import com.example.bricktracker.repository.CustomSetPartsRepository;
import com.example.bricktracker.repository.CustomSetRepository;
import com.example.bricktracker.repository.PartRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomSetService {
    private final CustomSetRepository customSetRepository;
    private final CustomSetPartsRepository customSetPartsRepository;
    private final PartRepository partRepository;
    private final AuthenticationService authenticationService;

    public List<CustomSetDTO> getAllCustomSets() {
        List<CustomSet> allCustomSets = customSetRepository.findAll();
        return allCustomSets.stream().map(CustomSetDTO::new).toList();
    }

    public CustomSetDetailsDTO getCustomSetDetails(UUID customSetId) {
        CustomSet customSet = customSetRepository.findById(customSetId).orElse(null);
        assert customSet != null;
        ArrayList<CustomSetParts> partsSets = customSetPartsRepository.findAllByCustomSetCustomSetId(customSetId);
        PartDetailsDTO[] parts = new PartDetailsDTO[partsSets.size()];
        for (int i = 0; i < partsSets.size(); i++) {
            parts[i] = new PartDetailsDTO(partsSets.get(i).getPart(), partsSets.get(i).getQuantity());

        }
        CustomSetDetailsDTO customSetDetailsDTO = new CustomSetDetailsDTO(customSet);
        customSetDetailsDTO.setParts(parts);

        return customSetDetailsDTO;
    }

    public void addCustomSet(CustomSetRequest request) {
        User user = authenticationService.getLoggedInUser();
        if (user == null) {
            return;
        }

        ObjectMapper mapper = new ObjectMapper();
        PartRequest[] parts;
        try {
            parts = mapper.readValue(request.getParts(), PartRequest[].class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        CustomSet savedCustomSet;
        try {
            savedCustomSet = customSetRepository.save(new CustomSet(request.getTitle(), request.getDescription(),
                    request.getPhoto().getBytes(), request.getInstruction().getBytes(), user));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        for (PartRequest partRequest : parts) {
            Part part = partRepository.findByElementId(partRequest.getElementId());
            CustomSetParts customSetParts = new CustomSetParts(part, savedCustomSet, partRequest.getQuantity());
            customSetPartsRepository.save(customSetParts);
        }
    }

    @Transactional
    public void deleteCustomSet(UUID customSetID) {
        customSetPartsRepository.deleteByCustomSetCustomSetId(customSetID);
        customSetRepository.deleteById(customSetID);
    }
}
