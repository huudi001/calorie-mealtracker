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
var meal_model_1 = require('./meal.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterMealList = [
            new meal_model_1.Meal("hamburger", "served with fries", 800),
            new meal_model_1.Meal("fish.", "served with ugali", 300),
            new meal_model_1.Meal("biriani.", "served with chicken", 200),
            new meal_model_1.Meal("beans.", "mixed with maize", 200)
        ];
        this.selectedMeal = null;
    }
    AppComponent.prototype.showDetails = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.masterMealList.push(newMealFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>My MEAL TRACKING APP</h1>\n    <new-meal\n    (newMealSender)=\"addMeal($event)\"\n    ></new-meal>\n    <meal-list\n      [childMealList]=\"masterMealList\"\n      (editClickedSender)=\"showDetails($event)\"\n     ></meal-list>\n    <edit-meal\n      [childSelectedMeal]=\"selectedMeal\"\n      (doneClickedSender)=\"finishedEditing()\"\n    ></edit-meal>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map