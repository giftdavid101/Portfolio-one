import React,{useState} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./components/homepage";
import About from "./pages/about";
import NavBar from "./components/navbar";
import Works from "./pages/works";
import {PortfolioData} from "./pages/works/portfoliodata";
import Contact from "./pages/contact";

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

                {/*<Route exact path={"/works"} slides={PortfolioData} component={Works}/>*/}
                <Route
                    path='/works'
                    render={(props) => (
                        <Works {...props} slides={PortfolioData} />
                    )}
                />
                <Route exact path={"/contact"} component={Contact}/>
            </div>




        </Switch>

    </div>
  );
}

export default App;
