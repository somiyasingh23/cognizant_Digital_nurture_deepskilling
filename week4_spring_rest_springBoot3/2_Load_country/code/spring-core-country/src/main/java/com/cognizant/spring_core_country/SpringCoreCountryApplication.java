package com.cognizant.spring_core_country;

import java.util.List; 

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringCoreCountryApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringCoreCountryApplication.class);

    public static void main(String[] args) {
        System.out.println("=== MAIN STARTED ===");
        displayCountryList();
    }

    public static void displayCountryList() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        @SuppressWarnings("unchecked")
        List<Country> countries = (List<Country>) context.getBean("countryList");

        System.out.println("=== List of Countries ===");
        for (Country country : countries) {
            System.out.println(country);
        }
    }
}
