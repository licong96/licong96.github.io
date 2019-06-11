import * as React from 'react';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './containers/home';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact render={() => ( <Redirect to="/home" /> )} />
      </Router>
    );
  }
}

export default App;
