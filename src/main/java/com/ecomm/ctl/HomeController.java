package com.ecomm.ctl;


import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	
	
	@GetMapping("/checkout")
	public String checkout() {
		
		System.out.println("In checkout method");
		
		return "checkout";
	}
	
	
	
	@PostMapping(value = "calculater",  consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public @ResponseBody String name(@RequestBody MultiValueMap<String, String> request ) {
		
		System.out.println(request);
		
		int number1 = Integer.valueOf(request.get("number1").get(0));
		int number2 = Integer.valueOf(request.get("number2").get(0));
		String operation = request.get("operation").get(0);
		int result = 0;
		
		if(operation.equals("sum")) {
			result = number1 + number2;
			
		}else if(operation.equals("multi")) {
			result = number1 * number2;
		}
		
		
		return "Your result is:- "+ result;
	}
}
