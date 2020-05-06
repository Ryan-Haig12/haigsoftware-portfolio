import React from 'react'
import styled from 'styled-components'
import { Grid, Divider, Segment } from 'semantic-ui-react'
import Flip from 'react-reveal/Flip'
import Reveal from 'react-reveal/Reveal'

const Box = styled.div`
    border: 1px solid black;
    font-size: 2vh;
    padding: 2%;
    background: #b8dbff;
    position: relative;

    border-radius: 4px;
`

const Header = styled.h3`
    font-size: 2vh;
`

const Skills = () => {
    return (
        <div style={{ background: '#b8dbff', margin: '5px', borderRadius: '5px' }}>
            <Reveal style={{ width: '70%' }} >
                <Segment className="ui center aligned container"  style={{ background: '#5eaeff' }} >

                    <Grid columns={1} relaxed='very' >
                        <Grid.Column>
                            <Flip left cascade>
                                <Box>
                                    <h1 style={{ fontSize: '5vh' }}>Hello!</h1>
                                    <p>My name is Ryan Haig. I am an aspiring Javascript based Full Stack Web Developer based out of Denver, Colorado.</p>
                                    <p>My first QA/Tester has come to an end and I am ready and eager to begin my Developing career.</p>
                                </Box>
                            </Flip>
                        </Grid.Column>
                    </Grid>

                    <Grid columns={1} relaxed='very' >
                        <Grid.Column>
                            <Flip left cascade>
                                <Box>
                                    <Header><i className="server big icon" />Back End Development</Header>
                                    <p>My real passion in coding is in back end development.</p>
                                    <p>Writing both Express and GraphQL based APIs is by far</p>
                                    <p>the most fun I have working on any project</p>
                                    <h1><i className="node big icon"></i></h1>
                                    <p>Node.js / Express / GraphQL / Heroku / MongoDB / MySQL / JSON Web Tokens</p>
                                </Box>
                            </Flip>
                        </Grid.Column>
                    </Grid>

                    <Grid columns={ 1 } relaxed='very'>
                        <Grid.Column>
                            <Flip left cascade>
                                <Box>
                                    <Header><i className="desktop big icon"></i>Front End Development</Header>
                                    <p>Just because I prefer writing back end does not</p>
                                    <p>mean I don't also enjoy working with React.</p>
                                    <p>All the front end apps I create all use the React library</p>
                                    <h1><i className="react big icon"></i></h1>
                                    <p>React / Apollo GraphQL / Redux / Styled-Components / D3.js / Formik </p>
                                </Box>
                            </Flip>
                        </Grid.Column>
                    </Grid>

                    <Divider horizontal> </Divider>
                    
                    <Grid columns={1} relaxed='very' textAlign='center'>
                        <Grid.Column >
                            <Flip left cascade>
                                <Box>
                                    <p>While Javascript is my bread and butter, but learning new languages/frameworks is always incredibly exciting and enjoyable</p>
                                    <p>I also contain conversational skills in both Python and Java</p>
                                </Box>
                            </Flip>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Reveal>
        </div>
    )
}

export default Skills
