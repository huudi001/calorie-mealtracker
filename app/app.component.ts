import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My MEAL TRACKER</h1>
    <div *ngFor="let currentMeal of meals">
      <h3>{{ currentMeal.foodname }}</h3>
      <button (click)="showDetails(currentMeal)">Edit</button>
    </div>
    <div *ngIf="selectedMeal">
      <h1>Edit MEAL</h1>
      <div>
        <label>EDIT MEAL DESCRIPTION:</label>
        <input [(ngModel)]="selectedMeal.details">
      </div>
      <div>
        <label>EDIT MEAL CALORIERS:</label>
        <input [(ngModel)]="selectedMeal.calories">
        <br/>
        <label>EDIT MEAL NAME:</label>
        <input [(ngModel)]="selectedMeal.foodname">
        

        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
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

export class Meal {
  public done: boolean = false;
  constructor(public foodname: string, public calories: number,public details: string) {   }
}
