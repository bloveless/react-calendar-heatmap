import React, { Component } from 'react';
import { range } from 'lodash';
import moment from 'moment';

class CalendarBody extends Component {
  render() {
    // Get the first Sunday before the beginning of the month. This is the day that the calendar starts.
    const firstDayOfCalendar = moment(this.props.currentDate).startOf('month').day(0);
    const activeMonth = this.props.currentDate.month();
    // 35 days = 5 weeks * 7 days

    const table = range(42).map(() => {
      const day = firstDayOfCalendar.day();
      const date = firstDayOfCalendar.date();
      const month = firstDayOfCalendar.month();
      firstDayOfCalendar.add(1, 'days');
      return <div className={`day ${(day === 0 || day === 6) ? 'weekend' : ''} ${(month === activeMonth) ? 'active' : 'inactive'}`} key={`date-${month}-${date}`}>{date}</div>;
    });

    return <div className="calendarBody" style={{ height: this.props.height, width: this.props.width}}>{table}</div>;
  }
}

export default CalendarBody;
