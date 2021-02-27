import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Wrapper from "./Components/Wrapper/Wrapper";
import wrapperStyle from './Components/Wrapper/WrapperStyles'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import appStyles from "./AppStyles.js"

// import './App.css';

function App() {
  return (
    <div className="App" style={appStyles.body}>
      <BrowserRouter>
        <Nav />
        <Wrapper style={wrapperStyle.pads}>
          <Switch>
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
