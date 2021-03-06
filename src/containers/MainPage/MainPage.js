import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Profile from '../../containers/Profile';

function MainPage({ setLoggedIn, userID }) {
    const onLogout = () => {
        setLoggedIn(false);
    }

    const navBarContent = [
        ['Home', '/'],
        ['Player List', '/players'],
        ['Battle', '/battle'],
        ['Setting', '/setting'],
    ];

    const navBarProps = {
        navBarContent,
        onLogout
    }

    return (
        <Router>
            <Navbar {...navBarProps} />
            <div>
                <Switch>
                    <Route path="/">
                        <Profile userID={userID} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default MainPage
