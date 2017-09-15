import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="selectedMeal">
      <h1>Edit Task</h1>
      <div>
        <label>Enter MEAL CALORIES:</label>
        <input [(ngModel)]="selectedMeal.calories">
      </div>
      <div>
        <label>Enter MEAL NAME:</label>
        <input [(ngModel)]="selectedMeal.foodname">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
}
