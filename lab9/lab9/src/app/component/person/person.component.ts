import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {Person} from '../../model/person.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
  imie: AbstractControl;
  rokUr: AbstractControl;

  persons: Observable<Person>;



  constructor(fb: FormBuilder, private personService: PersonService) {

  this.myForm = fb.group({
      'imie': ['Podaj imie', Validators.compose([
        Validators.required, Validators.minLength(4), this.myNameValidator
      ])],
      'rokUr': ['Podaj rok urodzenia', Validators.compose([
        Validators.minLength(4),Validators.maxLength(4)
      ])],
      
  });

  this.imie = this.myForm.controls['imie'];
  this.rokUr = this.myForm.controls['rokUr'];

  this.myForm.controls['imie'].valueChanges.subscribe(imie => console.log(imie));
   }

   

  ngOnInit() {
  }

  mySubmit(value: any ){
    console.log(this.personService.getPersons().pop());
    const person = new Person(this.imie.value , this.rokUr.value);
    this.personService.addPerson(person);
    console.log("Total number of people in array: ")
  }

  myNameValidator(control: FormControl){
    if(control.value.match(/^Bol/i)){
      return {
        'bolekValue': true
      };
    }
  }

}
