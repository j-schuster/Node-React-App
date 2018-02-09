// TODO: loader/ spinner and redirect page or something

import React from 'react'
import { connect } from 'react-redux'
import { fetchJob } from '../actions/index'
import { Button, Container, Grid, Image, Icon, Label, Modal, TextArea, Message, Dimmer, Loader } from 'semantic-ui-react';
import { contactUser, saveJob } from '../actions/index';
import { Link } from 'react-router-dom';

class JobView extends React.Component {

	state={
		modalOpen: false,
		email: '',
		experience: '',
		motivation: '',
		messageSent: false,

	}

	 handleOpen = () => this.setState({ modalOpen: true })
   handleClose = () => this.setState({ modalOpen: false })

	componentDidMount(){
		const path = window.location.pathname
		const id = path.substr(path.lastIndexOf('/') + 1)

		this.props.getJob(id)
	}

	 handleChange = (event) => {
	  		this.setState({[event.target.name]: event.target.value})
	  	}

	 //function that submits the post request
	 submitJob = (e) => {
	 	e.preventDefault();

	 	 const contactInfo = {
	 	 	email: this.state.email,
	 	 	experience: this.state.experience,
	 	 	motivation: this.state.motivation,
			createdByEmail: this.props.jobs.job.createdUserEmail,
			createdByName: this.props.jobs.job.createdBy,
			candidateName: this.props.user.name

	 	 }
			this.props.contactJob(contactInfo);
			this.setState({ messageSent: true })
	 } 	

	 saveJobUser = () => {
		 const job = {
				company: this.props.jobs.job.company,
				title: this.props.jobs.job.title,
				id: this.props.jobs.job._id,
		 }
		
		 this.props.saveJob(job)
	 }

	 recentJob = (tStamp) => {
		 const date1 = Date.parse(tStamp)
		 const hours = Math.abs(date1 - Date.now())
		 const hour = (hours / (1000 * 60 * 60)).toFixed(1);

		 if(hour < 24) { 
			 return ( 	<Label as='a' color='orange' ribbon='right' size='large' style={{width: 80, marginLeft: 40}}>This is a brand new post!</Label> )
			} else{ 
				return null 
			}
	 }

