import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Route, withRouter } from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer'

import UserContainer from './components/Users/UserContainer'
// import ProfileContainer from './components/Profile/ProfileContainer'

import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer'
import { compose } from 'redux'
import Preloader from './components/Common/Preloader/preloader'
import { Suspense } from 'react'
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                    <Route path='/login' render={() => (
                        <Login />
                    )} />
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                    <Route path='/users' render={() => (
                        <UserContainer />
                    )} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

// _____________________________________***************