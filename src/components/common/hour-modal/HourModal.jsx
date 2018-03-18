import './HourModal.less';
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { addToDo, switchToDoHour } from '../../../store/actions/actions';
import { DAY_HOURS, KEY_CODES } from '../../../common';

@connect()
class HourModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {chosenHour: this.props.hour};
  }
  
  componentWillMount () {
    this.modalRoot = document.createElement('div');
    this.modalRoot.classList.add('modal-root');

    document.body.appendChild(this.modalRoot);
  }
  
  componentWillUnmount () {
    document.body.removeChild(this.modalRoot);
  }

  componentDidMount () {
    if (this.textarea) {
      this.textarea.focus();
    }
  }

  _onClick () {
    const text = this.textarea.value;

    this.props.dispatch(addToDo({
      text,
      dayId: this.props.dayId,
      hour: this.state.chosenHour
    }));
    this.props.onClick();

    if (this.state.chosenHour !== this.props.hour) {
      this.props.dispatch(switchToDoHour({
        hour: this.props.hour,
        dayId: this.props.dayId,
        switchHour: this.state.chosenHour
      }));

      this.setState({
        chosenHour: this.props.hour
      });
    }
  }

  _reset () {
    this.setState({
      chosenHour: this.props.hour
    });
    this.props.onClick();
  };

  _onKeyPress(e) {
    const code = e.keyCode;

    code === KEY_CODES.ENTER ? this._onClick() : code === KEY_CODES.ESC && this._reset();
  }

  _chooseHour (e) {
    const switchHour = e.target.value;
    this.setState({
      chosenHour: switchHour
    });
  }

  renderOptions () {
    const newDayHours = _.uniq(DAY_HOURS);
    newDayHours.unshift('');

    return newDayHours.map((hour, i) => {
      return <option
        key={`${hour}-${i}`}
        disabled={i !== 0 && hour === this.props.hour}
        value={i ? hour : this.props.hour}>{hour}</option>;
    });
  }

  render () {
    return ReactDom.createPortal(<div className="hour-modal modal" onKeyDown={this._onKeyPress.bind(this)}>
      <div className="overlay">
        <div className="modal-body">
          <div className="time">
            <div>Time switch</div>
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
    </div>, this.modalRoot);
  }
}

export default HourModal;

HourModal.PropTypes = {
  hour: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  dayId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
