import './HourModal.less';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToDo, switchToDoHour } from '../../../store/actions/actions';
import { DAY_HOURS } from '../../../common';

@connect()
class HourModal extends React.Component {
  componentDidUpdate () {
    if (this.textarea) {
      this.textarea.focus();
    }
  }

  _onClick () {
    const text = this.textarea.value;

    this.props.dispatch(addToDo({
      text,
      dayId: this.props.dayId,
      hour: this.props.hour
    }));
    this.props.onClick();
  }

  _chooseHour (e) {
    const switchHour = e.target.value;
    const hour = this.props.hour;
    const hours = {hour, switchHour};

    this.props.dispatch(switchToDoHour(hours));
  }

  renderOptions () {
    return DAY_HOURS.map((hour, i) => {
      return <option key={`${hour}-${i}`} disabled={hour === this.props.hour} value={hour}>{hour}</option>;
    });
  }

  render () {
    return this.props.openModal ? <div className="hour-modal modal">
      <div className="overlay">
        <div className="modal-body">
          <div className="time">
            <div>Time</div>
            <div>
              <div>
                <span>from</span>
                {this.props.hour}
              </div>
              <div>
                <span>to</span>
                <select onChange={this._chooseHour.bind(this)}>
                  {this.renderOptions()}
                </select>
              </div>
            </div>
          </div>
          <div className="task">
            <div>Task</div>
            <textarea
              name="task"
              id="task"
              cols="30"
              rows="10"
              defaultValue={this.props.task}
              ref={(textarea) => this.textarea = textarea} />
          </div>
          <div>
            <button onClick={this._onClick.bind(this)}>OK</button>
          </div>
        </div>
      </div>
    </div> : null;
  }
}

export default HourModal;

HourModal.PropTypes = {
  hour: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  dayId: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
