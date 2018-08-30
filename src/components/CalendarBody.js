import React, { Component } from 'react';
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
import CalendarCell from './CalendarCell';

class CalendarBody extends Component {
  static getHexString(value) {
    const hexString = value.toString(16);
    return (hexString.length === 1) ? `0${hexString}` : hexString;
  }

  // https://stackoverflow.com/questions/16360533/calculate-color-hex-having-2-colors-and-percent-position
  static getColorPercentage(minimumColor, maximumColor, percentage) {
    const r = Math.ceil(parseInt(maximumColor.substring(0, 2), 16) * percentage + parseInt(minimumColor.substring(0, 2), 16) * (1 - percentage));
    const g = Math.ceil(parseInt(maximumColor.substring(2, 4), 16) * percentage + parseInt(minimumColor.substring(2, 4), 16) * (1 - percentage));
    const b = Math.ceil(parseInt(maximumColor.substring(4, 6), 16) * percentage + parseInt(minimumColor.substring(4, 6), 16) * (1 - percentage));

    return `#${CalendarBody.getHexString(r)}${CalendarBody.getHexString(g)}${CalendarBody.getHexString(b)}`;
  }

  render() {
    const {
      currentDate,
      data,
      textColor,
      minimumColor,
      maximumColor,
    } = this.props;

    // Get the first Sunday before the beginning of the month. This is the day that the calendar starts.
    let firstDayOfCalendar = startOfWeek(startOfMonth(currentDate));
    const activeMonth = getMonth(currentDate);

    // 42 days = 6 weeks * 7 days
    const table = range(42).map(() => {
      let backgroundColor = null;
      const day = getDay(firstDayOfCalendar);
      const date = getDate(firstDayOfCalendar);
      const month = getMonth(firstDayOfCalendar);

      const dateData = data.find(datum => isSameDay(datum.date, firstDayOfCalendar));

      if (dateData) {
        const percentage = dateData ? (dateData.percentage) : 0;
        backgroundColor = CalendarBody.getColorPercentage(minimumColor, maximumColor, percentage);
      }

      firstDayOfCalendar = addDays(firstDayOfCalendar, 1);

      return (
        <CalendarCell
          key={`date-${month}-${date}`}
          day={day}
          month={month}
          activeMonth={activeMonth}
          textColor={textColor}
          backgroundColor={backgroundColor}
          date={date}
          value={dateData ? dateData.value : null}
        />
      );
    });

    return (
      <div className="calendarBody">
        <div className="calendarBodyContent">
          {table}
        </div>
      </div>
    );
  }
}

CalendarBody.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    value: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
  textColor: PropTypes.string.isRequired,
  minimumColor: PropTypes.string.isRequired,
  maximumColor: PropTypes.string.isRequired,
};

CalendarBody.defaultProps = {
  data: [],
};

export default CalendarBody;
