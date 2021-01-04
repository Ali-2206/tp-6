import { Component, OnInit } from '@angular/core';
import {CATS} from "../mock-cats";
import {Cat} from '../cat';
import * as _ from 'lodash';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats = CATS;
  
  selectedCat: Cat;

  
  constructor() { }

  ngOnInit(): void {
  }
  
  getCatById(id: number) {
    let index = _.findIndex(this.cats, (c: Cat) => {
    return c.id === id
    });

    }
    
}
