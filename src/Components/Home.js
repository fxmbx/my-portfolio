import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import bgimage from '../assessts/images/stuff.jpg'
function Home() {
    return (

        <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 1 }} className='home' style={{ backgroundImage: `url(${bgimage})` }}>
            <Grid item xs={12} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='home-content'>
                    <p className='home-heading'>Olaore Oluwafunmibi</p>
                    <p className='home-subheading'>Backend Developer</p>
                </div>

                <div class="scroll-down-wrapper">

                    <a href='' className='scroll-down'>
                        <img class="logo" src="" alt="scroll down" />
                        <span class="scroll-down-text"> Learn More
                            <svg class="chevron" viewBox="0 0 57.942 105.958" enable-background="new 0 0 11.893 6.503">
                                <line fill="none" stroke="#fff" stroke-width="7" stroke-miterlimit="10" x1="2.475" y1="2.475" x2="55.467" y2="55.466"></line> <line fill="none" stroke="#fff" stroke-width="7" stroke-miterlimit="10" x1="55.467" y1="50.492" x2="2.475" y2="103.484"></line>
                            </svg>
                        </span>
                    </a>
                </div>

            </Grid>

        </Grid >
        // <section className='home'>

        // </section>
    )
}

export default Home


