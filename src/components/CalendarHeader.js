import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const CalendarHeader = (props) => {
  const { onClickPreviousMonth, onClickNextMonth, currentDate } = props;

  return (
    <div className="calendarHeader">
      <span className="previousMonth">
        <button type="button" onClick={onClickPreviousMonth}>&lt;</button>
      </span>
      <span className="currentMonth">{format(currentDate, 'MMMM YYYY')}</span>
      <span className="nextMonth">
        <button type="button" onClick={onClickNextMonth}>&gt;</button>
      </span>
    </div>
  );
};

CalendarHeader.propTypes = {
  onClickPreviousMonth: PropTypes.func.isRequired,
  onClickNextMonth: PropTypes.func.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarHeader;
