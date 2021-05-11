import './App.css'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, Router } from 'react-router-dom';

const App = (props) => {
    
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={() => (
                    <Profile
                    state={props.state.profilePage}
                    addNewPost={props.addNewPost}
                    />
                    )} />
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;

