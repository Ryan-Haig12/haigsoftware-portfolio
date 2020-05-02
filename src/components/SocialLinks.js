import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'

import resume from '../pdf/resume.pdf'

const StyledLinks = styled.div`
    position: absolute;
    top: 20vh;
    left: 32vh;
    padding: 5px;
`

const sty = {
    height: 50, width: 50, margin: 5
}

const bgColor = 'white'

const SocialLinks = () => {
    return (
        <StyledLinks>
            <SocialIcon url="https://github.com/Ryan-Haig12" style={ sty } bgColor={ bgColor } onMouseEnter={ () => console.log('ddd') }/>
            <SocialIcon url="https://www.linkedin.com/in/ryan-haig-a696531a7/" style={ sty } bgColor={ bgColor } />
            <SocialIcon url="mailto:haigsoftwarecolorado@gmail.com?subject=Inquiring About Your Availability" style={ sty } bgColor={ bgColor } />
            <SocialIcon url={ resume } style={ sty } bgColor={ bgColor } />
        </StyledLinks>
    )
}

export default SocialLinks
