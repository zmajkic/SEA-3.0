package de.telekom.sea3.webserver.repo;

import org.springframework.stereotype.Repository;

@Repository // erzeugt new Repository
public class PersonRepository {

	public PersonRepository() {

		super();
		System.out.println("PersonRepository instanziert: " + this.toString());

	}

}
