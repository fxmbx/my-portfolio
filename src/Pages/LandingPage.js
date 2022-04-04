import React from 'react'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Home from '../Components/Home'
import Rusume from '../Components/Rusume'
import Skills from '../Components/Skills'
import SomeOfMyWorks from '../Components/SomeOfMyWorks'
import WhatIDo from '../Components/WhatIDo'

function LandingPage() {
    return (
        <div className='landingpage-wrapper' styles={{ position: 'relative' }}>
            <Home />
            <About />
            <WhatIDo />
            <Skills />
            <Experience />
            <Rusume />

            <SomeOfMyWorks />
        </div>
    )
}

export default LandingPage