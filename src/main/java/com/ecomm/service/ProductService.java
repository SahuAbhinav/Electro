package com.ecomm.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecomm.bean.ProductBean;
import com.ecomm.bean.ProductListBean;
import com.ecomm.entity.Images;
import com.ecomm.entity.Product;
import com.ecomm.repo.ImagesRepository;
import com.ecomm.repo.ProductRepository;

@Service
@Transactional
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ImagesRepository imagesRepository;
	
	public ProductBean get(ProductBean bean) {
		
		
		return this.populateProductBean(this.productRepository.getById(bean.getId()));
		
	}

	public void saveProduct(ProductBean productBean) {

		Product product = this.productRepository.save(this.populateProductBean(productBean));

		if (productBean.getImageLocation() != null) {
			int i = 1;
			for (String image : productBean.getImageLocation()) {

				Images images = new Images();
				images.setProductId(product.getId());
				images.setImageLocation(image);
				images.setOrders(i);
				this.imagesRepository.save(images);
				i++;

			}

		}
	}

	public Map<String, Object> getAll() {

		Map<String, Object> response = new HashMap<String, Object>();
		response.put("data", this.populateProductList(this.productRepository.findAll()));

		return response;
	}

	public Map<String, Object> search(ProductListBean bean) {

		Map<String, Object> response = new HashMap<String, Object>();
		List<Product> products = null;
		if(bean.getCategory()!=null && !bean.getCategory().isBlank() && bean.getSearchKeyword()!=null && !bean.getSearchKeyword().isBlank()) {
			products = this.productRepository.searchWithCategory(bean.getSearchKeyword(), bean.getCategory());
			
			
		}else if(bean.getSearchKeyword()!=null && !bean.getSearchKeyword().isBlank()){
			
			products = this.productRepository.search(bean.getSearchKeyword());
		}else {
			
			products = this.productRepository.findByCategory(bean.getCategory());
		}
		
		response.put("data", this.populateProductList(products));

		return response;

	}

	public Map<String, Object> findByCategory(ProductListBean bean) {

		Map<String, Object> response = new HashMap<String, Object>();
		response.put("data", this.populateProductList(this.productRepository.findByCategory(bean.getSearchKeyword())));

		return response;

	}

	private Product populateProductBean(ProductBean bean) {

		Product entity = new Product();
		entity.setCategory(bean.getCategory());
		entity.setDescription(bean.getDescription());
		entity.setDiscountPercent(bean.getDiscountPercent());
		entity.setName(bean.getName());
		entity.setPrice(bean.getPrice());

		return entity;
	}

	private List<ProductBean> populateProductList(List<Product> beans) {

		List<ProductBean> response = new ArrayList<ProductBean>();
		for (Product product : beans) {

			response.add(this.populateProductBean(product));
		}

		return response;
	}
	
	private ProductBean populateProductBean(Product product) {
		

		ProductBean bean = new ProductBean();
		bean.setId(product.getId());
		bean.setCategory(product.getCategory());
		bean.setDescription(product.getDescription());
		bean.setDiscountPercent(product.getDiscountPercent());
		bean.setName(product.getName());
		bean.setPrice(product.getPrice());

		List<Images> images = this.imagesRepository.findByProductIdOrderByOrdersAsc(product.getId());
		List<String> imageNames = new ArrayList<String>();
		for (Images image : images) {
			imageNames.add(image.getImageLocation());
		}
		bean.setImageLocation(imageNames);

		return bean;
		
		
	}
}
