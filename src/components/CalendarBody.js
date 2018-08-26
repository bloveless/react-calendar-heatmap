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
    minimumColor,
    maximumColor,
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

    // https://stackoverflow.com/questions/16360533/calculate-color-hex-having-2-colors-and-percent-position
    if (dateDatum) {
      const percentage = dateDatum ? (dateDatum.percentage) : 0;

      const hex = (x) => {
        const hexString = x.toString(16);
        return (hexString.length === 1) ? `0${hexString}` : hexString;
      };

      const r = Math.ceil(parseInt(maximumColor.substring(0, 2), 16) * percentage + parseInt(minimumColor.substring(0, 2), 16) * (1 - percentage));
      const g = Math.ceil(parseInt(maximumColor.substring(2, 4), 16) * percentage + parseInt(minimumColor.substring(2, 4), 16) * (1 - percentage));
      const b = Math.ceil(parseInt(maximumColor.substring(4, 6), 16) * percentage + parseInt(minimumColor.substring(4, 6), 16) * (1 - percentage));

      backgroundColor = `#${hex(r)}${hex(g)}${hex(b)}`;
    }

    firstDayOfCalendar = addDays(firstDayOfCalendar, 1);

    return (
      <div
        className={`day ${(day === 0 || day === 6) ? 'weekend' : ''} ${(month === activeMonth) ? 'active' : 'inactive'}`}
        style={{ backgroundColor }}
        key={`date-${month}-${date}`}
      >
        {date}
        -
        {dateDatum ? dateDatum.value : ''}
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
  minimumColor: PropTypes.string.isRequired,
  maximumColor: PropTypes.string.isRequired,
};

CalendarBody.defaultProps = {
  data: [],
};

export default CalendarBody;
