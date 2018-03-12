import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  text: state.todos.text
});

@connect(mapStateToProps)
export default class List extends React.Component {
  render () {
    return  <div>
      {typeof this.props.text === 'string' ? this.props.text : 'ne stroka'}
    </div>
  }
};
