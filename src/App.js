import './App.css'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer'

const App = (props) => {

    console.log("props APP", props);
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar state={props.state.sidebar} />
            <div className='app-wrapper-content'>
                <Route exact path='/profile' render={() => (
                    <Profile
                        store={props.store}
                    />
                )} />
                <Route path='/dialogs' render={() => (
                    <DialogsContainer
                        // dialogsPage={props.state.dialogsPage}
                        // dispatch={props.dispatch}
                        store={props.store}
                    />
                )} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>

        </div>

    )
}

export default App;

