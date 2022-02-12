import React from 'react';
import { Select } from './WeekDays.styles';


/* const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];*/
const foods = [{ value: 1, label: "Quick Chicken-Tomato Pasta" }, { value: 2, label: "Fried Rice with Chicken" },
{ value: 3, label: "Tomato-Tuna Soup" }, { value: 4, label: "Lasagne" }, { value: 5, label: "Macaroni and Cheese" }, {value: 6, label:  "Chicken Curry"},
{ value: 7, label: "Tomato-Tuna Pasta" }, { value: 8, label: "Meatballs and Potatoes with Cream Sauce" }];

export const FoodSelect = () => {



    return (
        <div>
            <Select options={foods}>
                {/* <option>
                    Food
                </option>
                <option value="Quick Chicken-Tomato Pasta">Quick Chicken-Tomato Pasta</option>
                <option value="Fried Rice with Chicken">Fried Rice with Chicken</option>
                <option value="Tomato-Tuna Soup">Tomato-Tuna Soup</option>
                <option value="Lasagne">Lasagne</option> */}
            </Select>
        </div>
    )

}