import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: true
})
export class CompletenesPipe implements PipeTransform {
  transform(input: Meal[], Calories) {
    var low: Meal[] = [];
    var high: Meal [] = [];
    if(Calories === "lowCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          low.push(input[i]);
        }
      }
      return low;
    } else if (Calories === "highCalorie" ) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          high.push(input[i]);
        }
      }
      return high;
    } else {
      return input;
    }
  }
}
