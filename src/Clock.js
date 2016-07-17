import React from 'react';
import ClockState from 'react-clock-state';

class Clock extends React.Component {
    // use the mixin
    mixins: [ClockState],
    render {
      return (
        <ul>
          <li>Current Hour: {this.getCurrentHour()}</li>
          <li>Current Minute: {this.getCurrentMinute()}</li>
          <li>Current Second: {this.getCurrentSecond()}</li>
          <li>Formatted Time: {this.formattedTime()}
          <li>Raw Current Date and Time: {this.state.currentDate()}
        </ul>
      );
    }
  })

export default Clock;
