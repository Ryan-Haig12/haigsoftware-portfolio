import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'

const BioContainer = styled.div`
    font-size: 2vh;
    left: 55%;
    top: 6vh;
    width: 35%;

    position: absolute;
`

const Bio = () => {
    return (
        <BioContainer>
            <Bounce right>
            <h1 style={{ fontSize: '5vh' }} >Hello!</h1>
            <p>My name is Ryan Haig. I am an aspiring Javascript based Full Stack Web Developer based out of Denver, Colorado.</p>
            <p>My first QA/Tester has come to an end and I am ready and eager to begin my Developing career.</p>
            </Bounce>
        </BioContainer>
    )
}

export default Bio