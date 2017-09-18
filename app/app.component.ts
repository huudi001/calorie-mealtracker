import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My MEAL TRACKING APP</h1>
    <new-meal
    (newMealSender)="addMeal($event)"
    ></new-meal>
    <meal-list
      [childMealList]="masterMealList"
      (editClickedSender)="showDetails($event)"
     ></meal-list>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("hamburger","served with fries", 800),
      new Meal("fish.","served with ugali",300),
      new Meal("biriani.","served with chicken", 200),
      new Meal("beans.","mixed with maize",200)
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;

  }
  addMeal(newMealFromChild: Meal) {

    this.masterMealList.push(newMealFromChild);
}
}
