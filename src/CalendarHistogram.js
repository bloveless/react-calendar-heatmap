import React, { Component } from 'react';
import moment from 'moment';
import CalendarHeader from './components/CalendarHeader';
import CalendarBody from './components/CalendarBody';
import CalendarFooter from './components/CalendarFooter';

import './styles/CalendarHistogram.scss';

class CalendarHistogram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: moment('2018-08-18 12:00:00', "YYYY-MM-DD HH:mm:ss"),
      histogramData: {
        '2018-08-17': 10,
        '2018-08-18': 100,
        '2018-08-19': 200,
        '2018-08-20': 250,
      }
    }

    this.handleClickNextMonth = this.handleClickNextMonth.bind(this);
    this.handleClickPreviousMonth = this.handleClickPreviousMonth.bind(this);
  }

  componentDidMount() {
    // Make the request to get the histogram data here.
  }

  handleClickNextMonth() {
    this.setState({
      currentDate: this.state.currentDate.add(1, 'month'),
    });
  }

  handleClickPreviousMonth() {
    this.setState({
      currentDate: this.state.currentDate.subtract(1, 'month'),
    });
  }

  render() {
    return <div className="calendarContainer" style={{width: this.props.width, margin: 'auto'}}>
      <CalendarHeader
        currentDate={this.state.currentDate}
        onClickPreviousMonth={this.handleClickPreviousMonth}
        onClickNextMonth={this.handleClickNextMonth}
      />
      <CalendarBody height={this.props.height} width={this.props.width} currentDate={this.state.currentDate} />
      <CalendarFooter />
    </div>;
  }
}

export default CalendarHistogram;
