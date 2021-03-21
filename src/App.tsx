import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import News from './Pages/News';

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
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // sticky is 35px;
    if (window.pageYOffset > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="App">
      <Header isSticky={isSticky}/>
      <Switch>
        <Route exact path="/" component={() => <Home isSticky={isSticky} />}></Route>
        <Route path="/News" component={() => <News isSticky={isSticky} />}></Route>
        <Route path="/Stories" component={Stories}></Route>
        <Route path="/Watch" component={Watch}></Route>
        <Route path="/Shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
