import './App.less';
import React from 'react';
import List from './containers/List.jsx';
import Textarea from './containers/Textarea.jsx';
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
      <em onClick={this._onClick.bind(this)}>
        {
          this.state.color ? 'HELLO REACT!' : '1'
        }
      </em>
      <List />
      <Textarea />
      <DayHour hour="8"/>
    </div>;
  }
}

export default App;