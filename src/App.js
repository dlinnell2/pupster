import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs"
import About from "./pages/About"
import Discover from "./pages/Discover"
import Search from "./pages/Search"
import Wrapper from "./components/Wrapper"

const App = () => {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
