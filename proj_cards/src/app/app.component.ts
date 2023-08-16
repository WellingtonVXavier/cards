import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.less'],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
  title = 'proj_cards';

  @Input() public contador: number = 0;

  addValue: number = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

  add() {
    this.addValue += 1;
  }

}
