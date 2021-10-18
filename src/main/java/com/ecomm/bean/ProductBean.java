package com.ecomm.bean;

import java.util.List;

import javax.persistence.Column;

public class ProductBean {

	private Long id;

	private String name;

	private String category;

	private List<String> imageLocation;

	private Double price;

	private Double discountPercent;

	private String description;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public List<String> getImageLocation() {
		return imageLocation;
	}

	public void setImageLocation(List<String> imageLocation) {
		this.imageLocation = imageLocation;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getDiscountPercent() {
		return discountPercent;
	}

	public void setDiscountPercent(Double discountPercent) {
		this.discountPercent = discountPercent;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
