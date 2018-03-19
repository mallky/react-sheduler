import "./CustomTask.less";
import React from "react";
import {KEY_CODES} from "../../../common";

class CustomTask extends React.Component {
  constructor (props) {
    super(props);

    this.tasksArray = [];
    this.lis = [];

    this.state = {
      writeTask: true,
      tasks: []
    };
  }

  _onEnter (e) {
    if (e.keyCode === KEY_CODES.ENTER) {
      this.tasksArray.push(e.target.value);

      this.setState({
        writeTask: true,
        tasks: this.tasksArray
      });
    }

  }
  
  _onClick () {
    this.setState({writeTask: false});
  }

  _taskDone (i) {
    if (!this.lis[i].getAttribute('style')) {
      this.lis[i].style.textDecoration = 'line-through';
    } else {
      this.lis[i].removeAttribute('style');
    }
  }

  renderTasks () {
    return this.state.tasks.map((task, i) => {
      return <li key={`task-${i}`} onClick={this._taskDone.bind(this, i)} ref={(li => this.lis[i] = li)}>{task}</li>;
    });
  }

  render () {
    return <div className="custom-task">
      <div className="head">
        Split Task to SubTasks
      </div>
      <div className="body">
        <ol>
          {this.renderTasks()}
          <li>
            {this.state.writeTask
              ? <button onClick={this._onClick.bind(this)}>Write Task</button>
              : <input type="text" onKeyDown={this._onEnter.bind(this)}/>}
          </li>
        </ol>
      </div>
    </div>
  }
}

export default CustomTask;
