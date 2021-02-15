import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { FilterPipe } from '../pipe/filter.pipe';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  phrase:string=""

  herolist=this.hs.getAll()

  constructor(private hs:HeroService) { }

  ngOnInit(): void {
    
  }

}
