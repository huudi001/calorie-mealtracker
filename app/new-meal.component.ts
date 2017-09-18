import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New MEAL</h1>
    <div>
      <div>
      <label>Enter Meal Description:</label>
      <input #newDetails>
      </div>
      <div>
      <label>Enter FOOD NAME:</label>
      <input #newFoodName>
      </div>
      <div>
      <label>Enter calorie:</label>
      <input #newCalorie>
      </div>
      <div>
      <label>ENTER FOOD ID</label>
      <input #newID>
      <button (click)="
        addClicked(newDetails.value,newFoodName.value, newCalorie.value,newID.value);
        newDetails.value='';
        newFoodName.value='';
        newCalorie.value='';
            ;
      ">Add</button>
      </div>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(foodname: string, calories: number,details : string, id : number) {
    var newMealToAdd: Meal = new Meal(foodname,calories,details,id);
    this.newMealSender.emit(newMealToAdd);
  }
}
