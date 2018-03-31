import "./Navigation.less";
import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render () {
    return <div className='navigation'>
      <NavLink to='/' activeClassName='selected' replace={'/' === '/'}>Home</NavLink>
      <NavLink to='/year' activeClassName='selected' replace={true}>Year</NavLink>
      <NavLink to='/current-month' activeClassName='selected' replace={true}>Current Month</NavLink>
      <NavLink to='/week' activeClassName='selected' replace={true}>Current Week</NavLink>
      <NavLink to='/custom-task' activeClassName='selected' replace={true}>Custom Task</NavLink>
    </div>
  }
}

export default Navigation;
