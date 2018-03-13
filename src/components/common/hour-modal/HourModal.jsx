import './HourModal.less';
import React from 'react';
import { connect } from 'react-redux';
import { toggleHourModal, addToDo } from '../../../store/actions/actions';

const mapStateToProps = (state) => ({
  openHourModal: state.application.openHourModal
});

@connect(mapStateToProps)
class HourModal extends React.Component {
  constructor (props) {
    super(props);

  }

  _onClick () {
    const task = this.textarea.value;

    this.props.dispatch(addToDo({task}));
    this.props.dispatch(toggleHourModal());
  }

  render () {
    return this.props.openHourModal ? <div className="hour-modal modal">
      <div className="overlay">
        <div className="modal-body">
          <div className="time">
            <div>Time</div>
            <div>
              <div>
                <span>from</span>
                <input type="text"/>
              </div>
              <div>
                <span>to</span>
                <input type="text"/>
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