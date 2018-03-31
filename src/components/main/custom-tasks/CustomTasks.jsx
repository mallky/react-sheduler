import "./CustomTasks.less";
import React from "react";
import PropTypes from "prop-types";
import CustomTask from "./custom-task/CustomTask.jsx";
import {connect} from "react-redux";
import {customResetTODO} from "../../../store/actions/actions";

@connect()
class CustomTasks extends React.Component {
  _onClick () {
    this.props.dispatch(customResetTODO());
  }
  
  render () {
    return <div className="custom-tasks">
      <CustomTask head={this.props.head}/>
      <button onClick={this._onClick.bind(this)}>Reset</button>
    </div> 
  }
}

export default CustomTasks;

CustomTasks.propTypes = {
  head: PropTypes.string
}