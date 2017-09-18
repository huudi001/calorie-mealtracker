import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <input *ngIf="meal.calories < 500" type="checkbox" checked (click)="toggle()"/>
    <input *ngIf="meal.calories > 500" type="checkbox" (click)="toggle()"/>
    <label>{{ meal.foodname }}</label>
  </div>
  `
})
export class ShowMealComponent {
  @Input() meal: Meal;
  toggle(selectedCalories: number) {
    this.meal.calories = selectedCalories;
  }
}
