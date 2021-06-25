package de.telekom.sea3.webserver.view;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import de.telekom.sea3.webserver.model.Person;
import de.telekom.sea3.webserver.model.Personen;
import de.telekom.sea3.webserver.model.Size;
import de.telekom.sea3.webserver.service.PersonService;

@RestController
public class PersonRestController {
	
	private PersonService personService;
	
	@Autowired
	public PersonRestController(PersonService personService) {
		super();
		this.personService = personService;
	}

	/** @see URL: <a href="http://localhost:8080/json/persons/all">http://localhost:8080/json/persons/all</a> 
	 * ist nur ein Kommentar  */
	@GetMapping("/json/persons/all")
	public Personen getAllPersons() {
		Personen personen = personService.getAllPersons();
		return personen;
	}
	
	@GetMapping("/json/persons/size")
	public Long getSize() {
		return personService.getSize();
	}
	
	@GetMapping("/json/person/{id}")	// {id} anstelle einer festen ID z.B. 42
	public Person getPerson(@PathVariable("id") Long id) {
		return personService.get(id);
	}
	
	@PostMapping("/json/person")	// Dadurch Eingabe möglich
	public Person addPerson(@RequestBody Person person) {
		return personService.add(person);
	}
	
		
	@DeleteMapping("/json/person/{id}")	// {id} anstelle einer festen ID z.B. 42
	public Person delPerson(@PathVariable("id") Long id) {
		return personService.del(id);
	}
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	
	
	
	
	@GetMapping("/json/select")
	public Personen searchNachOrt(@RequestParam(name="ort", required=false) String ort) {
		Personen personen = personService.selectPersonen(ort);
		logger.info("Ort: " + ort);
		return personen;
	}
	
	
	
	
}