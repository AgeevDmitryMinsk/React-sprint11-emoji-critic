import React from 'react';
import './AboutUs.css';
import SiteHistory from './SiteHistory'
import SiteMission from './SiteMission';
import {Link, Route, useRouteMatch} from 'react-router-dom';

function AboutUs() {

    const {path, url} = useRouteMatch();

    return (
        <div className="about-us">
            Здесь вы можете узнать больше о нашей миссии и истории появления нашего приложения.
            <ul>
                <li>
                    {/*<Link>История сайта</Link>*/}
                    <Link to={`${url}/site-history`}>История сайта</Link>
                </li>
                <li>
                    {/*<Link>Миссия сайта</Link>*/}
                    <Link to={`${url}/site-mission`}>Миссия сайта</Link>
                </li>
            </ul>

            <Route path={`${path}/site-history`}>
                <SiteHistory/>
            </Route>

            <Route path={`${path}/site-mission`}>
                <SiteMission/>
            </Route>

        </div>
    )
}

export default AboutUs;