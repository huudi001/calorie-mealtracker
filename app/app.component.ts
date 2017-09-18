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
      (clickSender)="showDetails($event)"
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
      new Meal("hamburger", 500, "served with fries"),
      new Meal("fish.",300,"served with ugali"),
      new Meal("biriani.", 200,"served with chicken"),
      new Meal("beans.", 200,"mixed with maize")
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
