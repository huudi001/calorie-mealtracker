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
      <input #newFoodName>
      </div>
      <div>
      <label>Enter calorie:</label>
      <input #newCalorie>
      <button (click)="
        addClicked(newDetails.value,newFoodName.value, newCalorie.value);
        newDetails.value='';
        newFoodName.value='';
        newCalorie.value='';
            ;
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
