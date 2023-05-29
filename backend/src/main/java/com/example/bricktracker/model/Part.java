package com.example.bricktracker.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Map;
import java.util.UUID;

@Data
@Entity
public class Part {
    @Id
    @GeneratedValue
    private UUID partId;
    @JsonProperty("element_id")
    private int elementId;
    private String partNumber;
    private String name;
    @JsonProperty("element_img_url")
    private String imgUrl;
    private String color;
    private int colorId;

    @JsonProperty("part")
    @JsonIgnoreProperties({"prints", "molds", "alternates", "external_ids"})
    public void setPart(Map<String, String> part) {
        this.partNumber = part.get("part_num");
        this.name = part.get("name");
    }

    @JsonProperty("color")
    @JsonIgnoreProperties("external_ids")
    public void setColor(Map<String, String> color) {
        this.color = color.get("name");
        this.colorId = Integer.parseInt(color.get("id"));
    }
}
