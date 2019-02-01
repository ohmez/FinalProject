import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homePage from "./pages/homePage";
import NoMatch from "./pages/NoMatch";

function App(){
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={homePage} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
}


export default App;
