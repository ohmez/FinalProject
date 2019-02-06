import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home/";
import NoMatch from "./pages/NoMatch";
import ProfilePage from "./pages/Profile/ProfilePage";

function App(){
    return (
      <Router>
      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile/:name" component={ProfilePage} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      
    </Router>
    );
}


export default App;
