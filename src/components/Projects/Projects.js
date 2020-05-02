import React, { useState } from 'react'
import styled from 'styled-components'

import Card from './Card'

const StyledProjects = styled.div`
    font-size: 2vh;
    height: 100vh;
    background: #5eaeff;
    width: 70%;
    margin-top: 5px;
`

const ProjectsHeader = styled.h1`
    border-bottom: 5px solid black;
    width: 200px;
    text-align: center;
    padding-top: 2vh;
    margin: auto;
`

const ProjectLink = styled.h3`
    display: inline;
    cursor: pointer;
    border-bottom: 1px solid black;
    margin: 5px;

    :hover {
        color: red;
    }
`

const Projects = () => {
    const [ currentProject, setCurrentProject ] = useState('goals')

    const cards = {
        goals: {
            image: '/img/goals-www.png', // trello?
            appName: 'Goals',
            desc: 'The app revolves around a game a coworker of mine played with his friends. The idea is that there is a list of roughly 40 goals each of the players are striving to complete in their day to day lifes that will slowly improve their life. Once a player finishes a goal, they can log their goal and time on the group\'s page. At the end of each week and month, all goals are stored and the player with the most points logged for that week/month wins. ',
            features: [ 'React/GraphQL Hosted on Heroku', 'Using mlab.com to host DB' ],
            challanges: 'I had never created a full stack app of this size with GraphQL as the main API opposed to an Express REST API.',
            techUsed: [ 'ReactJS', 'Node.js', 'GraphQL', 'MongoDB', 'Heroku', 'Trello' ],
            herokuLink: undefined,
            githubLink: undefined,
            note: 'Please click Goals-www or Goals-graphql above to directly view either Goals app'
        },
        'goals-www': {
            image: '/img/goals-www.png',
            appName: 'Goals-www',
            desc: 'This is the React implementation of the entire Goals project.',
            features: ['Full user authentication system', 'Apollo GraphQL Client'],
            challanges: 'The React code it littered with evidence of me slowly learning how to wire up an efficient Apollo-Client app, specifically learning the apollo hooks library in order to hit my API. I am also not gifted on creating stylish components on the fly; Due to this, I feel the front end is due for a much makeover now that the core functionality is in place.',
            techUsed: [ 'React-Router', 'Formik', 'Styled-Components', 'Redux'],
            herokuLink: 'http://goals-www.herokuapp.com/',
            githubLink: 'https://github.com/Ryan-Haig12/goals-www'
        },
        'goals-graphql': {
            image: '/img/goals-graphql.png',
            appName: 'Goals-GraphQL',
            desc: 'This is the GraphQL implenentation of the entire Goals Project.',
            features: [''],
            challanges: 'The two hardest implementations I had on this project was setting up the authentication system for every single endpoint and the subscription written to implement the IM chat system.',
            techUsed: ['graphql-yoga', 'JSON Web Tokens', 'mongoose' ],
            herokuLink: 'https://goals-graphql.herokuapp.com/',
            githubLink: 'https://github.com/Ryan-Haig12/goals-graphql'
        },
        'covid-tracker': {
            image: '/img/covid-tracker.png',
            appName: 'Covid-Tracker',
            desc: 'No matter who you are, Covid-19 has impacted your life and likely will for years to come. Online tools (such as cdc.gov/coronavirus/2019-nCoV/index.html and worldometers.info/coronavirus/coronavirus-death-toll/) have been vital to me in staying up to date on the virus in a non-political, stats based, method. I wanted to create a similar tool that does nothing more than present the user with numbers and facts',
            features: ['Interactive map of US', 'Real time Covid stats for all 50 states'],
            challanges: 'Learning D3 was a huge learning curve. React and D3 by nature both want complete control over the DOM. I had to take some time learning D3 in order to treat the D3 code (Map of the US) like any other React Component. I did this by wrapping the D3 code in a ref and treating the div tag with that ref as any other component.',
            techUsed: ['D3.js', 'Redux', 'Covid-19 API'],
            herokuLink: 'https://react-covid-tracker-www.herokuapp.com/',
            githubLink: 'https://github.com/Ryan-Haig12/react-covid-tracker'
        }, 
        'memory-game': {
            image: undefined,
            appName: 'Memory-Game',
            desc: 'Remember to Push Memory-Game to heroku and complete this portion',
            features: [''],
            challanges: '',
            techUsed: [''],
            herokuLink: '',
            githubLink: ''
        }
    }

    const getCard = card => {
        for(let c in cards) {
            if(cards[card] === cards[c]) return <Card key={ c } data={ cards[c] } />
        }
    }

    const onClickHandler = e => {
        setCurrentProject(e.toLowerCase())
    }

    const indvProject = () => {
        let projs = []
        for(let c in cards) {
            projs.push(
                <ProjectLink key={ c } onClick={ () => onClickHandler(cards[c].appName) } >
                    { cards[c].appName }
                </ProjectLink>
            )
        }
        return projs
    }

    return (
        <StyledProjects className="ui center aligned container" >
            <ProjectsHeader>Projects</ProjectsHeader>
            <p style={{ marginTop: '20px' }}>{ indvProject() }</p>
            { getCard(currentProject) }
        </StyledProjects>
    )
}

export default Projects
