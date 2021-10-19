package com.ecomm.ctl;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ecomm.bean.ProductBean;
import com.ecomm.bean.ProductListBean;
import com.ecomm.entity.Product;
import com.ecomm.service.ProductService;

@Controller
@RequestMapping("item")
public class ProductController {

	@Autowired
	private ProductService service;

	@PostMapping(value = "save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public String home(@RequestBody ProductBean product) {
		this.service.saveProduct(product);
		return "home";
	}
	
	@GetMapping(value = "getAll", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Map<String, Object> getAll() {
		return this.service.getAll();
		
	}
	
	@PostMapping(value = "search", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Map<String, Object> search(@Valid @RequestBody ProductListBean bean) {
		return this.service.search(bean);
		
	}

}
