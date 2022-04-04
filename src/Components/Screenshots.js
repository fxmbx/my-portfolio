import React from 'react'

function Screenshots(props) {
    const { image1, image2, image3 } = props
    console.log(image2)
    return (
        <div className='screenshots'>
            <img className='img-lg' src={image1} />
            <img className='img-sm' src={image3} />
            {/* <img className='img-sm' src={image3} /> */}
        </div>
    )
}

export default Screenshots