import React from 'react'
import { connect } from 'react-redux'
import { fetchAllServices} from '../actions/index'
import { Button, Container, Grid, Segment, Icon, Search, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class AllServices extends React.Component {

	componentDidMount(){
		this.props.fetchServices()
	}

	render(){
		const services = this.props.services.services 
		
		return(
			<div style={{ backgroundColor: '#F9FBFD', display: 'flex'}}>
				
				<Container style={{width: '90%', margin: 50}}>
					<Search defaultValue='search' size='large'/>
					  <Grid>
							 <Grid.Column width={4} style={{display: 'flex', flexDirection: 'column', color: '#7c7c7c', fontWeight: 100}}>
							    <Segment.Group style={{marginTop: 15}}>
								    <Segment><h3>Refine your search</h3></Segment>
								    <Segment.Group>
								      <Segment>Designers</Segment>
								      <Segment>Front-end Devs</Segment>
								      <Segment>Backend Devs</Segment>
								    </Segment.Group>
								  </Segment.Group>
						    	 </Grid.Column>
						         <Grid.Column width={12} style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
							    		 
													{services ? services.map((service) => {

														return (
															
																 <Link to={`/user/${service.userId}`} key={service._id}><div style={{margin: 10}}>
																	 <Card>
																    <Image src={service.image} />
																    <Card.Content>
																      <Card.Header>
																        {service.userName}
																      </Card.Header>
																      <Card.Meta>
																        <span className='date'>
																          Active since: {new Date(service.timestamp).toString().substr(0,16)}
																        </span>
																      </Card.Meta>
																      <Card.Description>
																        {service.about}
																      </Card.Description>
																    </Card.Content>
																    <Card.Content extra>
																 
																      <Icon name='hand rock' />
																        {service.skills}
																     
																    </Card.Content>
																  </Card>
																</div></Link>
															
															)
														}) : 'waiting'}
													
									      </Grid.Column>
								 		  </Grid>							
										</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchServices: () => dispatch(fetchAllServices())
})

const mapStateToProps = ({ services }) => {
	return {
		services
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)
