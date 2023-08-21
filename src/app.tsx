import React, { lazy, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PageNotFound from "./pages/pageNotFound"
import { SpinnerIcon } from "./assets/icons"
import { Spinner } from "./assets/iconsStyles"

const Home = lazy(() => import('./pages/home'))

const App = () => {
    return (
        <Suspense fallback={<div style={Spinner} color='#fff'><SpinnerIcon /></div>}>
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
