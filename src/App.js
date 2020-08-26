import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs"
import About from "./components/pages/About"
import Discover from "./components/pages/Discover"
import Search from "./components/pages/Search"

const App = () => {
  return (
    <Router>
      <div>
        <NavTabs />
      </div>
    </Router>
  );
}

export default App;
