import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import mooncake1 from '../assessts/images/mooncake1.png'
import mooncake2 from '../assessts/images/mooncake3.png'
import mooncake3 from '../assessts/images/mooncakemobile1.png'
import bollore1 from '../assessts/images/bollore1.png'

import Screenshots from './Screenshots'
function SomeOfMyWorks() {
    return (
        <section className='som'>
            <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }} className='somGrid'>
                <Grid item xs={12} md={0}></Grid>
                <Grid item xs={12} md={12} className='about-left'>
                    <div className='about-header'>Somethings I've done 😁</div>
                    <div className='about-subheader'> <span>

                    </span></div>
                    <span className='about-midline'></span>
                    <div className='som-container'>
                        <Screenshots
                            image1={mooncake1}
                            // image2={mooncake2}
                            image3={mooncake3}
                        />
                        <div className='som-desc'>
                            <div className='som-desc-header'>
                                <h1 className='som-title'>MOONCAKE</h1>
                                <div className='som-btn'>
                                    <a href='https://github.com/fxmbx/singlePage' target='_blank'>Code</a>

                                </div>
                            </div>
                            <div className='som-desc-text'>
                                Mooncake is a project created to fine mainly to play around with ccs gradient .
                            </div>
                            <div className='stacks-used'>
                                <ul className='stacks-list'>
                                    <li className='stack-item'>Html</li>
                                    <li className='stack-item'>CSS</li>
                                    <li className='stack-item'>JavaScript</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className='som-container'>
                        <Screenshots
                            image1={mooncake1}
                            // image2={mooncake2}
                            image3={mooncake3}
                        />
                        <div className='som-desc'>
                            <div className='som-desc-header'>
                                <h1 className='som-title'>MOONCAKE</h1>
                                <div className='som-btn'>
                                    <a href='https://github.com/fxmbx/singlePage' target='_blank'>Code</a>

                                </div>
                            </div>
                            <div className='som-desc-text'>
                                Mooncake is a project created to fine mainly to play around with ccs gradient .
                            </div>
                            <div className='stacks-used'>
                                <ul className='stacks-list'>
                                    <li className='stack-item'>Html</li>
                                    <li className='stack-item'>CSS</li>
                                    <li className='stack-item'>JavaScript</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className='som-container'>
                        <Screenshots
                            image1={mooncake1}
                            // image2={mooncake2}
                            image3={mooncake3}
                        />
                        <div className='som-desc'>
                            <div className='som-desc-header'>
                                <h1 className='som-title'>MOONCAKE</h1>
                                <div className='som-btn'>
                                    <a href='https://github.com/fxmbx/singlePage' target='_blank'>Code</a>

                                </div>
                            </div>
                            <div className='som-desc-text'>
                                Mooncake is a project created to fine mainly to play around with ccs gradient .
                            </div>
                            <div className='stacks-used'>
                                <ul className='stacks-list'>
                                    <li className='stack-item'>Html</li>
                                    <li className='stack-item'>CSS</li>
                                    <li className='stack-item'>JavaScript</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className='som-container'>
                        <Screenshots
                            image1={mooncake1}
                            // image2={mooncake2}
                            image3={mooncake3}
                        />
                        <div className='som-desc'>
                            <div className='som-desc-header'>
                                <h1 className='som-title'>MOONCAKE</h1>
                                <div className='som-btn'>
                                    <a href='https://github.com/fxmbx/singlePage' target='_blank'>Code</a>

                                </div>
                            </div>
                            <div className='som-desc-text'>
                                Mooncake is a project created to fine mainly to play around with ccs gradient .
                            </div>
                            <div className='stacks-used'>
                                <ul className='stacks-list'>
                                    <li className='stack-item'>Html</li>
                                    <li className='stack-item'>CSS</li>
                                    <li className='stack-item'>JavaScript</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </Grid>

            </Grid>



        </section >
    )
}

export default SomeOfMyWorks