import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./components/homepage";
import About from "./pages/about";
import NavBar from "./components/navbar";
import Works from "./pages/works";
function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={HomePage} />

            <div>
                <div  className={'rc container'} >
                    <div className={'logo rcl'}>Gift David</div>
                    <NavBar/>
                </div>

                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/works"} component={Works}/>
            </div>
        </Switch>

    </div>
  );
}

export default App;
