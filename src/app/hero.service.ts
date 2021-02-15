import { Injectable } from '@angular/core';
import { Hero } from "src/app//hero"

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getAll(){return this.heroes}

  heroes:Hero[]=[
  { id:0,
    name:"Cserkó József",
    superPower:"Programming, Teaching",
    address:"Training360 HeadQuarters"},
  { id:1,
    name:"Black Widow",
    superPower:"Supersmart",
    address:"Avengers HeadQuarters"},
  { id:2,
    name:"Batman",
    superPower:"Rich",
    address:"Gotham City"},
  { id:3,
    name:"Steve Rogers",
    superPower:"Loyalty",
    address:"Avengers HeadQuarters"},
  { id:4,
    name:"Spiderman",
    superPower:"Spiderwebs",
    address:"Manhattan"},
  { id:5,
    name:"Superman",
    superPower:"Kryptonite",
    address:"Krypton"},
  ]

  constructor() { }
}
