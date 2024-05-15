package com.example.demo.jwt;

import com.example.demo.jwt.auth.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import org.springframework.boot.test.context.SpringBootTest;



@SpringBootTest
public class AuthControllerTest {

    @Mock
    private AuthService authService;

    @InjectMocks
    private AuthController authController;

    @BeforeEach
    public void setup() {
        // Configurar el comportamiento predeterminado del servicio AuthService
        when(authService.login(new LoginRequest("username", "password")))
                .thenReturn(new AuthResponse("token"));

        when(authService.register(new RegisterRequest("username", "password", "John", "Doe", "USA")))
                .thenReturn(new AuthResponse("token"));
    }

    @Test
    public void testLogin() {
        // Llamar al método login del controlador y verificar el resultado
        ResponseEntity<AuthResponse> responseEntity = authController.login(new LoginRequest("username", "password"));
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("token", responseEntity.getBody().getToken());
    }

    @Test
    public void testRegister() {
        // Llamar al método register del controlador y verificar el resultado
        ResponseEntity<AuthResponse> responseEntity = authController.register(new RegisterRequest("username", "password", "John", "Doe", "USA"));
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("token", responseEntity.getBody().getToken());
    }
}


