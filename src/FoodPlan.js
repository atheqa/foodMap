import React, { useState } from 'react';
import Weekday from './WeekDays';

const weekdays = [
  { day: 'Monday', lunch: '', dinner: '' },
  { day: 'Tuesday', lunch: '', dinner: '' },
  { day: 'Wednesday', lunch: '', dinner: '' },
  { day: 'Thursday', lunch: '', dinner: '' },
  { day: 'Friday', lunch: '', dinner: '' },
  { day: 'Saturday', lunch: '', dinner: '' },
  { day: 'Sunday', lunch: '', dinner: '' },
];

const Foodplan = () => {
  const [data, setData] = useState(weekdays);

  function setLunch(day, ev) {
    console.log(day, ev.target.value);

    const list = data.map((item) => {
      if (day === item.day) {
        item.lunch = ev.target.value;
        return item;
      }

      return item;
    });

    console.log(list);

    setData(list);
  }

  function setDinner(day, ev) {
    console.log(day, ev.target.value);

    const list = data.map((item) => {
      if (day === item.day) {
        item.dinner = ev.target.value;
        return item;
      }

      return item;
    });

    console.log(list);
    setData(list);
  }

  return data.map((item) => {
    return (
      <Weekday
        day={item.day}
        lunch={item.lunch}
        dinner={item.dinner}
        key={item.day}
        setLunch={setLunch}
        setDinner={setDinner}
      />
    );
  });
};

export default Foodplan;
