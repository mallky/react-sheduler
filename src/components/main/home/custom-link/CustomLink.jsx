import './CustomTask.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CustomLink extends React.Component {
  render () {
    return <div className="custom-link">
      <Link to={`/${this.props.linkName.replace(/\s/g,'-')}`}>{this.props.linkName}</Link>
      <div className="description">
        {this.props.children}
      </div>
    </div>;
  }
}

export default CustomLink;

CustomLink.propTypes = {
  linkName: PropTypes.string.isRequired
};
