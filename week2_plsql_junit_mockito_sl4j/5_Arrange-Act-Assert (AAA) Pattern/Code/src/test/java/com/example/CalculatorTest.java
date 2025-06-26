package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // 🔹 This runs BEFORE each @Test
    @Before
    public void setUp() {
        System.out.println("Setting up...");
        calculator = new Calculator(); // Arrange
    }

    // 🔹 This runs AFTER each @Test
    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }

    @Test
    public void testAddition() {
        // Act
        int result = calculator.add(5, 3);

        // Assert
        assertEquals(8, result);
        System.out.println("Addition test passed");
    }

    @Test
    public void testDivision() {
        // Act
        int result = calculator.divide(10, 2);

        // Assert
        assertEquals(5, result);
        System.out.println("Division test passed");
    }
}
