import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parse, addMonths, subMonths } from 'date-fns';
import CalendarHeader from './components/CalendarHeader';
import CalendarBody from './components/CalendarBody';
import CalendarFooter from './components/CalendarFooter';

class CalendarHeatmap extends Component {
  constructor(props) {
    super(props);

    const { startDate } = this.props;
    this.state = {
      currentDate: parse(startDate),
      data: [],
      minimumValue: 0,
      maximumValue: 0,
    };

    this.handleClickNextMonth = this.handleClickNextMonth.bind(this);
    this.handleClickPreviousMonth = this.handleClickPreviousMonth.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    const { getData } = this.props;
    const { currentDate } = this.state;

    if (typeof getData === 'function') {
      const data = getData(currentDate);

      const minimumValue = Math.min(...data.map(datum => datum.value)) || 0;
      const maximumValue = Math.max(...data.map(datum => datum.value)) || 0;

      // Convert values to percentages and the dates to date objects.
      const convertedData = data.map(datum => ({
        ...datum,
        percentage: (datum.value - minimumValue) / (maximumValue - minimumValue),
        date: parse(datum.date),
      }));

      this.setState({
        data: convertedData,
        minimumValue,
        maximumValue,
      });
    }
  }

  handleClickNextMonth() {
    const { currentDate } = this.state;
    const newDate = addMonths(currentDate, 1);

    this.setState({
      currentDate: newDate,
    }, () => {
      this.updateData();
    });
  }

  handleClickPreviousMonth() {
    const { currentDate } = this.state;
    const newDate = subMonths(currentDate, 1);

    this.setState({
      currentDate: newDate,
    }, () => {
      this.updateData();
    });
  }

  render() {
    const {
      height,
      width,
      minimumColor,
      maximumColor,
    } = this.props;
    const {
      currentDate,
      data,
      minimumValue,
      maximumValue,
    } = this.state;

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
          data={data}
          minimumColor={minimumColor}
          maximumColor={maximumColor}
        />
        <CalendarFooter
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          minimumColor={minimumColor}
          maximumColor={maximumColor}
        />
      </div>
    );
  }
}

CalendarHeatmap.propTypes = {
  startDate: PropTypes.string,
  getData: PropTypes.func,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  minimumColor: PropTypes.string,
  maximumColor: PropTypes.string,
};

CalendarHeatmap.defaultProps = {
  startDate: (new Date()).toISOString(),
  getData: null,
  minimumColor: '0000FF',
  maximumColor: 'FF0000',
};

export default CalendarHeatmap;
