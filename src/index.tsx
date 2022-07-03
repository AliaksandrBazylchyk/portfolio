import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./components/pages/Home";
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                     <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
