import { Injectable } from '@angular/core';
import { Person} from './../model/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[];

  constructor() { 
    this.persons = [ new Person("Bolek",1999),  new Person("Tola",1943),  new Person("Adam",2012)];
  }

  getPersons(){
    return this.persons;
  }

  addPerson(person: Person){
    this.persons.push(person);
  }
}
