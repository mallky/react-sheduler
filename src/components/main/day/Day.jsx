import './Day.less';
import React from 'react';
import DayHour from './day-hour/DayHour.jsx';
import { connect } from 'react-redux';
import { DAY_HOURS } from '../../../common';

const mapStateToProps = (state) => ({
  allTodo: state.todos.allTodo
});

@connect(mapStateToProps)
class Day extends React.Component {
  constructor (props) {
    super(props);
  }

  renderDay () {
    return DAY_HOURS.map((dayHour, i) => {
      const task = this.props.allTodo[dayHour] ? this.props.allTodo[dayHour].text : '';
      const isDone = this.props.allTodo[dayHour] ? this.props.allTodo[dayHour].done : false;

      return <DayHour key={i} task={task} hour={`${dayHour}`} isDone={isDone}/>
    });
  }

  render () {
    let date = new Date();

    return <div className="day">
      <div>Today</div>
      <div>
        {date.getDate()} March
      </div>
      {this.renderDay()}
    </div>
  }
}

export default Day;