import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  title!:string
  expenseEntry!: ExpenseEntry;
  constructor() { }
  
  ngOnInit(): void {
    this.title='Expense Entry';

    this.expenseEntry={
      id: 1,
      item: "pizza",
      amount:21,
      category:"food",
      location: "zomato",
      spendOn: new Date(2020, 6,1,10,10,10),
      createdOn: new Date(2020, 6, 1, 10, 10, 10),

    }
  }
}
