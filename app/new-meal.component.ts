import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New MEAL</h1>
    <div>
      <div>
        <label>Enter Food Name:</label>
        <input #newFoodName>
      </div>
      <br />
      <div>
        <label>Enter Food Details:</label>
        <input #newFoodDetails>
      </div>
      <br />
      <div>
        <label>Enter calorie:</label>
        <input #newCalorie>
      </div>
      <br />
      <button (click)="
        addClicked(newFoodName.value,newFoodDetails.value,newCalorie.value);
        newFoodDetails.value='';
        newFoodName.value='';
        newCalorie.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(foodname: string,details : string, calories: number) {
    var newMealToAdd: Meal = new Meal(foodname,details,calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
