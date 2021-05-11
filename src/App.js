import React from "react";
import "./App.css";
import WelcomePage from "./Components/Welcome page/WelcomePage";
import { BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
import SignIn from "./Components/Welcome page/SignIn";
import SignUp from "./Components/Welcome page/SignUp";
import Homepage from "./pages/Homepage.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />

           <Route exact path="/homepage" component={Homepage} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
