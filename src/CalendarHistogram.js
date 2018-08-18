import React, { Component } from 'react';
import moment from 'moment';
import CalendarHeader from './components/CalendarHeader';
import CalendarBody from './components/CalendarBody';
import CalendarFooter from './components/CalendarFooter';

import './styles/CalendarHistogram.css';

class CalendarHistogram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: moment('2018-09-18 12:00:00', "YYYY-MM-DD HH:mm:ss"),
    }
  }

  render() {
    return <div className="calendarContainer" style={{width: this.props.width, margin: 'auto'}}>
      <CalendarHeader currentDate={this.state.currentDate} />
      <CalendarBody height={this.props.height} width={this.props.width} currentDate={this.state.currentDate} />
      <CalendarFooter />
    </div>;
  }
}

export default CalendarHistogram;
