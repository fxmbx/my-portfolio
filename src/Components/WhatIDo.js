import { Grid } from '@material-ui/core'
import React from 'react'
import bgimage from '../assessts/images/experiencebg.jpg'

function WhatIDo() {
    return (
        <section className='whatIdo' style={{ backgroundImage: `url(${bgimage})` }}>

            <header className='about-header '>What I Do</header>
            <span className='about-midline'></span>
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }} className='whatIDoGrid'>
                {/* <Grid item xs={12} md={1} ></Grid> */}
                <Grid item xs={12} md={6} >
                    <div className='whatIdo-div1'>
                        <div className='whatIdo-div1-top' style={{ padding: '20px' }}>
                            <div className='top-header'>
                                <span className='fa fa-solid fa-code'>

                                </span>
                                <p>Web Develepment</p>
                            </div>
                            <div className='top-body'>
                                Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                            </div>
                        </div>
                        <span className='whatIdo-midline'></span>

                        <div className='whatIdo-div1-bottom' style={{ padding: '20px' }}>
                            <div className='top-header'>
                                <span className='fa fa-solid fa-code'></span>
                                <p>EXPERIENCE DESIGN </p>


                            </div>
                            <div className='top-body'>
                                There have been far too many times where I've been trying to accomplish a simple task on a website, and ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is an aspect of software I believe is vital to a successful product.
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ borderLeft: '1px solid white' }}>
                    <div className='whatIdo-div1'>
                        <div className='whatIdo-div1-top' style={{ padding: '20px' }}>
                            <div className='top-header'>
                                <span className='fa fa-solid fa-circle-dashed'></span>
                                <p>Wev Develep</p>
                            </div>
                            <div className='top-body'>
                                Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                            </div>
                        </div>
                        <span className='whatIdo-midline'></span>

                        <div className='whatIdo-div1-bottom' style={{ padding: '20px' }}>
                            <div className='top-header'>
                                <span className='fa fa-light fa-globe'>

                                </span>
                                <p> Diversity in tech</p>


                            </div>
                            <div className='top-body'>
                                There have been far too many times where I've been trying to accomplish a simple task on a website, and ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is an aspect of software I believe is vital to a successful product.
                            </div>
                        </div>
                    </div>
                </Grid>
                {/* <Grid item xs={12} md={1} ></Grid> */}
            </Grid>
        </section>
    )
}

export default WhatIDo


