package com.ecomm.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.ecomm")
@EnableJpaRepositories(basePackages = "com.ecomm.repo")
@EntityScan("com.ecomm.entity")  
public class MyWebConfig implements WebMvcConfigurer{

	private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
            "classpath:/META-INF/resources/", "classpath:/resources/",
            "classpath:/static/", "classpath:/public/" };


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
            .addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);

    }
	
	@Override
	public void configureViewResolvers(final ViewResolverRegistry registry) {
	    registry.jsp("/view/", ".jsp");
	}  
	
	 @Override
	    public void addViewControllers(ViewControllerRegistry registry) {

	        registry.addViewController("/").setViewName("home");
	        registry.addViewController("product").setViewName("product");
	
	 }
	
}
