import './DayHour.less';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteToDo, doneToDo } from '../../../../store/actions/actions';
import HourModal from '../../../common/hour-modal/HourModal.jsx';

@connect()
class DayHour extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      openModal: false
    }
  }

  _onClick () {
    this.setState({
      openModal: !this.state.openModal
    })
  }

  _onDelete () {
    this.props.dispatch(deleteToDo({
      hour: this.props.hour,
      dayId: this.props.dayId
    }));
  }

  _onDone () {
    this.props.dispatch(doneToDo({
      hour: this.props.hour,
      dayId: this.props.dayId
    }));
  }

  _onOK () {
    this.setState({openModal: false});
  }

  render () {
    const disabled = !this.props.task;

    return <div className="day-hour">
      <div className="hour">
        {this.props.hour}
      </div>
      <button disabled={this.props.isPast} className={`todo ${this.props.isDone ? 'done' : ''}`} onClick={this._onClick.bind(this)}>
        {this.props.task}
      </button>
      <button disabled={disabled} onClick={this._onDelete.bind(this)}>delete</button>
      <button disabled={disabled} onClick={this._onDone.bind(this)}>done</button>
      {this.state.openModal && <HourModal 
        hour={this.props.hour} 
        task={this.props.task}
        dayId={this.props.dayId}
        onClick={this._onOK.bind(this)}/>}
    </div>
  }
}

export default DayHour;

DayHour.PropTypes = {
  hour: PropTypes.string.isRequired,
  dayId: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  task: PropTypes.string,
  isPast: PropTypes.bool
};
