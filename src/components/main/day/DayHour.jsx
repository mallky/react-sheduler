import './DayHour.less';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleHourModal } from '../../../store/actions/actions';
import HourModal from '../../common/hour-modal/HourModal.jsx';

const mapStateToProps = (state) => ({
  todo: state.todos.todo
});

@connect(mapStateToProps)
class DayHour extends React.Component {
  constructor (props) {
    super(props);
    
  }

  _onClick () {
    this.props.dispatch(toggleHourModal());
  }

  render () {
    return <div className="day-hour">
      <div className="hour">
        {this.props.hour}
      </div>
      <button className="todo" onClick={this._onClick.bind(this)}>
        {this.props.todo.task || ''}
      </button>
      <HourModal />
    </div>
  }
}

export default DayHour;

DayHour.PropTypes = {
  hour: PropTypes.string.isRequired
};
