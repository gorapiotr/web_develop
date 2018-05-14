import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[];

  selectedPerson: Person;

  constructor() {

    this.persons = [new Person("Bolek",1999), new Person("Lolek",1990), new Person("Tola",1969)];
    //this.selectedPerson = new Person("anna", 1990);
   }

   selectPerson(person:Person){
      this.selectedPerson = person;
   }

   detalisChanged(person: Person){
     console.log(person);
   }

  ngOnInit() {
  }

  changed(){
    console.log('Childern changed:');
  }

}
