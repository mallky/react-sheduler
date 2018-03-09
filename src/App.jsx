import './App.less';
import React from 'react';

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
    </div>;
  }
}

export default App;