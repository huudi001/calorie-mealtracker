import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New MEAL</h1>
    <div>
      <label>Enter Meal Description:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Meal ID:</label>
      <input #newId>
      <button (click)="
        addClicked(newFoodName.value, newCalorie.value,newDetails.value);
        newDescription.value='';
        newId.value='';
        newCalorie='';
        newDetails='';
        newId='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(foodname: string, calories: number,details : string) {
    var newMealToAdd: Meal = new Meal(foodname,calories,details);
    this.newMealSender.emit(newMealToAdd);
  }
}
