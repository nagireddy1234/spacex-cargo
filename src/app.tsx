import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PageNotFound from "./pages/pageNotFound"
import { SpinnerIcon } from "./assets/icons"

const Home = lazy(() => import('./pages/home'))

const App = () => {
    return (      
            <Suspense fallback={<div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily:'Roboto' }}><SpinnerIcon /></div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:id" element={<Home />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
    )
}

export default App
