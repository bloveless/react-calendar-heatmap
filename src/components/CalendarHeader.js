import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const CalendarHeader = (props) => {
  const { onClickPreviousMonth, onClickNextMonth, currentDate } = props;

  return (
    <div className="calendarHeader">
      <div className="previousMonth">
        <button type="button" title="Previous Month" onClick={onClickPreviousMonth}>&lt;</button>
      </div>
      <div className="currentMonth">{format(currentDate, 'MMMM YYYY')}</div>
      <div className="nextMonth">
        <button type="button" title="Next Month" onClick={onClickNextMonth}>&gt;</button>
      </div>
    </div>
  );
};

CalendarHeader.propTypes = {
  onClickPreviousMonth: PropTypes.func.isRequired,
  onClickNextMonth: PropTypes.func.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarHeader;
