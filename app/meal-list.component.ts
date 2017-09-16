import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <h1>Meals</h1>
  <h1 >Edit</h1>
  <div>
  <select (change)="onChange($event.target.value)">
  <option value="lowCalorie">lowCalorie</option>
  <option value="highCalorie">HighCalorie</option>

</select>
</div>
    <div *ngFor="let currentMeal of childMealList | calories:selectedCalories; let i = index">
    <h3>{{ currentMeal.foodname }}</h3>
      <div>
      <p>{{currentMeal.details}}</p>
      <p>{{currentMeal.calories}}</p>
      <p>{{crrentMeal.id}}</p>
      <button class = "btn btn-info" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      </div>
      </div>
  `
