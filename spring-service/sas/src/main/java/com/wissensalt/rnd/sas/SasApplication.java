package com.wissensalt.rnd.sas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@SpringBootApplication
public class SasApplication {

	public static void main(String[] args) {
		SpringApplication.run(SasApplication.class, args);
	}

	private List<Business> businessList = new ArrayList<>();

	@Bean
	CorsConfigurationSource corsConfigurationSource()
	{
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
		configuration.setAllowedMethods(Arrays.asList("GET", "POST"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@GetMapping("/")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Business> findAll() {
		return businessList;
	}

	@PostMapping("/insert")
	@CrossOrigin(origins = "http://localhost:4200")
	public Business insert(@RequestBody Business business) {
		businessList.add(business);
		return business;
	}

	@PostMapping("/update")
	@CrossOrigin(origins = "http://localhost:4200")
	public Business update(@RequestBody Business business) {
		for (Business item : businessList) {
			if (item.getPersonalName().equals(business.getPersonalName())) {
				item.setBusinessName(business.getBusinessName());
				item.setBusinessNumber(business.getBusinessNumber());
				break;
			}
		}
		return business;
	}

	@ResponseBody
	@DeleteMapping("/delete")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseData delete(@RequestParam("personalName") String p_PersonalName) {
		for (Business item : businessList) {
			if (item.getPersonalName().equals(p_PersonalName)) {
				businessList.remove(item);
				return new ResponseData("200", "OKE");
			}
		}
		return new ResponseData("500", "FAILED");
	}

	@GetMapping("/findByPersonalName")
	@CrossOrigin(origins = "http://localhost:4200")
	public Business findByPersonalName(@RequestParam("personalName") String p_PersonalName) {
		for (Business item : businessList) {
			if (item.getPersonalName().equals(p_PersonalName)) {
				return item;
			}
		}
		return null;
	}
}