	render(){
		
		if(this.props.jobs.job){
			const {title, description, skills, timeframe, createdBy, timestamp, createdUserImage, company, } = this.props.jobs.job
			return(
				  <div style={{height: '100vh', backgroundColor: '#F9FBFD', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				   <h1 style={{textAlign: 'center', color: '#7c7c7c', marginTop: 100, textTransform: 'uppercase'}}>Check out this opportunity at {company} ...</h1>
					  <div style={{width: '70%', backgroundColor: '#fff', height: 500,  display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)' }}>
						 
						  <Container style={{width: '90%'}}>
					 		  <Grid>
								  <Grid.Column width={5} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#7c7c7c', fontWeight: 100}}>
								    {createdUserImage ? <Image src={createdUserImage} alt='' size='medium' style={{height: 250, width: 250,boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)'}} circular /> : null}
								  	 <h4 style={{margin: 5}}>Created By:</h4>
								  	  <h2 style={{margin: 5}}>{this.props.jobs.job ? createdBy : null}</h2>
								  	  <p>On</p>
								 		    <h3 style={{margin: 5}}>{this.props.jobs.job ? new Date(timestamp).toString().substr(0,16) : null}</h3>
								 			  {this.props.user ? <div><Button style={{margin: 5, width: '100%'}} positive size='large' onClick={this.handleOpen}>Apply!</Button>
																						 <Button style={{margin: 5, width: '100%'}} primary size='large' onClick={this.saveJobUser}>Save for later</Button> </div>
																						 : 
																						<Link to="/signup"><Button positive>Sign up to Apply!</Button></Link>}	
							    	 	  	 </Grid.Column>

							        		 <Grid.Column width={11} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', color: '#7c7c7c'}}>
								    		  {this.recentJob(timestamp)}
								    		  <h1 style={{margin: 5}}>{this.props.jobs.job ? title : null}</h1>
								     	  <h2 style={{margin: 5}}><Icon name='at'/>{this.props.jobs.job ? company : null}</h2>						     	 
											<h3 style={{margin: 5}}>{this.props.jobs.job ? description : null}</h3>
							  		<h2 style={{margin: 5}}><Icon name='code'/> {this.props.jobs.job ? skills : null}</h2>
						  		<h2 style={{margin: 5}}><Icon name='time'/>{this.props.jobs.job ? timeframe : null}</h2>
					      </Grid.Column>
				 		  </Grid>							
						</Container>
					</div>

					<Modal open={this.state.modalOpen}
						           onClose={this.handleClose}
						           >
							    <Modal.Header>This is a great opportunity!</Modal.Header>
							    <Modal.Content>
							    	 <form className="ui form" onSubmit={this.submitJob} style={styles.modal}>
										    <div className="field">
										    <label>Why are you interested in this job?</label>
										     <TextArea placeholder="Is it the business? The tech?" 
										     					 style={{ minHeight: 100 }}
										     					 onChange={this.handleChange}
										     					 name="motivation"/>
										    </div>
										    			<div className="field">

										    		<label>Experience using the tectnology</label>
										    		<input type="text" 
										    					 placeholder="Have you used this tech before on a real website?"
										    			 		 onChange={this.handleChange}
										     					 name="experience"/>
										   				</div>
										  			 <div className="field">

										  		 <label>Where can you be contacted at?</label>
										   		 <input type="text"  
										   						placeholder="email"
										   						onChange={this.handleChange}
										     					name="email"/>
										  			 </div>																  			 
										 <Button positive className="ui button" type='submit' style={styles.submitBtn}>Submit</Button>
										</form>
							    </Modal.Content>
							  </Modal>
				</div>
		  )
		}else if(this.state.messageSent){
			return (
				<div style={{ height: '85vh', justifyContent: 'center', alignItems: 'center'}}>
					<Message
							success
							header='Your submittance was succesful!'
							content='Remember to communicate often and use your code for good!'
						/>
				</div>
				)
		}else {
			return (
			<Dimmer active inverted style={{ backgroundColor: 'transparent' }}>
				<Loader size='big'>Loading</Loader>
			</Dimmer>	
			)
		}
	}
}

const styles={
	modal: {
		display: 'flex',
		flexDirection: 'column',
	  justifyContent: 'center'
	},
	dropzone: {
		display: 'flex', 
	  alignSelf: 'center'
	},
	submitBtn: {margin: 40, 
		display: 'block', 
	  width: 200, 
	  alignSelf: 'center'
	},
	image: {
		height: 250,
	  width: 250,
    boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)'
	},
	card: {
		boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)'
	},
	container: {
		display: 'flex', 
		alignItems: 'center', 
		flexDirection: 'column'
	},
	header: {
		fontSize: 20, 
	  fontWeight: 100
},
	location: {
		marginTop: 30, 
		fontWeight: 100, 
		color: '#7c7c7c'
	},
	  member: {
	  	margin: 5, 
	  	fontWeight: 100, 
	  	color: '#7c7c7c'
	  },
	  description: {
	  	fontSize: 16
	  },
	  label: {
	  	fontWeight: 100, 
	  	marginTop: 100
	  },
	  contactBtn: {
	  	margin: 60, 
	  	fontSize: 22, 
	  	fontWeight: 100
	  },
	  cardDiv: {
	  	display: 'flex', 
	  	marginTop: 40,
	  },
	  outerContainer: {
	  	backgroundColor: '#F9FBFD', 
	  	display: 'flex'
	  }
    }


const mapDispatchToProps = dispatch => ({
  getJob: (id) => dispatch(fetchJob(id)),
	contactJob: (data) => dispatch(contactUser(data)),
	saveJob: (job) => dispatch(saveJob(job))
});

const mapStateToProps = ({ jobs, user }) => {
 
	return {
		jobs,
		user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobView)