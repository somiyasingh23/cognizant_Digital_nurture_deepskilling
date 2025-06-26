package com.example;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Create a mock of the external API
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        System.out.println("Mock object created.");

        // Step 2: Stub the getData() method
        when(mockApi.getData()).thenReturn("Mock Data");
        System.out.println("Stubbed getData() to return 'Mock Data'.");

        // Step 3: Inject mock into MyService
        MyService service = new MyService(mockApi);
        System.out.println("Service created with mocked API.");

        // Step 4: Call the method
        String result = service.fetchData();
        System.out.println("Service fetchData() returned: " + result);

        // Step 5: Assert the expected result
        assertEquals("Mock Data", result);
        System.out.println("Assertion passed!");
    }
}
