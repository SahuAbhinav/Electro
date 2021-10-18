package com.ecomm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name = "product")
public class Product {

	@Id
	@SequenceGenerator(name = "PRODUCT_ID_GENERATOR", sequenceName = "PRODUCT_ID_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "PRODUCT_ID_GENERATOR")
	private Long id;

	@Column(name = "name", length = 1000, nullable = false)
	private String name;

	@Column(name = "category", length = 100, nullable = false)
	private String category;

	@Column(name = "price", nullable = false)
	private Double price;

	@Column(name = "discountpercent")
	private Double discountPercent;

	@Column(name = "description", length = 5000, nullable = false)
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
