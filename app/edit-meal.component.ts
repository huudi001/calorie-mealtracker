import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter Meal Name:</label>
        <input [(ngModel)]="childSelectedMeal.foodname">
      </div>
      <div>
        <label>Enter Meal Description:</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <div>
        <label>Enter Meal Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
