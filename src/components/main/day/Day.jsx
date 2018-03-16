import './Day.less';
import React from 'react';
import PropTypes from 'prop-types';
import DayHour from './day-hour/DayHour.jsx';
import CollapseBlock from '../../common/collapse-block/CollapseBlock.jsx';
import { connect } from 'react-redux';
import { DAY_HOURS, dateWork } from '../../../common';

const mapStateToProps = (state) => ({
  allTodo: state.todos.allTodo
});

@connect(mapStateToProps)
class Day extends React.Component {
  constructor (props) {
    super(props);
  }

  _isPast () {
    return this.props.className === 'past';
  }

  renderDay () {
    return DAY_HOURS.map((dayHour, i) => {
      const task = this.props.allTodo[this.props.dayId] && this.props.allTodo[this.props.dayId][dayHour] ? this.props.allTodo[this.props.dayId][dayHour].text : '';
      const isDone = this.props.allTodo[this.props.dayId] && this.props.allTodo[this.props.dayId][dayHour] ? this.props.allTodo[this.props.dayId][dayHour].done : false;

      return <DayHour
        key={i}
        task={task}
        hour={`${dayHour}`}
        isDone={isDone}
        dayId={this.props.dayId}
        isPast={this._isPast()}/>
    });
  }

  renderHead (month) {
    return <div>
      <div>{this.props.dayName}</div>
      <div>
        {this.props.date} {month}
      </div>
    </div>
  }

  render () {
    const {month} = dateWork();

    return <div className={`day ${this.props.className}`}>
      <CollapseBlock collapseHead={this.renderHead(month)} collapseBody={this.renderDay()}/>
    </div>
  }
}

export default Day;

Day.PropTypes = {
  dayId: PropTypes.string.isRequired,
  dayName: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  className: PropTypes.oneOf(['today', 'future', 'past']).isRequired
};
