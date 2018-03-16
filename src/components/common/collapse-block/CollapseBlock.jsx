import './CollapseBlock.less';
import React from 'react';
import PropTypes from 'prop-types';

class CollapseBlock extends React.Component {
  constructor (props) {
    super(props);

    this.state = {extend: false};
  }

  _onClick () {
    this.setState({extend: !this.state.extend});
  }

  render () {
    const visibility = this.state.extend ? 'show' : 'hide';

    return <div className="collapse-block">
      <div className="head">
        <button onClick={this._onClick.bind(this)}>{this.props.collapseHead}</button>
      </div>
      <div className={`body ${visibility}`}>
        {this.props.collapseBody}
      </div>
    </div>
  }
}

export default CollapseBlock;

CollapseBlock.propTypes = {
  collapseHead: PropTypes.object.isRequired,
  collapseBody: PropTypes.array.isRequired
};
