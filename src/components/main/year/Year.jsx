import "./Year.less";
import React from "react";
import Month from "../month/Month.jsx";
import {MONTH} from "../../../common";

class Year extends React.Component {
  renderMonths () {
    return MONTH.map((item, i) => {
      return <Month name={item} key={i}/>
    });
  }

  render () {
    return <div className="year">
      <div className="header">
        Tasks for every month:
      </div>
      <div className="body">
        {this.renderMonths()}
      </div>
    </div>;
  }
}

export default Year;
