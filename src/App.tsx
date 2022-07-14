import React from 'react'
import { Outlet } from 'react-router-dom'

// import Header from "@components/Header";

import './App.scss'

const App: React.FC = () => {
    return (
        <div>
            {/*<Header />*/}
            <Outlet />
        </div>
    )
}

export default App
