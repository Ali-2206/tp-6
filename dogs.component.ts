import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: string[] = ['dog 1', 'dog 2', 'dog 3', 'dog 4', 'dog 5'];
  constructor() { }

  ngOnInit(): void {
  }

}
