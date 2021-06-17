package de.telekom.sea3.webserver.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import de.telekom.sea3.webserver.service.PersonService;

@Controller
public class PersonHtmlController {

	private static final String HTMLTEMPLATE = "<!DOCTYPE html> <html lang='de'> "
			+ "<head> <meta charset='utf-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Titel</title> </head> "
			+ "<body>size: %d </body> </html>";
	private PersonService personService;

	@Autowired
	public PersonHtmlController(PersonService personService) {
		super();
		System.out.println("PersonHtmlController instanziert: " + this.toString());
		System.out.println("PersonService: " + personService.toString());
		this.personService = personService;
	}

	// URL:"http://localhost:8080/size"
	@GetMapping("/size")
	@ResponseBody // sagt spring Framework dass die Antwort in den Body gepackt werden soll
	public String getSize() {
		String string5 = String.format(HTMLTEMPLATE, personService.getSize());
		return string5;
	}

	
	
	
	
	
	
	
	
	// URL:"http://localhost:8080/count"
	@GetMapping("/count")
	public String getCount(Model model,

			@RequestParam(value = "name", 
					required = false, 
					defaultValue = "World") 
					String name

	) {

		model.addAttribute("cou", name); // cou Platzhalter in der HTML Seite

		return "count";
	}
	
	
	
	
	
	// URL:"http://localhost:8080/count"
	@GetMapping("/size2")  // Kein @ResponseBody, da es ... verhindert
	public String getSize2(Model model) {
		model.addAttribute("size3", personService.getSize());
		return "size";
	}
	
	
	
	
	

}
