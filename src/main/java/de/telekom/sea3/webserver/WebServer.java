package de.telekom.sea3.webserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebServer /* implements SpringBootApplication */ {
	public static void main(String[] args) {
		SpringApplication.run(WebServer.class, args);
	}
}