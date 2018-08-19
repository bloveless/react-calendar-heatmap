import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import CalendarHeader from './components/CalendarHeader';
import CalendarBody from './components/CalendarBody';
import CalendarFooter from './components/CalendarFooter';

import './styles/CalendarHistogram.scss';

class CalendarHistogram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: moment('2018-08-18 12:00:00', 'YYYY-MM-DD HH:mm:ss'),
      histogramData: [
        {
          date: '2018-08-17',
          value: 10,
        },
        {
          date: '2018-08-18',
          value: 100,
        },
        {
          date: '2018-08-19',
          value: 200,
        },
        {
          date: '2018-08-20',
          value: 250,
        },
      ],
    };

    this.handleClickNextMonth = this.handleClickNextMonth.bind(this);
    this.handleClickPreviousMonth = this.handleClickPreviousMonth.bind(this);
  }

  componentDidMount() {
    // Make the request to get the histogram data here.
  }

  handleClickNextMonth() {
    const { currentDate } = this.state;

    this.setState({
      currentDate: currentDate.add(1, 'month'),
    });
  }

  handleClickPreviousMonth() {
    const { currentDate } = this.state;

    this.setState({
      currentDate: currentDate.subtract(1, 'month'),
    });
  }

  render() {
    const { currentDate, histogramData } = this.state;
    const { height, width } = this.props;

    return (
      <div className="calendarContainer" style={{ width, margin: 'auto' }}>
        <CalendarHeader
          currentDate={currentDate}
          onClickPreviousMonth={this.handleClickPreviousMonth}
          onClickNextMonth={this.handleClickNextMonth}
        />
        <CalendarBody
          height={height}
          width={width}
          currentDate={currentDate}
          histogramData={histogramData}
        />
        <CalendarFooter histogramData={histogramData} />
      </div>
    );
  }
}

CalendarHistogram.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default CalendarHistogram;
