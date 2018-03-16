import './App.less';
import React from 'react';
import Week from './components/main/week/Week.jsx';

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
      <Week />
    </div>;
  }
}

export default App;