import React, { useState } from 'react';


const [weekdays, setWeekdays] = useState('');
const [food, setFood] = useState('');

const weekdays = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);


return weekday.map(day => {
    return <Weekday day={day} food={foodnames} />
});
