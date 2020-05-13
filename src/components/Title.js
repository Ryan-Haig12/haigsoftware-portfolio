import React from 'react'
import styled from 'styled-components'
import LightSpeed from 'react-reveal/LightSpeed'
import SocialLink from './SocialLink'

import resume from '../pdf/resume.pdf'
import useWindowSize from '../hooks/useWindowSize'

const StyledTitle = styled.span`
    position: absolute;
    top: 5%;
    left: 5%;

    display: flex;
    flex-direction: row;
`

const StyledHeader = styled.h1`
    font-size: 8vh;
    fontFamily: 'Orienta', sans-serif;

    color: white;
    text-shadow: 0px 2px 3px #555;

    @media (max-width: 750px) {
        top: 5%;
        left: 5%;
        font-size: 6vh;
    }

    @media (max-width: 420px) {
        font-size: 4vh;
    }
`

const StyledLinks = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    top: 25%;
    left: 28%;

    @media (max-width: 1050px) {
        top: 100%;
        position: absolute;
        left: 1vh;
    }
`

const Title = () => {
    const [ width ] = useWindowSize()

    const mapSocialLinks = () => {
        const socialData = {
            github: { url: 'https://github.com/Ryan-Haig12', color: '#171515' },
            linkedin: { url: 'https://www.linkedin.com/in/ryan-haig-a696531a7/', color: '#0d8ad1' },
            email: { url: 'mailto:haigsoftwarecolorado@gmail.com?subject=Inquiring About Your Availability', color: '#2cde50' },
            resume: { url: resume, color: '#a726c7' }
        }
        const sty = width > 400 ? { height: 40, width: 40, margin: 5 } : { height: 30, width: 30, margin: 5 }

        let socialLinkComponents = []
        for(let media in socialData) {
            socialLinkComponents.push( <SocialLink key={ socialData[media].url } url={ socialData[media].url } color={ socialData[media].color } style={ sty } /> )
        }

        return socialLinkComponents
    }

    return (
        <StyledTitle>
            <LightSpeed left cascade>
                <StyledHeader>Haig Software</StyledHeader>
                <StyledLinks>
                    { mapSocialLinks() }
                </StyledLinks>
            </LightSpeed>
        </StyledTitle>
    )
}

export default Title
