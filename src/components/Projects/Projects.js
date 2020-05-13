import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

import Card from './Card'

const StyledProjects = styled.div`
    font-size: 2vh;
    background: #5eaeff;
    width: 70%;
    margin-bottom: 5px;
    border-radius: 5px;

    @media (max-width: 600) {
        color: red;
    }
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
    margin: 5px;
`

const ProjectsBackground = styled.div`
    padding: 5px;
    padding-bottom: 100px;
`

const Projects = () => {
    const [ currentProject, setCurrentProject ] = useState('goals')
     
    const cards = {
        goals: {
            image: '/img/goals-www.png', // trello?
            appName: 'Goals',
            desc: 'The app revolves around a game a coworker of mine played with his friends. The idea is that there is a list of roughly 40 goals each of the players are striving to complete in their day to day lives that will slowly improve their life. Once a player finishes a goal, they can log their goal and time on the group\'s page. At the end of each week and month, all goals are stored and the player with the most points logged for that week/month wins. ',
            features: [ 'React/GraphQL Hosted on Heroku', 'Full user authentication system', 'Using mlab.com to host DB' ],
            challenges: 'I had never created a full stack app of this size with GraphQL as the main API opposed to an Express REST API.',
            techUsed: [ 'ReactJS', 'Node.js', 'GraphQL', 'MongoDB', 'Heroku', 'Trello' ],
            herokuLink: undefined,
            githubLink: undefined,
            note: 'Please click Goals-www or Goals-graphql above to directly view either Goals app'
        },
        'goals-www': {
            image: '/img/goals-www.png',
            appName: 'Goals-www',
            desc: 'This is the React implementation of the entire Goals project.',
            features: ['Apollo GraphQL Client'],
            challenges: 'The React code it littered with evidence of me slowly learning how to wire up an efficient Apollo-Client app, specifically learning the apollo hooks library in order to hit my API. I am also not gifted on creating stylish components on the fly; Due to this, I feel the front end is due for a much makeover now that the core functionality is in place.',
            techUsed: [ 'React-Router', 'Formik', 'Styled-Components', 'Redux', 'semantic-ui'],
            herokuLink: 'http://goals-www.herokuapp.com/',
            githubLink: 'https://github.com/Ryan-Haig12/goals-www'
        },
        'goals-graphql': {
            image: '/img/goals-graphql.png',
            appName: 'Goals-GraphQL',
            desc: 'This is the GraphQL implementation of the entire Goals Project. I genuinely enjoyed developing my first GraphQL project after taking a few related courses on Udemy. The company I was working for when I was developing this were heavily investing in GraphQL services. Being able to work on this web service while I tested code, behavior, and queries at work was a great real world learning experience.',
            features: ['Interactive playground'],
            challenges: 'The subscription endpoint written to implement the IM chat system was challenging to get to work with Heroku in production. The roadblock I was presented with taught me a lot about the concept of web sockets and real world solutions to a constant data stream sent to the client.',
            techUsed: ['graphql-yoga', 'JSON Web Tokens', 'MongooseJS' ],
            herokuLink: 'https://goals-graphql.herokuapp.com/',
            githubLink: 'https://github.com/Ryan-Haig12/goals-graphql'
        },
        'covid-tracker': {
            image: '/img/covid-tracker.png',
            appName: 'Covid-Tracker',
            desc: 'No matter who you are, Covid-19 has impacted your life and likely will for years to come. Online tools (such as cdc.gov/coronavirus/2019-nCoV/index.html and worldometers.info/coronavirus/coronavirus-death-toll/) have been vital to me in staying up to date on the virus in a non-political, stats based, method. I wanted to create a similar tool that does nothing more than present the user with numbers and facts',
            features: ['Interactive map of US', 'Real time Covid stats for all 50 states'],
            challenges: 'Learning D3 was a huge learning curve. React and D3 by nature both want complete control over the DOM. I had to take some time learning D3 in order to treat the D3 code (Map of the US) like any other React Component. I did this by wrapping the D3 code in a ref and treating the div tag with that ref as any other component.',
            techUsed: ['D3.js', 'Redux', 'Covid-19 API'],
            herokuLink: 'https://react-covid-tracker-www.herokuapp.com/',
            githubLink: 'https://github.com/Ryan-Haig12/react-covid-tracker'
        }, 
        'memory-game': {
            image: '/img/memory-game.png',
            appName: 'Memory-Game',
            desc: 'My personal take on the classic memory card game, concentration. The user is prompted to make a search for any topic they desire. Their search result is used in a GET request to get 25 related gifs from Giphy.com. Those gifs are used as the \'card image\' for all cards in the game and are shown when the card is flipped.',
            features: ['Powered by Giphy', 'react-reveal'],
            challenges: 'The actual logic of the game was easily the most time consuming part, creating the game from scratch was as frustrating as it was enjoyable to work on. In addition, mobile development has proven to be a difficult task and is still a work in progress.',
            techUsed: ['react-bootstrap', 'Giphy API'],
            herokuLink: 'https://memory-game-haig.herokuapp.com/',
            githubLink: 'https://github.com/Ryan-Haig12/memory-game'
        },
        'fantasy-basketball': {
            image: '/img/fantasy-basketball.png',
            appName: 'Fantasy-Basketball',
            desc: 'Playing fantasy basketball online is one of my favorite obsessions. After finding a real time NBA API I decided to throw myself into creating my own implementation of a fantasy basketball application. The complex system of drafting, leagues, players data, etc has more or less been implemented in the backend. The frontend, sadly, never got the love it deserved.',
            features: ['Full authentication system', 'Gravatar user images'],
            challenges: 'As I wrote more and more backend Node.js code, I discovered this API I was paying $15 a month for had wildly inconsistent data. For instance, if a player scored 15 points last Wednesday, the API would more than likely give me data for the wrong game or not have the specific game data at all. I decided to drop the project when I found the best alternative service was $100 a month. I am sad that I will likely not put effort into this project for the forseeable future, but I am very proud of the backend service I created here.',
            techUsed: ['NBA API through RapidAPI', 'Node.js', 'Express', 'React', 'Redux',  'MongoDB'],
            herokuLink: 'https://fantasy-basketball-haig-turley.herokuapp.com',
            githubLink: 'https://github.com/Shadowinnothing/FantasyBasketball'
        },
        'udemy-courses': {
            image: '/img/shadowinnothing-github.png',
            appName: 'Udemy-Courses',
            desc: 'I used an alternate github account on a handful of the MERN stack courses I took on Udemy. Back in the days when this code was written, I would work my day job of keeping track of a handful of commercial properties in Boulder, Colorado. After work every day I was either working through Udemy courses or trying to make my way into the software culture of the town as a autodidact developer.',
            features: ['8 Different MERN stack projects worked on by myself prior to and during my QA employment', 'Fantasy Basketball Project'],
            challenges: 'I did not learn git early enough in my developing journey. I would have really enjoying storing more Udemy projects in this github account to represent what I had practiced/learned more. However, I was simply to novice at the time to understand that there is benefit to saving my code elsewhere from my laptop.',
            techUsed: ['ReactJS', 'Node.js', 'GraphQL', 'MongoDB', 'Heroku', 'Trello'],
            herokuLink: undefined,
            githubLink: 'https://github.com/Shadowinnothing'          
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

    const renderAllProjects = () => {
        let projects = []
        for(let c in cards) {
            projects.push(
                <Button primary style={{ padding: '10px', margin: '5px' }} onClick={ () => onClickHandler(cards[c].appName) } key={ c } >
                    <ProjectLink key={ c } >
                        { cards[c].appName }
                    </ProjectLink>
                </Button>
            )
        }
        return projects
    }

    return (
        <StyledProjects className="ui center aligned container">
            <ProjectsBackground>
                <ProjectsHeader>Projects</ProjectsHeader>
                <p style={{ padding: 'auto', margin: '10px' }} >These projects are all hosted on Heroku using a free dyno. Due to this, viewing an app in browser may take up to 20 seconds to load</p>
                <p style={{ marginTop: '20px' }}>{ renderAllProjects() }</p>
                { getCard(currentProject) }
            </ProjectsBackground>
        </StyledProjects>
    )
}

export default Projects
