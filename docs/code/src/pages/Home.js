import React from 'react';
import { getDaysInMonth } from 'date-fns';
import CalendarHeatmap from '@bloveless/react-calendar-heatmap/CalendarHeatmap';

import '@bloveless/react-calendar-heatmap/css/CalendarHeatmap.css';
import '../styles/Home.css';

const Home = () => {
  const startDate = '2018-08-31';
  const getData = (newDate) => {
    const newData = [];

    // Get the data for the newDate.
    const newMonth = newDate.getMonth() + 1;
    const newYear = newDate.getFullYear();
    const dateBase = `${newYear}-${String(newMonth).padStart(2, '0')}`;

    // For each day in the month generate a random number between 0 - 250.
    for (let i = 1; i <= getDaysInMonth(newDate); i += 1) {
      const currentDate = `${dateBase}-${String(i).padStart(2, '0')}`;
      newData.push({
        date: currentDate,
        value: Math.floor(Math.random() * Math.floor(250)),
      });
    }

    return newData;
  };

  return (
    <CalendarHeatmap
      startDate={startDate}
      getData={getData}
      height={500}
      width={500}
    />
  );
}

export default Home;
