import './Home.less';
import React from 'react';
import CustomLink from './custom-link/CustomLink.jsx';
import { LINKS } from '../../../common';

class Home extends React.Component {
  renderCustomLinks () {
    return LINKS.map((link, i) => {
      return <CustomLink key={`custom-link-${i}`} linkName={link.name}>{link.description}</CustomLink>
    });
  }

  render () {
    return <div className="home">
      <div className="header">
        Choose task type:
      </div>
      <div className="main">
        {this.renderCustomLinks()}
      </div>
    </div>;
  }
}

export default Home;
