import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Reviews from './Reviews';
import AboutMe from './about-me/AboutMe';
import AboutUs from "./about-us/AboutUs";


import {Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>

            {/*<Route exact path="/"> -  добавил exact перед path="/"  */}
            <Switch>   {/*Компонент Switch не решает нашу проблему, но решает свою задачу — за раз отображает один компонент
                          Компонент Switch применяют в тех случаях, когда нужно отрисовать только один маршрут*/}
                <Route exact path="/">
                    <Dashboard/>
                </Route>

                <Route path="/reviews">
                    <Reviews/>
                </Route>

                <Route path="/about-me">
                    <AboutMe/>
                </Route>
                <Route path="/about-us">
                    <AboutUs/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;
