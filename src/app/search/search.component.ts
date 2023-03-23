import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms' //three characters or more is validator
import {debounceTime} from 'rxjs/operators' 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{    //need to read user input form (aria-label) from search form
  
  @Output() searchEvent = new EventEmitter<string>();//connects one component to the other
  search = new FormControl('', [Validators.minLength(3)])//when form first opens, will be empty, add validator
  constructor() { }

  ngOnInit(): void { //void means does not return anything
    this.search.valueChanges //when the value of the input changes write what you want it to do
      .pipe(debounceTime(1000))
      .subscribe(searchValue  => { //what user types binds to searchValue variable
        if (!this.search.invalid (parameter)) {
          this.searchEvent.emit(searchValue)//will return what user types

        }
      })
  }
}


