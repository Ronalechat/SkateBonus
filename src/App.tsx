import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Pages/Home';

const News = () => (
  <div>
    <h2>News</h2>
  </div>
);

const Stories = () => (
  <div>
    <h2>Stories</h2>
  </div>
);

const Watch = () => (
  <div>
    <h2>Watch</h2>
  </div>
);

// Probably won't make one for this prototype
const Shop = () => (
  <div>
    <h2>Shop</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/News" component={News}></Route>
        <Route path="/Stories" component={Stories}></Route>
        <Route path="/Watch" component={Watch}></Route>
        <Route path="/Shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
