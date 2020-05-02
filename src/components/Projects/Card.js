import React from 'react'
import styled from 'styled-components'
import { Header, Grid, Divider } from 'semantic-ui-react'

const ProjectCard = styled.div`
    background: #b8dbff;
    height: 80vh;
    width: 95%;
    margin: 5px;
    padding: 5px;

    font-size: 2vh;
`

const Card = ({ data }) => {
    const { image, appName, desc, features, challanges, techUsed, herokuLink, githubLink, note } = data
    
    return (
        <ProjectCard className="ui center aligned container" style={{ width: '95%' }} >
            <Grid columns={ 1 }>
                <Grid.Column>
                    <h2 style={{ borderBottom: '3px solid black', textAlign: 'center' }} >{ appName }</h2>

                    { image !== undefined && <img
                        src={ image }
                        alt={ image }
                        style={{ float: 'left', width: '33%', marginTop: '1vh', marginLeft: '5px' }}
                    /> }

                    <React.Fragment>
                        <Header as='h3'>Description</Header>
                        <p style={{ margin: '2vh' }}>{ desc }</p>
                    </React.Fragment>

                    <Divider />
                </Grid.Column>
            </Grid>

            <Grid columns={ 3 } divided style={{ paddingTop: '2vh', paddingLeft: '5vh' }}>
                <Grid.Column width={ 4 } >
                    <Header as='h3'>Features</Header>
                    <p>{ features.map(f => {
                        return (
                            <div style={{ float: 'left' }}>
                                <i className="small icon tag"></i>
                                { f }
                            </div>
                        )
                    })}</p>
                </Grid.Column>

                <Grid.Column width={ 8 }>
                    <Header as='h3'>Challanges</Header>
                    <p>{ challanges }</p>
                </Grid.Column>

                <Grid.Column width={ 3 }>
                    <Header as='h3'>Tech Used</Header>
                    <p style={{ margin: '3px' }} >{ techUsed.map(t => {
                        return (
                            <div style={{ float: 'center' }}>
                                <i className="small icon tag"></i>
                                { t }
                            </div>
                        )
                    })}</p>            
                </Grid.Column>
            </Grid>
            <Divider />

            { note !== undefined && <h3>See Goals-www or Goals-GraphQL above for code</h3> }
            { herokuLink !== undefined && <h3><a href={ herokuLink }>{ herokuLink }</a></h3> }
            { githubLink !== undefined && <h3><a href={ githubLink }>{ githubLink }</a></h3> }
        </ProjectCard>
    )
}

export default Card
