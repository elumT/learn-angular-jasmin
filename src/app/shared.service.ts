import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log("A HTTP call");
  }

  mysharedFunction() {
    console.log("My shared function is called")
  }
}
