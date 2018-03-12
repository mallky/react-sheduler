import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../store/actions/actions';

@connect()
export default class Textarea extends React.Component {
  _onChange () {
    this.props.dispatch(addToDo(this.textarea.value));
  }

  render () {
    return <div>
      <textarea
        name="text"
        id="text1"
        cols="30"
        rows="10"
        onChange={this._onChange.bind(this)}
        ref={(textarea) => this.textarea = textarea}/>
    </div>;
  }
}
