import React from 'react';
import { connect } from 'react-redux';
import { fetchAllJobs } from '../actions/index';
import { Button, Container, Grid, Segment, Icon, Message, Dimmer, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { saveJob } from '../actions/index';


class AllJobs extends React.Component {

	state = {
		jobs: '',
		search: '',
	}

	componentDidMount(){
		this.props.getJobs()
	}

	componentWillReceiveProps(props){
		setTimeout(function(){ this.setState({
			jobs: props.jobs.jobs,
			filteredJobs: props.jobs.jobs
		})}.bind(this), 500);
	}

	componentWillUnmount(){
		this.setState({ jobs: '', filteredJobs: '' })
	}

	searchLatest = () => {
		const jobs = this.state.jobs
		const arrByTime = jobs.sort((a, b) => { 
			return Date.parse(b.timestamp) - Date.parse(a.timestamp)
		})
		this.setState({ filteredJobs: arrByTime })	
	}

	searchOldest = () => {
		const jobs = this.state.jobs
		const arrByTime = jobs.sort((a, b) => { 
			return Date.parse(a.timestamp) - Date.parse(b.timestamp)
		})
		
		this.setState({ filteredJobs: arrByTime })	
	}

	searchType = (tagName) => {
		const jobs = [...this.state.jobs]
		const arrByTag = jobs.filter((jobies) => { 
			return jobies.tags.includes(tagName)
		})
		this.setState({ filteredJobs: arrByTag })	
	}

	// searchFunc = (e) => {
	// 	//console.log(e.target.value)
	// 	const jobs = [...this.state.jobs]
	// 	const arrByTag = jobs.filter((jobies) => { 
	// 		return jobies.tags.includes(e.target.value)
	// 	})
	// 	this.setState({ filteredJobs: arrByTag })	
	// }

	saveJobUser = (company, title, id) => {
		const job = {
			 company,
			 title,
			 id,
		}
		
		this.props.saveJob(job)
	}

	render(){
		const jobs = this.state.filteredJobs
	  console.log(this.props.jobs)
		return(
			<div style={{ backgroundColor: '#F9FBFD', display: 'flex', felxDirection: 'column', justifyContent: 'center', minHeight: '100vh'}}>
				
				<Container style={{width: '90%', marginTop: 100}}>
				<h1 style={{ color: '#05243e', fontWeight: 100 }}>OUR JOB OPPORTUNITIES</h1>
				<Message  compact
									floating
									content='Browse through our contribution opportunities! Clicking on a card will allow you to learn more and apply.'
								/>

					<Grid>
						<Grid.Column width={4} style={{display: 'flex', flexDirection: 'column', color: '#7c7c7c', fontWeight: 100}}>
							<Segment.Group style={{marginTop: 15}}>
								<Segment><h3>Refine your search</h3></Segment>
								<Segment.Group>
										<Segment onClick={this.searchLatest}>Latest</Segment>
										<Segment onClick={this.searchOldest}>Oldest</Segment>
									<Segment onClick={(e) => this.searchType(e.target.innerHTML)}>Designer</Segment>
									<Segment onClick={(e) => this.searchType(e.target.innerHTML)}>Frontend</Segment>
									<Segment onClick={(e) => this.searchType(e.target.innerHTML)}>Backend</Segment>
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
															<h3 style={{margin: 8}}><Icon name='building'/>Company: {job.company}</h3>
															<h3 style={{margin: 8}}><Icon name='tasks'/>Skills: {job.skills}</h3>
															<h3 style={{margin: 8}}><Icon name='time'/>Created: {new Date(job.timestamp).toString().substr(0,16)}</h3>
															<div style={{display: 'flex'}}>
															<Link to={`/job/${job._id}`}><Button primary style={{width: 120}}>View More</Button></Link>
														{this.props.user ? 	<Button secondary style={{width: 120}} onClick={() => this.saveJobUser(job.company, job.title, job._id)}>Save Job</Button> : <Link to="/signup"><Button positive>Sign up to Apply!</Button></Link>}
															</div>
														</div>	
													</li>
													)
												}) 
												: 						
												<Dimmer active inverted style={{ backgroundColor: 'transparent' }}>
													<Loader size='big'>Loading</Loader>
												</Dimmer>		
										  	}
												</ul>
										</Grid.Column>
									</Grid>							
								</Container>
							</div>
						)
					}
				}

const mapDispatchToProps = dispatch => ({
	getJobs: () => dispatch(fetchAllJobs()),
	saveJob: (job) => dispatch(saveJob(job))
})

const mapStateToProps = ({ jobs, user }) => {
	return {
		jobs,
		user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs)

/*
	<Search defaultValue='search' size='large'  onSearchChange={(e) => this.searchFunc(e)}/>

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
