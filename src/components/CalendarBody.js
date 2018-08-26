import React from 'react';
import range from 'lodash.range';
import {
  addDays,
  getDate,
  getDay,
  getMonth,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import PropTypes from 'prop-types';

const CalendarBody = (props) => {
  const {
    height,
    width,
    currentDate,
    data,
  } = props;

  // Get the first Sunday before the beginning of the month. This is the day that the calendar starts.
  let firstDayOfCalendar = startOfWeek(startOfMonth(currentDate));
  const activeMonth = getMonth(currentDate);
  // 42 days = 6 weeks * 7 days

  const table = range(42).map(() => {
    let backgroundColor = null;
    const day = getDay(firstDayOfCalendar);
    const date = getDate(firstDayOfCalendar);
    const month = getMonth(firstDayOfCalendar);

    const dateDatum = data.find(datum => isSameDay(datum.date, firstDayOfCalendar));

    if (dateDatum) {
      const percentage = dateDatum ? (dateDatum.percentage * 100) : 0;
      const red = 255 * (percentage / 100);
      const blue = 255 * ((100 - percentage) / 100);
      backgroundColor = `rgb(${red}, 0, ${blue})`;
    }

    firstDayOfCalendar = addDays(firstDayOfCalendar, 1);

    return (
      <div
        className={`day ${(day === 0 || day === 6) ? 'weekend' : ''} ${(month === activeMonth) ? 'active' : 'inactive'}`}
        style={{ backgroundColor }}
        key={`date-${month}-${date}`}
      >
        {date}
      </div>
    );
  });

  return <div className="calendarBody" style={{ height, width }}>{table}</div>;
};

CalendarBody.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    value: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};

CalendarBody.defaultProps = {
  data: [],
};

export default CalendarBody;
