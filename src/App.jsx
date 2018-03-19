import "./App.less";
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/main/navigation/Navigation.jsx";
import CustomTask from "./components/main/custom-task/CustomTask.jsx";
import Week from "./components/main/week/Week.jsx";
import Month from "./components/main/month/Month.jsx";
import Year from "./components/main/year/Year.jsx";
import Home from "./components/main/home/Home.jsx";

class App extends React.Component {
  render () {
    return <HashRouter>
      <div>
        <div>
          <Navigation />
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/week" component={Week}/>
          <Route path="/month" component={Month}/>
          <Route path="/custom-task" component={CustomTask}/>
          <Route path="/year" component={Year}/>
        </Switch>
      </div>
    </HashRouter>;
  }
}

export default App;
