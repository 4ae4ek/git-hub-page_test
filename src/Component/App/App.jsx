import React, {Suspense} from 'react';
import './App.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {Route, Routes} from "react-router-dom";

const MainPage = React.lazy(() => import('../Main/Main'));
const Price = React.lazy(() => import('../Price/Price'));
const Demo = React.lazy(() => import('../Demo/Demo'));
const Plug = React.lazy(() => import('../Plug/Plug'));

const App = (props) => {
    return (
        <>
            <Header/>
            <Suspense fallback={<h2><span role="img" aria-label="whirlpool">🌀</span> Loading...</h2>}>
                <Routes>
                    <Route path="git-hub-page_test/" element={<MainPage/>}/>
                    <Route path="git-hub-page_test/price" element={<Price/>}/>
                    <Route path="git-hub-page_test/demoPortal" element={<Demo/>}/>
                    <Route path="git-hub-page_test/aboutUs" element={<Plug/>}/>
                    <Route path="git-hub-page_test/ourServices" element={<Plug/>}/>
                    <Route path="git-hub-page_test/contacts" element={<Plug/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </>
    );
}

export default App;