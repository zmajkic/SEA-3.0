
package de.telekom.sea3.webserver.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import de.telekom.sea3.webserver.model.Person;



/** die implementation der Klasse des CRUD Repo stellt Spring zur verfügung  */

@Repository 
public interface PersonRepository extends CrudRepository<Person,Long>{

}
