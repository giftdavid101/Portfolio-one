import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/homepage";
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
                        <div className={'logo rcl'}>&#x3C; Gift David &#47; &#x3E;</div>
                        <NavBar/>
                    </div>
                <div  className={'rc-mobile container'} >
                        <div className={'logo rcl'}> &#x3C; Gift David &#47; &#x3E;</div>
                        {/*<NavBar/>*/}
                </div>

                <Route exact path={"/about"} component={About}/>

                {/*<Route exact path={"/works"} slides={PortfolioData} component={Works}/>*/}
                <Route
                    path='/works'
                    render={(props) => (
                        <Works slides={PortfolioData} />
                    )}
                />
                <Route exact path={"/contact"} component={Contact}/>
            </div>




        </Switch>

    </div>
  );
}

export default App;
