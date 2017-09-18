import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <h1 class =jumbotron>Meals</h1>
  <h1 class= "jumbotron" >Edit</h1>
  <div>
  <select (change)="onChange($event.target.value)">
  <option value="lowCalorie">lowCalorie</option>
  <option value="highCalorie">HighCalorie</option>
  <option value="all">show all</option>

</select>
</div>
    <div *ngFor="let currentMeal of childMealList | calories:selectedCalories">

      <div>
      <p>{{currentMeal.foodname}}</p>
      <p>{{currentMeal.details}}</p>
      <p>{{currentMeal.calories}}</p>
      <button class = "btn btn-info" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      </div>
    </div>
  `
})

export class MealListComponent {
  public selectedCalories: string = "all";
  onChange(optionsFromMenu){
    this.selectedCalories = optionsFromMenu;
    console.log(this.selectedCalories);
  }
  @Input() childMealList: Meal[];
  @Output() editClickedSender = new EventEmitter();
 editButtonHasBeenClicked(mealToEdit: Meal) {
    this.editClickedSender.emit(mealToEdit);
  }
}
