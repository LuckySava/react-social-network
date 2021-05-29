import './App.css'
// import Profile from './components/Profile/Profile'
// import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UserContainer from './components/Users/UserContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'

const App = (props) => {

    console.log("props APP", props);
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => (
                    <ProfileContainer />
                )} />
                <Route path='/login' render={() => (
                    <Login />
                )} />
                <Route path='/dialogs' render={() => (
                    <DialogsContainer />
                )} />
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

export default App;

