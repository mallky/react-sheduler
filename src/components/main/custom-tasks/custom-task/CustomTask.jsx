import "./CustomTask.less";
import React from "react";
import {KEY_CODES} from "../../../../common";
import {connect} from "react-redux";
import {customAddToDo, customDoneToDo, customDeleteToDo} from "../../../../store/actions/actions";

const mapStateToProps = (state) => ({
  customTODO: state.todos.customTODO
});

@connect(mapStateToProps)
class CustomTask extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      writeTask: true
    };
  }

  _onEnter (e) {
    if (e.keyCode === KEY_CODES.ENTER) {
      this.setState({
        writeTask: true
      });

      this.props.dispatch(customAddToDo({
        task: e.target.value
      }))
    }
  }
  
  _onClick () {
    this.setState({writeTask: false});
  }

  _taskDone (i) {
    this.props.dispatch(customDoneToDo(i))
  }

  _onDelete (i) {
    this.props.dispatch(customDeleteToDo(i))
  }

  renderTasks () {
    return this.props.customTODO.map((task, i) => {
      const isDone = task.done ? 'done' : 'default';
      return <li
        key={`task-${i}`}
        className={isDone}>
        {[
          task.task,
          <button key={`button-del-${i}`} onClick={this._onDelete.bind(this, i)}>delete</button>,
          <button key={`button-done-${i}`} onClick={this._taskDone.bind(this, i)}>done</button>]}
      </li>;
    });
  }

  render () {
    return <div className='custom-task'>
      <div className='head'>
        Split Task to SubTasks
      </div>
      <div className='body'>
        <ol>
          {this.renderTasks()}
          <li>
            {this.state.writeTask
              ? <button onClick={this._onClick.bind(this)}>Write Task</button>
              : <input type='text' onKeyDown={this._onEnter.bind(this)}/>}
          </li>
        </ol>
      </div>
    </div>
  }
}

export default CustomTask;
