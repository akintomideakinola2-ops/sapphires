import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
};

export default App;