import './App.css';
import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert'
import Dashboard from './components/dashboard/Dashboard'
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Redux
import { Provider } from 'react-redux'
import store  from './store'

if(localStorage.token) {
    setAuthToken(localStorage.token)
}

const  App = () => {
    useEffect(() => {
        store.dispatch(loadUser())
    }, [])

    return(
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Alert/>
                <Routes>
                    <Route exact path="/" element={ <Landing/> } />
                    <Route exact path="/register" element={ <Register/> } />
                    <Route exact path="/login" element={ <Login/> } />
                    <Route exact path="/dashboard" element={ <Dashboard/> } />
                </Routes>
            </Router>
        </Provider>
    )
}

export default App;
