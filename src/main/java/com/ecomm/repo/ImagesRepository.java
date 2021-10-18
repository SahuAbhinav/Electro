package com.ecomm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecomm.entity.Images;
import com.ecomm.entity.Product;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Long> {

	List<Images> findByProductIdOrderByOrdersAsc(Long productId);
}
