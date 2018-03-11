import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  render () {
    return  <div>
      {typeof this.props.text === 'string' ? this.props.text : 'ne stroka'}
    </div>
  }
};

List.propTypes = {
  text: PropTypes.string.isRequired
};
