import React, { Component } from 'react';
import moment from 'moment';
import { range } from 'lodash';

import './styles/CalendarHistogram.css';

class CalendarHistogram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: moment('2018-09-18 12:00:00', "YYYY-MM-DD HH:mm:ss"),
    }
  }

  render() {
    // Get the first Sunday before the beginning of the month. This is the day that the calendar starts.
    const firstDayOfCalendar = moment(this.state.currentDate).startOf('month').day(0);
    const activeMonth = this.state.currentDate.month();
    // 35 days = 5 weeks * 7 days

    const table = range(42).map(() => {
      const day = firstDayOfCalendar.day();
      const date = firstDayOfCalendar.date();
      const month = firstDayOfCalendar.month();
      firstDayOfCalendar.add(1, 'days');
      return <div className={`day ${(day === 0 || day === 6) ? 'weekend' : ''} ${(month === activeMonth) ? 'active' : 'inactive'}`} key={`date-${month}-${date}`}>{date}</div>;
    });

    return <div className="calendar">{table}</div>;
  }
}

export default CalendarHistogram;
