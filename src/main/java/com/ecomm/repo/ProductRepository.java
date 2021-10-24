package com.ecomm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ecomm.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	@Query("SELECT p FROM Product p WHERE lower(CONCAT(p.name, ' ', p.category)) LIKE lower(concat('%', ?1,'%'))")
	public List<Product> search(String keyword);
	
	@Query("SELECT p FROM Product p WHERE lower(CONCAT(p.name, ' ', p.category)) LIKE lower(concat('%', ?1,'%')) and lower(p.category) LIKE lower(concat('%', ?2,'%'))")
	public List<Product> searchWithCategory(String keyword, String category);
	
	
	public List<Product> findByCategory(String category);
	
	
	
}
