import React from 'react'
import styled from 'styled-components'
import { Header, Grid, Divider, Button } from 'semantic-ui-react'

import useWindowSize from '../../hooks/useWindowSize'

const ProjectCard = styled.div`
    background: #b8dbff;
    margin: 5px;
    padding: 5px;
    font-size: 2vh;
    border-radius: 5px;
    border: 1px solid black;
`

const Card = ({ data }) => {
    const { image, appName, desc, features, challenges, techUsed, herokuLink, githubLink, note } = data
    const [ height ] = useWindowSize()

    // this is for a semantic-ui component or I would make this a styled component
    const buttonStyle = {
        padding: 'auto',
        margin: '20px',
        display: 'inline-block'
    }
    
    return (
        <ProjectCard className="ui center aligned container" style={{ width: '95%' }} >
            <Grid columns={ 1 }>
                <Grid.Column>
                    <h2 style={{ borderBottom: '3px solid black', textAlign: 'center' }} >{ appName }</h2>

                    { image !== undefined && <img
                        src={ image }
                        alt={ image }
                        style={{ float: 'left', width: '33%', marginTop: '1vh', marginLeft: '5px', border: '5px solid black', margin: '20px' }}
                    /> }

                    <React.Fragment>
                        <Header as='h3'>Description</Header>
                        <p style={{ margin: '2vh' }}>{ desc }</p>
                    </React.Fragment>

                    <Divider />
                </Grid.Column>
            </Grid>

            <Grid columns={ height > 800 ? 3 : 1 } >
                <Grid.Column>
                    <Header as='h3'>Features</Header>
                    { features.map(f => {
                        return (
                            <div key={ f } >
                                <i className="small icon tag"></i>
                                { f }
                            </div>
                        )
                    })}
                </Grid.Column>

                <Grid.Column>
                    <Header as='h3'>Challenges</Header>
                    <p>{ challenges }</p>
                </Grid.Column>

                <Grid.Column>
                    <Header as='h3'>Tech Used</Header>
                    { techUsed.map(t => {
                        return (
                            <div key={ t } style={{ float: 'center' }}>
                                <i className="small icon tag"></i>
                                { t }
                            </div>
                        )
                    })}         
                </Grid.Column>
            </Grid>

            <Divider />

            { note !== undefined && <h3>See Goals-www or Goals-GraphQL above for code</h3> }
            { herokuLink !== undefined && <a href={ herokuLink }><Button primary style={ buttonStyle } >View App in Browser</Button></a> }
            { githubLink !== undefined && <a href={ githubLink }><Button primary style={ buttonStyle } >View Code on Github</Button></a> }
        </ProjectCard>
    )
}

export default Card
