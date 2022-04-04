import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import mooncake1 from '../assessts/images/mooncake1.png'
import mooncake2 from '../assessts/images/mooncake3.png'
import mooncake3 from '../assessts/images/mooncakemobile1.png'
import bollore1 from '../assessts/images/bollore1.png'
import bollore2 from '../assessts/images/bolloremobile1.png'
import palpension1 from '../assessts/images/palpension.png'
import palpension2 from '../assessts/images/palpension1.png'
import adventuretime1 from '../assessts/images/Adventuretime2.png'
import adventuretime2 from '../assessts/images/AdventuretimeMobe1.png'

import Screenshots from './Screenshots'
function SomeOfMyWorks() {
    return (
        <section className='som' >
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
                                Mooncake is a project created to fine tune my frontend skills. built this maily to play around with ccs gradient .
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
                            image1={bollore1}
                            // image2={mooncake2}
                            image3={bollore2}
                        />
                        <div className='som-desc'>
                            <div className='som-desc-header'>
                                <h1 className='som-title'>Bollore Competency Assessment Tool</h1>
                                <div className='som-btn'>
                                    <a href='https://btlnigeria.com/' target='_blank'>Demo</a>

                                </div>
                            </div>
                            <div className='som-desc-text'>
                                Bollore Competency Assessment Tool is a proficiency assessment platform that allows in house staff of Bollore logistics Nigeria assess themselves and generate report in both excel and pdf
                            </div>
                            <div className='stacks-used'>
                                <ul className='stacks-list'>
                                    <li className='stack-item'>React</li>
                                    <li className='stack-item'>.Net Core Web Api</li>
                                    <li className='stack-item'>Azure</li>
                                    <li className='stack-item'>CSS</li>
                                    <li className='stack-item'>JavaScript</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className='som-container'>
                        <Screenshots
                            image1={palpension1}
                            // image2={mooncake2}
                            image3={palpension2}
                        />
                        <div className='som-desc'>
                            <div className='som-desc-header'>
                                <h1 className='som-title'>PALPensions Competency Assessment Tool</h1>
                                <div className='som-btn'>
                                    <a href='https://www.palpensionscompetencytool.com/' target='_blank'>Demo</a>

                                </div>
                            </div>
                            <div className='som-desc-text'>
                                This platform allows in house staff of palpension take a self assessment which is then sent to their line to assess them then and automatically generate a report that can be used for staff appraisal.
                            </div>
                            <div className='stacks-used'>
                                <ul className='stacks-list'>
                                    <li className='stack-item'>Html</li>
                                    <li className='stack-item'>CSS</li>
                                    <li className='stack-item'>JavaScript</li>
                                    <li className='stack-item'>.Net Core web Api</li>
                                    <li className='stack-item'>Asp.Net MVC</li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className='som-container'>
                        <Screenshots
                            image1={adventuretime1}
                            // image2={mooncake2}
                            image3={adventuretime2}
                        />
                        <div className='som-desc'>
                            <div className='som-desc-header'>
                                <h1 className='som-title'>Adventure Time 😆</h1>
                                <div className='som-btn'>
                                    <a href='https://github.com/fxmbx/AdventureTIme' target='_blank'>Code</a>

                                </div>
                            </div>
                            <div className='som-desc-text'>
                                Adventure Time is a project built just for fun
                            </div>
                            <div className='stacks-used'>
                                <ul className='stacks-list'>
                                    <li className='stack-item'>React</li>
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