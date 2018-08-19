import React from 'react';
import range from 'lodash.range';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';

const CalendarBody = (props) => {
  const { height, width, currentDate } = props;

  // Get the first Sunday before the beginning of the month. This is the day that the calendar starts.
  const firstDayOfCalendar = currentDate.clone().startOf('month').day(0);
  const activeMonth = currentDate.month();
  // 35 days = 5 weeks * 7 days

  const table = range(42).map(() => {
    const day = firstDayOfCalendar.day();
    const date = firstDayOfCalendar.date();
    const month = firstDayOfCalendar.month();
    firstDayOfCalendar.add(1, 'days');

    const percentage = 50;
    const red = 255 * (percentage / 100);
    const blue = 255 * ((100 - percentage) / 100);

    return (
      <div
        className={`day ${(day === 0 || day === 6) ? 'weekend' : ''} ${(month === activeMonth) ? 'active' : 'inactive'}`}
        style={{ backgroundColor: `rgb(${red}, 0, ${blue})` }}
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
  currentDate: momentPropTypes.momentObj.isRequired,
};

export default CalendarBody;
