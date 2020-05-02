import React from 'react'
import styled from 'styled-components'
import LightSpeed from 'react-reveal/LightSpeed'
import SocialLinks from './SocialLinks'

const StyledTitle = styled.span`
    font-size: 10vh;
    position: absolute;
    top: 15vh;
    left: 10vh;

    color: white;
    text-shadow: 0px 2px 3px #555;
    font-family: 'Orienta', sans-serif;
`

const Title = () => {
    return (
        <LightSpeed left cascade>
            <StyledTitle>Haig Software</StyledTitle>
            <SocialLinks />
        </LightSpeed>
    )
}

export default Title
