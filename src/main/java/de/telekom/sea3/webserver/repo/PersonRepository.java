
package de.telekom.sea3.webserver.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import de.telekom.sea3.webserver.model.Person;



/** die implementation der Klasse des CRUD Repo stellt Spring zur verfügung  */

@Repository 
public interface PersonRepository extends CrudRepository<Person,Long>{

	
	
	@Query(value="SELECT * from persons where ort=:ort",nativeQuery=true )
	Iterable<Person> selectPersonen(@Param("ort") String ort);
	
	
	
}
