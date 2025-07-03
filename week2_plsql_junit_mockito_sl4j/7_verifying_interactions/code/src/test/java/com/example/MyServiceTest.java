package com.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        System.out.println("Step 1: Mock created.");

        // Step 2: Inject into service
        MyService service = new MyService(mockApi);
        System.out.println("Step 2: Service initialized.");

        // Step 3: Call fetchData (which uses mockApi.getData)
        service.fetchData();
        System.out.println("Step 3: fetchData() called.");

        // Step 4: Verify interaction
        verify(mockApi).getData();
        System.out.println("Step 4: Verified that getData() was called.");
    }
}
