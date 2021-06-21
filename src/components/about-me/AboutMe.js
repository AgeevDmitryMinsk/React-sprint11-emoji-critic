import React from "react";
import {Link, Route, useRouteMatch} from "react-router-dom";
import MyStory from "./MyStory";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import "./AboutMe.css";

function AboutMe() {
    const {path, url} = useRouteMatch();

    return (
        <div>
            <ul className="links">
                <li>
                    {/*<Link to="/my-story">Моя история</Link>*/}
                    <Link to={`${url}/my-story`}>Моя история</Link>
                </li>
                <li>
                    <Link to={`${url}/hobbies`}>Хобби</Link>
                </li>
                <li>
                    <Link to={`${url}/contact`}>Контактная информация</Link>
                </li>
            </ul>
            {/*<Route path="/my-story">*/}
            <Route path={`${path}/my-story`}>
                <MyStory/>
            </Route>

            <Route path={`${path}/hobbies`}>
                <Hobbies/>
            </Route>
            <Route path={`${path}/contact`}>
                <Contact/>
            </Route>
        </div>
    );
}

export default AboutMe;