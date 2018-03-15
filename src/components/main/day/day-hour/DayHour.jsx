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
    this.props.dispatch(deleteToDo(this.props.hour));
  }

  _onDone () {
    this.props.dispatch(doneToDo(this.props.hour));
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
      <button className={`todo ${this.props.isDone ? 'done' : null}`} onClick={this._onClick.bind(this)}>
        {this.props.task}
      </button>
      <button disabled={disabled} onClick={this._onDelete.bind(this)}>delete</button>
      <button disabled={disabled} onClick={this._onDone.bind(this)}>done</button>
      <HourModal
        hour={this.props.hour}
        task={this.props.task}
        dayId='today'
        openModal={this.state.openModal}
        onClick={this._onOK.bind(this)}/>
    </div>
  }
}

export default DayHour;

DayHour.PropTypes = {
  hour: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  task: PropTypes.string
};
