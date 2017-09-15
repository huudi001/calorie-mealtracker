"use strict";
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
//# sourceMappingURL=model.js.map