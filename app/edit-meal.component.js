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
var EditMealComponent = (function () {
    function EditMealComponent() {
        this.doneClickedSender = new core_1.EventEmitter();
    }
    EditMealComponent.prototype.doneClicked = function () {
        this.doneClickedSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meal_model_1.Meal)
    ], EditMealComponent.prototype, "childSelectedMeal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditMealComponent.prototype, "doneClickedSender", void 0);
    EditMealComponent = __decorate([
        core_1.Component({
            selector: 'edit-meal',
            template: "\n    <div *ngIf=\"childSelectedMeal\">\n      <h1>Edit Meal</h1>\n      <div>\n        <label>Enter Meal Description:</label>\n        <input [(ngModel)]=\"childSelectedMeal.details\">\n      </div>\n      <div>\n        <label>Enter Meal ID:</label>\n        <input [(ngModel)]=\"childSelectedMeal.id\">\n        <button (click)=\"doneClicked()\">Done</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditMealComponent);
    return EditMealComponent;
}());
exports.EditMealComponent = EditMealComponent;
//# sourceMappingURL=edit-meal.component.js.map