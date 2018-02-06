import React from 'react'
import { connect } from 'react-redux'
import { fetchAllServices} from '../actions/index'
import { Container, Grid, Segment, Icon, Card, Image, Message, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './services.css'

class AllServices extends React.Component {

	state = {
		services: '',
		filteredServices: '',
	}

	componentDidMount(){
		this.props.fetchServices()
	}


	componentWillReceiveProps(props){
		setTimeout(function(){ this.setState({
			services: this.props.services.services.reverse(),
			filteredServices: this.props.services.services.reverse()
		})}.bind(this), 500);
	}

	searchType = (tagName) => {
		const services = [...this.state.services]
		const arrByTag = services.filter((service) => { 
			return service.tags.includes(tagName)
		})
		this.setState({ filteredServices: arrByTag })
			
	}

	render(){
		const services = this.state.filteredServices
		
		return(
			<div style={{ backgroundColor: '#F9FBFD', display: 'flex', minHeight: '100vh'}}>
				<Container style={{width: '90%', marginTop: 100}}>
				<h1 style={{ color: '#05243e', fontWeight: 100 }}>OUR DEVELOPERS</h1>
				<Message  compact
									floating
									content='Browse through talented developers that want to help you. Clicking on a card will take you their profile, where you can learn more about them and get in touch.'
								/>
					  <Grid>
							 <Grid.Column width={4} style={{display: 'flex', flexDirection: 'column', color: '#7c7c7c', fontWeight: 100}}>
							    <Segment.Group style={{marginTop: 15}}>
								    <Segment><h3>Refine your search</h3></Segment>
								    <Segment.Group>
								    	<Segment className='search' onClick={(e) => this.searchType(e.target.innerHTML)}>Designer</Segment>
											<Segment className='search' onClick={(e) => this.searchType(e.target.innerHTML)}>Frontend</Segment>
											<Segment className='search' onClick={(e) => this.searchType(e.target.innerHTML)}>Backend</Segment>
											<Segment className='search' onClick={(e) => this.searchType(e.target.innerHTML)}>Wordpress</Segment>
								    </Segment.Group>
								  </Segment.Group>
						    	 </Grid.Column>
						         <Grid.Column width={12} style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>

													{services ? services.map((service) => {
														return (
															
																 <Link to={`/user/${service.userId}`} key={service._id}><div style={{margin: 10}}>
																	 <Card style={{ boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)' }}>
																		 <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>

																		 <Image src={service.image} circular style={{ height: 200, width: 200, margin: 15}}/>
																		 </div>
																    
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
																    <Card.Content extra style={{ color: '#fff', backgroundColor: '#05243e ' , fontWeight: 100}}>
																 
																      <Icon name='hand rock' />
																        {service.lookingFor}
																     
																    </Card.Content>
																  </Card>
																</div></Link>
															
															)
														}) 
														: 
														<Dimmer active inverted style={{ backgroundColor: 'transparent' }}>
														<Loader size='big'>Loading</Loader>
													</Dimmer>	}
													
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
