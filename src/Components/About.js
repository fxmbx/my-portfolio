import { Grid } from '@material-ui/core'
import React from 'react'
import './style.css'
// import bgimage from '../assessts/images'
function About() {
    return (
        <section className='about'  >
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={7} className='about-left'>
                    <div className='about-header'>Hey, I'm Funmibi 👋.</div>
                    <div className='about-subheader'> <span>
                        I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design. headshot
                    </span></div>
                    <span className='about-midline'></span>
                    <div className='about-content'>
                        I'm a fourth year student at Babcock University in Boston studying computer science and interaction design. I have experience developing and designing software for the web, from simple landing pages to progressive web applications. I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.
                        <br></br>
                        <br></br>

                        I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
                        <br></br>
                        <br></br>

                        When I'm not in front of a computer screen, I'm probably snowboarding, traveling, petting dogs, or learning a new song on my uke.
                    </div>
                </Grid>
                <Grid item xs={12} md={3} className='about-right'>
                    <div className='about-headshot'>
                        {/* <img src="../assessts/images/home-bg.jpg" style={{ borderRadius: '50%', backgroundColor: '#fff' }} /> */}
                        <div style={{ borderRadius: '50%', backgroundColor: '#fff', height: '70%', width: '100%' }}></div>
                    </div>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>



        </section >
    )
}

export default About