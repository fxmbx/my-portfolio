

import React from 'react'
import Resume from '../assessts/Resume/Olaore_Oluwafunmibi Olumuyiwa_Resume_07-02-2022-17-01-08.pdf'
function Rusume() {
    return (

        <a className='resume' rel="noreferrer noreferrer" href={Resume} download={'Olaore_Oluwafunmibi Olumuyiwa_Resume_07-02-2022-17-01-08'} target='_blank'>
            <span className='resume-text'>
                View my resume
            </span>
            <span className='resume-icon fa fa-solid fa-briefcase'></span>

        </a>

    )
}

export default Rusume