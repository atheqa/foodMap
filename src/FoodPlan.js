import React, { useState } from 'react';
import Weekday from "./WeekDays"

const Foodplan = () => {
    const [food, setFood] = useState("");
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    console.log(food)

    return weekdays.map(day => {
        return <Weekday day={day} food={food} key={day} setFood={setFood} />
    });
};



export default Foodplan;
