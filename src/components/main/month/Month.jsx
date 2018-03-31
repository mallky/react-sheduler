import "./Month.less";
import React from "react";
import PropTypes from "prop-types";
import CollapseBlock from "../../common/collapse-block/CollapseBlock.jsx";
import CustomTasks from "../custom-tasks/CustomTasks.jsx";
import { dateWork } from "../../../common";

class Month extends React.Component {
  renderHead (name) {
    return <div className="header">
      {name}
    </div>;
  }

  renderBody (name) {
    return [<div key="boyd-1" className="header">
      <CustomTasks head={name}/>
    </div>];
  }

  render () {
    const name = this.props.name || dateWork().month;

    return <div className="month">
      <CollapseBlock
        collapseHead={this.renderHead(name)}
        collapseBody={this.renderBody(name)}/>
    </div>;
  }
}

export default Month;

Month.propTypes = {
  name: PropTypes.string
};
