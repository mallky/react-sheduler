import "./App.less";
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/main/navigation/Navigation.jsx";
import CustomTasks from "./components/main/custom-tasks/CustomTasks.jsx";
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
          <Route path="/current-month" component={Month}/>
          <Route path="/custom-task" component={CustomTasks}/>
          <Route path="/year" component={Year}/>
        </Switch>
      </div>
    </HashRouter>;
  }
}

export default App;
