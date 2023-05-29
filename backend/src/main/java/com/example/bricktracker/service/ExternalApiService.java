package com.example.bricktracker.service;

import com.example.bricktracker.model.Part;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalApiService {
    @Value("${api.key}")
    private String keyStr;

    public boolean partExists(String partNumber) {
        String url = "https://rebrickable.com/api/v3/lego/parts/";
        url = url + partNumber + "/";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String key = "key " + keyStr;
        headers.set("Authorization", key);
        HttpEntity<String> request = new HttpEntity<>(headers);

        ResponseEntity<String> response;
        try {
            response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
        } catch (Exception e) {
            return false;
        }
        return response.getStatusCode() == HttpStatus.OK;
    }

    public Part findByPartNumberAndColor(String partNumber, String color) {
        String url = "https://rebrickable.com/api/v3/lego/parts/";
        url = url + partNumber + "/" + "colors/" + color + "/";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String key = "key " + keyStr;
        headers.set("Authorization", key);
        HttpEntity<String> request = new HttpEntity<>(headers);

        ResponseEntity<String> response;
        try {
            response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
        } catch (Exception e) {
            return null;
        }
        if (response.getStatusCode() == HttpStatus.OK) {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            objectMapper.configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES, false);
            String[] elements;

            try {
                String elem = String.valueOf(objectMapper.readTree(response.getBody()).path("elements"));
                elements = objectMapper.readValue(elem, String[].class);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }

            int elementId = Integer.parseInt(elements[0]);

            String urlElement = "https://rebrickable.com/api/v3/lego/elements/";
            urlElement = urlElement + elementId + "/";

            ResponseEntity<String> responseElement;
            try {
                responseElement = restTemplate.exchange(urlElement, HttpMethod.GET, request, String.class);
            } catch (Exception e) {
                return null;
            }

            if (responseElement.getStatusCode() == HttpStatus.OK) {
                Part part;
                try {
                    part = objectMapper.readerFor(Part.class).readValue(responseElement.getBody());
                } catch (JsonProcessingException e) {
                    throw new RuntimeException(e);
                }
                return part;
            }
        }
        return null;
    }
}
