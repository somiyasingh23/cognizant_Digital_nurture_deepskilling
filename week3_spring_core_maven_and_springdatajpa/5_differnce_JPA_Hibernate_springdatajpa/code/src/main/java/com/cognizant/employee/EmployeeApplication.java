package com.cognizant.employee;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.employee.model.Employee;
import com.cognizant.employee.service.EmployeeService;

@SpringBootApplication
public class EmployeeApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeApplication.class);
    private static EmployeeService employeeService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(EmployeeApplication.class, args);
        employeeService = context.getBean(EmployeeService.class);

        testAddEmployee();
        testGetAllEmployees();
    }

    private static void testAddEmployee() {
        LOGGER.info("Start testAddEmployee");
        Employee emp = new Employee("John Doe", 50000);
        employeeService.addEmployee(emp);
        LOGGER.info("End testAddEmployee");
    }

    private static void testGetAllEmployees() {
        LOGGER.info("Start testGetAllEmployees");
        List<Employee> employees = employeeService.getAllEmployees();
        LOGGER.debug("Employees = {}", employees);
        LOGGER.info("End testGetAllEmployees");
    }
}
