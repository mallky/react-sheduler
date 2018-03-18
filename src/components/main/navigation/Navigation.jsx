import './Navigation.less';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render () {
    return <div className='navigation'>
      <NavLink to='/' activeClassName='selected'>Home</NavLink>
      <NavLink to='/year' activeClassName='selected'>Year</NavLink>
      <NavLink to='/month' activeClassName='selected'>Month</NavLink>
      <NavLink to='/week' activeClassName='selected'>Week</NavLink>
      <NavLink to='/day' activeClassName='selected'>Day</NavLink>
    </div>
  }
}

export default Navigation;
