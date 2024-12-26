import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Browser from './components/browser';
import Body from './components/body';
import Clients from './components/clients';
import SideMenu from './components/side-menu';
import Footer from './components/footer';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Browser />
            <Body />
            <Clients />
            <SideMenu />
            <Footer />
        </>
    );
}

export default App;
