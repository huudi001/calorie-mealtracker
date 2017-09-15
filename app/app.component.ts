import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My MEAL TRACKER</h1>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meal-list>
    <edit-meal  [childSelectedMeal]="selectedMeal">

     </edit-meal>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
      new Meal("hamburger.", 500,"comes with cheese"),
      new Meal("chicken.", 400,"comes with fries"),
      new Meal("biriani.", 300,"comes with chicken" ),
      new Meal("fish.", 200,"comes with ugali")
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal= clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
