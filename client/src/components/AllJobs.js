import React from 'react'
import { connect } from 'react-redux'
import { fetchAllJobs } from '../actions/index'
import { Button, Container, Grid, Segment, Icon, Search } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class AllJobs extends React.Component {

	state = {
		jobs: '',
	}

	componentDidMount(){
		this.props.getJobs()
	}

	componentWillReceiveProps(props){
		setTimeout(function(){ this.setState({jobs: props.jobs.jobs.reverse()})}.bind(this), 500);
	}

	searchLatest = () => {
		const jobs = this.state.jobs
		const arrByTime = jobs.sort((a, b) => { 
			return Date.parse(b.timestamp) - Date.parse(a.timestamp)
		})
		this.setState({ jobs: arrByTime })	
	}

	searchOldest = () => {
		const jobs = this.state.jobs
		const arrByTime = jobs.sort((a, b) => { 
			return Date.parse(a.timestamp) - Date.parse(b.timestamp)
		})
		this.setState({ jobs: arrByTime })	
	}

	render(){
		const jobs = this.state.jobs
	  
		return(
			<div style={{ backgroundColor: '#F9FBFD', display: 'flex', felxDirection: 'column', justifyContent: 'center'}}>
				
				<Container style={{width: '90%', margin: 50}}>
				<Search defaultValue='search' size='large'/>
					 		  <Grid>
								  <Grid.Column width={4} style={{display: 'flex', flexDirection: 'column', color: '#7c7c7c', fontWeight: 100}}>
								    <Segment.Group style={{marginTop: 15}}>
									    <Segment><h3>Refine your search</h3></Segment>
									    <Segment.Group>
												 <Segment onClick={this.searchLatest}>Latest Jobs</Segment>
												 <Segment onClick={this.searchOldest}>Oldest Jobs</Segment>
									      <Segment>Design Jobs</Segment>
									      <Segment>Front-end Jobs</Segment>
									      <Segment>Backend Jobs</Segment>
									    </Segment.Group>
									  </Segment.Group>
							    	 </Grid.Column>
							         <Grid.Column width={12}>
								    		 <ul style={{listStyle: 'none', width: '100%'}}>
														{jobs ? jobs.map((job) => {
															return (
																<li key={job._id}>
																	<div style={{padding: 20, marginBottom: 20, backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)', fontWeight: 100, color: '#7c7c7c', borderRadius: 5}}>		
																		<h2 style={{margin: 8}}>{job.title}</h2>
																		<h3 style={{margin: 8}}><Icon name='building'/>{job.company}</h3>
																		<h3 style={{margin: 8}}><Icon name='tasks'/>{job.skills}</h3>
																		<h3 style={{margin: 8}}><Icon name='time'/>{new Date(job.timestamp).toString().substr(0,16)}</h3>
																		<div style={{display: 'flex'}}>
																		<Link to={`/job/${job._id}`}><Button primary style={{width: 120}}>View More</Button></Link>
																		<Button secondary style={{width: 120}}>Save Job</Button>
																		</div>
																	</div>	
																</li>
																)
															}) : 'wiating'}
															</ul>
										      </Grid.Column>
									 		  </Grid>							
											</Container>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	getJobs: () => dispatch(fetchAllJobs())
})

const mapStateToProps = ({ jobs }) => {
	return {
		jobs
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs)

/*
<Container style={{width: '90%'}}>
					 		  <Grid>
								  <Grid.Column width={5} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#7c7c7c', fontWeight: 100}}>
								    <h1>Stuff</h1>
							    	 </Grid.Column>
							         <Grid.Column width={11}>
								    		 <ul style={{listStyle: 'none', width: '50%'}}>
														{jobs.jobs ? jobs.jobs.map((job) => {
															return (
																<li key={job._id}>
																	<div style={{padding: 20, backgroundColor: '#fff', margin: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)'}}>		
																		<h3>{job.title}</h3>
																		<h3>{job.company}</h3>
																		<h3>{job.skills}</h3>
																		<h3>{job.timestamp}</h3>
																		<Button positive>View More</Button>
																	</div>	
																</li>
																)
															}) : 'wiating'}
															</ul>
										      </Grid.Column>
									 		  </Grid>							
											</Container>
*/
