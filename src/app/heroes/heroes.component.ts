import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { FilterPipe } from '../pipe/filter.pipe';
import { SorterPipe } from '../pipe/sorter.pipe';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  phrase:string=""
  order: any=""
  herolist=this.hs.getAll()
  sortbyID(event:Event){this.order="id"}
  sortbyName(event:Event){this.order="name"}
  sortbySuperPower(event:Event){this.order="superPower"}
  sortbyAddress(event:Event){this.order="address"}

  constructor(private hs:HeroService) { }

  ngOnInit(): void {
    
  }

}
