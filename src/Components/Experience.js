import { Grid } from '@material-ui/core'
import React from 'react'
import ExperienceBlock from './ExperienceBlock'
import Rusume from './Rusume';
import bgimage from '../assessts/images/experiencebg.jpg'
import xpimage1 from '../assessts/images/zeplin.png'
import xpimage2 from '../assessts/images/graduate-cap.png'
import xpimage3 from '../assessts/images/laptop.png'


function Experience() {
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    const formatDate = (date) => {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }
    return (
        <div className='experience' style={{ backgroundImage: `url(${bgimage})` }}>
            <div className='experince-wrapper'>
                <div className='experience-heaer'>

                    <header className='about-header '>Some Places I've worked 🥱</header>
                    <span className='about-midline'></span>
                    <p className='experience-descrption'>Thanks to Babcock University , I've had the priviledge of completing a six months Internship where I worked at as a Software Engineer Intern at SAED INTEGRATED SERVICES, Software Intern at Dipole Diamond and IT support Intern at AGPC </p>
                </div>

                <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 1, md: 2 }} className='experienceGrid'>
                    <Grid item xs={12}  > </Grid>
                    <Grid item xs={12} md={12} >
                        <div className='experience-timeline'>
                            <div className='xp-timeline-block'>
                                <ExperienceBlock
                                    jobrole='Babcock university'
                                    company='School of Comuting and Engineering Science'
                                    // url='https://www.babcock.edu.ng/'
                                    url='https://www.babcock.edu.ng/school/'
                                    description='Candidate of Bachelor of science in Computer Science with a focus in software development'
                                    note='Graduting 2022'
                                />


                                <div className='timeline-img'>
                                    <div className='university' style={{ backgroundImage: `url(${xpimage2})` }}>

                                    </div>
                                </div>
                                <div className='time'> 2017 - Present</div>


                            </div>
                            <div className='xp-timeline-block'>
                                <ExperienceBlock
                                    jobrole='Graduate Assistant'
                                    company='NIIT'
                                    url='https://www.niit.com/nigeria'
                                    description=' I Assisted the faculty in introducing programming to new students. I facilitated the learning of student and helped prepare them for exams. All 10 student I was in charge of passed thier intro C# certification exams.'
                                />
                                <div className='timeline-img'>
                                    <div className='university' style={{ backgroundImage: `url(${xpimage1})` }}>

                                    </div>
                                </div>
                                <span className='time'>June 2018- October 2018</span>

                            </div>
                            <div className='xp-timeline-block'>
                                <ExperienceBlock
                                    jobrole='Software Engineer Intern'
                                    company='SAED Integrated Services'
                                    url='https://www.saed.dev/'
                                    description='I Attended daily scrum meetings,
                                    designed use case and user story diagrams for serveral project,I also Developed RESTful APIs using ASP.Net(C#) and consumed the API using js libraries axios.'
                                    note='(worked remotely)'
                                />
                                <div className='timeline-img'>
                                    <div className='university' style={{ backgroundImage: `url(${xpimage2})` }}>

                                    </div>
                                </div>

                                <p className='time'>
                                    January 2021- June 2021
                                </p>

                            </div>
                            <div className='xp-timeline-block'>
                                <ExperienceBlock
                                    jobrole='IT Support Intern,'
                                    company='AGPC'
                                    url='https://www.seplatenergy.com/our-company/our-operations/midstream-gas/anoh-gas-processing-plant/'
                                    description='I created an in house travel app using Microsoft PowerApps and Power Automate. I learned better communication and people management in my time in Anoh gas.'

                                />
                                <div className='timeline-img'>
                                    <div className='university' style={{ backgroundImage: `url(${xpimage3})` }}>

                                    </div>
                                </div>
                                <div className='time'>January 2021- June 2021</div>

                            </div>
                            <div className='xp-timeline-block'>
                                <ExperienceBlock
                                    jobrole='intern (trainee)'
                                    company='NIIT'
                                    url='https://www.dipolediamond.com/'
                                    description='Worked as an intern on a project to provide solutions to a clien'
                                    note='(worked remotely)'

                                />
                                <div className='timeline-img'>
                                    <div className='university' style={{ backgroundImage: `url(${xpimage3})` }}>

                                    </div>
                                </div>
                                <div className='time'>January 2021- March 2021</div>

                            </div>
                            <div className='xp-timeline-block'>
                                <ExperienceBlock
                                    jobrole='With You'
                                    company='🤵‍♀️'
                                    url='ifeoluwa.agboola@gmail.com'
                                    description='Create revolutionary software solutions'
                                    note='(work remotely)'

                                />
                                <div className='timeline-img'>
                                    <div className='university' style={{ backgroundImage: `url(${xpimage3})` }}>

                                    </div>
                                </div>
                                <span className='time'>{formatDate(new Date())} -</span>

                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} > </Grid>

                </Grid>
            </div>

        </div>
    )
}

export default Experience

