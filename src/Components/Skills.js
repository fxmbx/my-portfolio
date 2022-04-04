import { Grid } from '@material-ui/core'
import { border } from '@mui/system'
import React from 'react'

function Skills() {
    return (
        <section className='skills'>

            <header className='about-header '>Skills</header>
            <span className='about-midline'></span>
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }} className='skillsGrid'>
                <Grid item xs={12} md={4} >
                    <div className='skills-left'>
                        <div className='top-header'>
                            <span className='fa fa-solid fa-terminal'>

                            </span>
                            <p>Develepment</p>
                        </div>
                        <ul>
                            <li className='skills-dev-item'>Node.js</li>
                            <li className='skills-dev-item'>.Net Core</li>
                            <li className='skills-dev-item'>MSSQL</li>
                            <li className='skills-dev-item'>MySQL</li>
                            <li className='skills-dev-item'>MongoDb</li>
                            {/* <li className='skills-dev-item'>Nest.js</li> */}
                            <li className='skills-dev-item'>React</li>
                            {/* <li className='skills-dev-item'>React Native</li> */}
                            <li className='skills-dev-item'>JavaScript</li>
                            <li className='skills-dev-item'>Html5</li>
                            <li className='skills-dev-item'>Css</li>

                        </ul>


                    </div>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={7} >
                    <div className='skill-right-wrapper'>

                        <div className='skills-right'>
                            <div className='tools-wrapper'>
                                <div className='top-header'>
                                    <span className='fa fa-solid fa-toolbox'>

                                    </span>
                                    <p>Tools</p>
                                </div>
                                <ul className='list' >
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        Git + Github
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        Visual Studio Code
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        Atlas
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check' ></span>
                                        Postman
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        Command Line
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        Azure
                                    </li>
                                </ul>
                            </div>
                            <div className='knowledge-wrapper'>
                                <div className='top-header'>
                                    <span className='fa fa-solid fa-books'>

                                    </span>
                                    <p>knowledge</p>
                                </div>
                                <ul className='list' >
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>

                                        ECMAScript 6
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        Object Oriented Programming
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        Functional Programming
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check' ></span>
                                        Serverless Framework
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        MicroService Architecture
                                    </li>
                                    <li className='list-item'>
                                        <span className='fa fa-solid fa-check'></span>
                                        Event Driven Programming
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div >

                            <div className='design-wrapper'>
                                <div className='top-header'>
                                    <span className='fa fa-solid fa-marker'>

                                    </span>
                                    <p>Design</p>
                                </div>
                                <ul>
                                    <li className='design-item'>
                                        {/* <img className='design-img' src='../assessts/images/home-bg.jpg' /> */}
                                    </li>
                                    <li className='design-item'>
                                        <img className='design-img' src='../assessts/images/home-bg.jpg' />
                                    </li>
                                    <li className='design-item'>
                                        {/* <img className='design-img' src='../assessts/images/home-bg.jpg' /> */}
                                    </li>
                                    <li className='design-item'>
                                        {/* <img className='design-img' src='../assessts/images/home-bg.jpg' /> */}
                                    </li>
                                    <li className='design-item'>
                                        {/* <img className='design-img' src='../assessts/images/home-bg.jpg' /> */}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>


                </Grid>
                {/* <Grid item xs={12} md={1} ></Grid> */}
            </Grid>
        </section >
    )
}

export default Skills