import React, { Component } from 'react';

class CalendarHeader extends Component {
  render() {
    return (
      <div className="calendarHeader">
        <span className="previousMonth">
          <button onClick={this.props.onClickPreviousMonth}>&lt;</button>
        </span>
        <span className="currentMonth">{this.props.currentDate.format('MMMM YYYY')}</span>
        <span className="nextMonth">
          <button onClick={this.props.onClickNextMonth}>&gt;</button>
        </span>
      </div>
    );
  }
}

export default CalendarHeader;
