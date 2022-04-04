import React from 'react'

function ExperienceBlock(props) {
    const { jobrole, company, description, url, note } = props
    return (
        <>
            <div className='xp-content'>
                <p className='jobrole'>{jobrole}</p>
                <p className='organizationName'>
                    <a href={url} target='_blank'> {company}</a>
                    {/* <a href='' target='_blank'>Anohgas processing company</a> */}
                    <p className='jobdesc'>{description}
                        <b style={{ fontWeight: '700' }}> {note}</b>
                    </p>
                </p>

            </div>
        </>
    )
}

export default ExperienceBlock