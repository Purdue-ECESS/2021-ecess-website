import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Committees from "./components/Committees/Committee";
import Calendar from "./components/Calendar/Calendar";
import Board from "./components/Board/Board";
import Footer from "./components/Footer";
import Apply from "./components/Apply/Apply";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route path="/board" component={Board} />
            <Route path="/apply" component={Apply} />
            <Route path="/committees" component={Committees} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
