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
  sortbyID(){this.order="id"; console.log(this.order)};
  sortbyName(){this.order="name"; console.log(this.order)};
  sortbySuperPower(){this.order="superPower"; console.log(this.order)};
  sortbyAddress(){this.order="address"; console.log(this.order)};

  constructor(private hs:HeroService) { }

  ngOnInit(): void {
    
  }

}
