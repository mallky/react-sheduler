import './App.less';
import React from 'react';
import DayHour from './components/main/day/DayHour.jsx';

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
      <DayHour hour="8"/>
    </div>;
  }
}

export default App;