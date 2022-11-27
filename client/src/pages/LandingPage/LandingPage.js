import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import store from "../../redux/configureStore"
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

export default function LandingPage() {
    return (
        <div>
            <h1>Intentful</h1>
                <h3>By order of the Techy Blinders</h3>
            <center className = "gradient-wrapper">
                <Register />
                <br></br>
                <Login />
            </center>
        </div>
    )
}
