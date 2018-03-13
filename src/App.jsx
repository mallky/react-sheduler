import './App.less';
import React from 'react';
import Day from './components/main/day/Day.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      color: true
    }
  }

  _onClick () {
    this.setState({
      color: !this.state.color
    });
  }

  render () {
    return <div>
      <Day />
    </div>;
  }
}

export default App;