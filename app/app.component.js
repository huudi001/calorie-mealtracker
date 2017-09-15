"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.meals = [
            new Meal("hamburger.", 500, "comes with cheese"),
            new Meal("chicken.", 400, "comes with fries"),
            new Meal("biriani.", 300, "comes with chicken"),
            new Meal("fish.", 200, "comes with ugali")
        ];
        this.selectedMeal = null;
    }
    AppComponent.prototype.showDetails = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>My MEAL TRACKER</h1>\n    <div *ngFor=\"let currentMeal of meals\">\n      <h3>{{ currentMeal.foodname }}</h3>\n      <button (click)=\"showDetails(currentMeal)\">Edit</button>\n    </div>\n    <div *ngIf=\"selectedMeal\">\n      <h1>Edit MEAL</h1>\n      <div>\n        <label>EDIT MEAL DESCRIPTION:</label>\n        <input [(ngModel)]=\"selectedMeal.details\">\n      </div>\n      <div>\n        <label>EDIT MEAL CALORIERS:</label>\n        <input [(ngModel)]=\"selectedMeal.calories\">\n        <br/>\n        <label>EDIT MEAL NAME:</label>\n        <input [(ngModel)]=\"selectedMeal.foodname\">\n        \n\n        <button (click)=\"finishedEditing()\">Done</button>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Meal = (function () {
    function Meal(foodname, calories, details) {
        this.foodname = foodname;
        this.calories = calories;
        this.details = details;
        this.done = false;
    }
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=app.component.js.map