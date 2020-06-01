import React from 'react'
import styled from 'styled-components'

import resume from '../pdf/RyanHaigResume.pdf'

const StyledFooter = styled.div`
    font-size: 2vh;
    position: sticky;
    left: 0;
    bottom: 0;
    right: 0;
    background: #82f22f;
    text-align: center;

    padding: 0;
    padding-top: 5px;
`

const EmailLink = styled.a`
    color: black;
`

const StyledText = styled.p`
    padding-top: 5px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledText>
                <i className="mail icon"></i><EmailLink href="mailto:haigsoftwarecolorado@gmail.com?subject=Inquiring About Your Availability" target="_blank" rel="noopener noreferrer">Haigsoftwarecolorado@gmail.com</EmailLink> | 
                <a href="https://github.com/Ryan-Haig12"><i className="github icon"></i> Github </a> |
                <a href="https://www.linkedin.com/in/ryan-haig-a696531a7/"><i className="linkedin icon"></i> linkedin</a> |
                <a href = { resume } target = "_blank"><i className="file pdf icon"></i>Resume</a>
            </StyledText>
        </StyledFooter>
    )
}

export default Footer
