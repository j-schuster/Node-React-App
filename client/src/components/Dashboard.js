import React from 'react';
import { connect } from 'react-redux';
import { Image,  Button, Modal, TextArea, Message, Icon, Card, Grid, Table } from 'semantic-ui-react';
import { updateUser } from '../actions/index';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { fetchAllJobs, deleteUserCreatedJob, deleteSavedJob, fetchAllServices, deleteService } from '../actions/index';

class Dashboard extends React.Component {

	state = {
	    about: '',
	    city: '',
	    country: '',
	    interests: '',
	    projects: '',
			image: '',
			stack: '',
	    imageDone: false,
	    skills: '',
			modalOpen: false,
			tags: [],
	  }

	  handleOpen = () => this.setState({ modalOpen: true })
  	handleClose = () => this.setState({ modalOpen: false })

	  handleChange = (event) => {
	  		this.setState({[event.target.name]: event.target.value})
			}
			
		componentDidMount(){
			this.props.getJobs()
			this.props.fetchAllServices()
		}	

	  submitEditProfile = (e) => {
      	e.preventDefault()

	      const profile = {
	        about: this.state.about,
	        city: this.state.city,
	        country: this.state.country,
	        interests: this.state.interests,
	        projects: this.state.projects,
	        skills: this.state.skills,
					image: this.state.image,
					tags: this.state.tags,
					stack: this.state.stack,
	      }
 
   		 this.props.updateUserInfo(profile)
   		 this.setState({ modalOpen: false})
     	 
    }

    uploadFile = (files) => { 	
       const uploadPreset = 'gdq0xnzx';
	    
		   const formData = new FormData();
		    formData.append("file", files[0]);
		    formData.append("tags", `webdev, profile, img`);
		    formData.append("upload_preset", uploadPreset);
		    formData.append("api_key", "659887849485722"); 
		    formData.append("timestamp", (Date.now() / 1000) | 0);
		    
		    return axios.post("https://api.cloudinary.com/v1_1/johann/image/upload", formData, {
		      headers: { "X-Requested-With": "XMLHttpRequest" },
		    }).then(response => {
		      const data = response.data;
		      const fileURL = data.secure_url;
		      
		      this.setState({ imageDone: true, image: fileURL })

		   })
		};
		
		removeCreatedJob(id){
			this.props.deleteUserCreatedJob(id)
		}

		removeSavedJob(id){		
			const userId = this.props.user._id
			const jobId = id
			this.props.deleteSavedJob(userId, jobId)
		}

		removeService(id){
			this.props.deleteService(id)
		}

		selectTag = (e) => {
			e.preventDefault()
		
			this.setState({
				tags: [...this.state.tags, e.target.innerHTML]
			})
		}
 

	render(){

		if(this.props.user){
			const { city, country, about, interests, timestamp, image, skills, savedJobs, email, _id } = this.props.user
			return (	
				<div style={styles.outerContainer}>
					<Grid stackable container>
						<Grid.Row>

							<Grid.Column width={4}>
								{image ? <img src={image} alt='' style={styles.image} /> : <Image src='http://www.freeiconspng.com/uploads/profile-icon-9.png' alt='' style={styles.image}  />}
								
								</Grid.Column>
							<Grid.Column width={12} style={{ padding: 20 }}>
								<h2 style={{ fontWeight: 100, color: '#333', margin: 0 }}>Hello and Welcome back {this.props.user ? this.props.user.name : 'person'}!</h2>
								<Message
									floating
									content='This your dashnoard. You can monitor your activity from here. Thanks again for using our services and please let us know if you have any questions!'
								/>
							</Grid.Column>

							<Grid.Column width={7}>
							
							<Card style={styles.largeCard1}>
								<Card.Content>
									<Card.Header style={styles.header} textAlign='center'>Your Info</Card.Header>
									
									<h4 style={styles.location}><Icon name='globe'/>Location: {city ? city + ' ,' + country : 'planet earth, the universe'}</h4>	
			 					  <h4 style={styles.member}><Icon name='user'/>Member since: {new Date(timestamp).toString().substr(0,16)} </h4>			    
									<Card.Description style={styles.description}><Icon name="dot circle outline"/> {about ? about : 'professional pea shooter'}</Card.Description>
									<Card.Description style={styles.description}><Icon name='tag'/> {interests ? interests : 'politics, simulation theory'}</Card.Description>
								  <Card.Description style={styles.description}><Icon name="heart outline"/> {skills ? skills : null}</Card.Description>
								</Card.Content>
						  </Card>

							</Grid.Column>

							<Grid.Column width={2} style={{ padding: 10 }}>
								<Card style={ styles.infoCard3 }>
									<Card.Content>
											<Card.Header style={{color: '#fff', fontSize: 20, fontWeight: 100}} textAlign='center'>Views</Card.Header>
											<h1 style={{ fontSize: 55, textAlign: 'center', fontWeight: 100, color: '#fff' }}>0</h1>
										</Card.Content>
									</Card>		
								</Grid.Column>

							<Grid.Column width={7}>
								
							<Card style={styles.largeCard2}>
								<Card.Content>
									<Card.Header style={styles.header} textAlign='center'>Saved Items</Card.Header>
									
								</Card.Content>
						  </Card>

							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={8} style={{ padding: 10 }}>

									
					<Table celled color={'teal'} selectable>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Saved Jobs</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
								{ savedJobs && savedJobs.length > 0 ? 				
												savedJobs.map(job => {
													return (	
														<Table.Row key={job.title}>	
														<Table.Cell>{job.title}<Button size="tiny" floated='right' onClick={() => this.removeSavedJob(job.id)}>Delete</Button></Table.Cell>
														</Table.Row>			
													)
												})							
											: 
									null}
						</Table.Body>
					</Table>

							</Grid.Column>
							<Grid.Column width={8} style={{ padding: 10 }}>

							<Table celled color={'blue'} selectable>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Created Jobs</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
								{this.props.jobs.jobs ? 						
											this.props.jobs.jobs.map((job) => (
												job.createdUserEmail === email ? 
												<Table.Row key={job.title}>
													<Table.Cell>{job.title}<Button size="tiny" floated='right' onClick={() => this.removeCreatedJob(job._id)}>Delete</Button></Table.Cell> 
												</Table.Row>
												: null
											))							
										: null
									}
								</Table.Body>
							</Table>							
							</Grid.Column>
						</Grid.Row>

							<Grid.Column width={8} style={{ padding: 10 }}>
							<Table celled color={'purple'} selectable color={'teal'}>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Created Services</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
										{this.props.services.services && this.props.services.services.length > 0 ? 
											this.props.services.services.map((service) => (
												service.userId === _id ? 
												<Table.Row key={service._id}>
													<Table.Cell>{service.userName} <Button onClick={() => this.removeService(service._id)} floated='right' size='tiny'>Delete</Button></Table.Cell> 
												</Table.Row>	 
												: null		 
											))									
										: 
									null
								} 
								</Table.Body>
							</Table>
							</Grid.Column>

					</Grid>


					<Button size="small" positive onClick={this.handleOpen} style={styles.contactBtn}>Edit Profile</Button>

					<Modal open={this.state.modalOpen}
						           onClose={this.handleClose}
						           >
							    <Modal.Header>Your Profile</Modal.Header>
							    <Modal.Content>
							    	 <form className="ui form" onSubmit={this.submitEditProfile} style={styles.modal}>
										    <div className="field">
										    <label>About me</label>
										     <TextArea placeholder="Tell us a bit about yourself" 
										     					 style={{ minHeight: 100 }}
										     					 onChange={this.handleChange}
										     					 name="about"/>
										    </div>
										    			<div className="field">

										    		<label>City</label>
										    		<input type="text" 
										    					 placeholder="Where do you live?"
										    			 		 onChange={this.handleChange}
										     					 name="city"/>
										   				</div>
										  			 <div className="field">

										  		 <label>Country</label>
										   		 <input type="text"  
										   						placeholder="What country?"
										   						onChange={this.handleChange}
										     					name="country"/>
										  			 </div>											
										  			 <div className="field">

										  		 <label>Are you a developer or business?</label>
										  		 <input type="text" 
										    					placeholder="Are you a developer or business owner?"
										      		    onChange={this.handleChange}
										     					name="interests"/>
										  			 </div>
										  			 		 <div className="field">

										  		 <label>What are some of your interests?</label>
										   		 <input type="text"  
										   						placeholder="Hiking, AI, pets?"
										   						onChange={this.handleChange}
										     					name="skills"/>
										  			 </div>	
															<h5>What job types you would be most interested in</h5>
														 <div style={{height: 50, width: 400 }}>
																<Button.Group>
																	<Button onClick={this.selectTag}>Developer</Button>
																	<Button onClick={this.selectTag}>Designer</Button>
																	<Button onClick={this.selectTag}>Frontend</Button>
																	<Button onClick={this.selectTag}>Backend</Button>
																	<Button onClick={this.selectTag}>Wordpress</Button>
																</Button.Group>
															</div>
														<div className="field">
										    		<label>What are some technologies you use?</label>
										    		<input type="text" 
										    					 placeholder="React, Node, Vue?"
										    			 		 onChange={this.handleChange}
										     					 name="stack"/>
										   				</div>

										  			 <label style={{ margin: 10 }}>Profile Picture</label>
										  			 <div style={styles.dropzone}>
										  			 <Dropzone onDrop={this.uploadFile}><p style={{textAlign: 'center'}}>Click or drag image to update your profile pic</p></Dropzone>
										  			 {this.state.image ? <img src={this.state.image} alt=' profile' style={{height: 200, width: 200, marginLeft: 20}}/> : null}
														</div>
										 <Button positive className="ui button" type='submit' style={styles.submitBtn}>Submit</Button>
										</form>
							    </Modal.Content>
							  </Modal>

								
     				 </div>  
						)
					}else{
							return (
							    <Message warning>
		    						<Message.Header>You must login to view your profile!</Message.Header>
		    						<p>Click 'Login' on the top right hand side of the screen</p>
		  						</Message>
								)
							}
						}
					}

function mapStateToProps({ user, jobs, services }){
    return {
				user,
				jobs,
				services
    }
}

const mapDispatchToProps = dispatch => ({
	getJobs: () => dispatch(fetchAllJobs()),
	updateUserInfo: (info) => dispatch(updateUser(info)),
	deleteUserCreatedJob: (id) => dispatch(deleteUserCreatedJob(id)),
	deleteSavedJob: (userId, jobId) => dispatch(deleteSavedJob(userId, jobId)),
	fetchAllServices: () => dispatch(fetchAllServices()),
	deleteService: (id) => dispatch(deleteService(id))
});

const styles={
	modal: {
		display: 'flex',
		flexDirection: 'column',
	  justifyContent: 'center'
	},
	dropzone: {
		display: 'flex', 
		alignSelf: 'flex-start',
	},
	submitBtn: {margin: 40, 
		display: 'block', 
	  width: 200, 
	  alignSelf: 'center'
	},
	image: {
		//boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)'
		margin: 20,
		height: 200,
		width: 200,
		borderRadius: 100
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
		fontWeight: 100,

		marginBottom: 15,
},
	location: {
		marginTop: 30, 
		fontWeight: 100, 


	},
	  member: {
			fontWeight: 100, 
	  },
	  description: {
			fontSize: 16,
			marginTop: 18,
		
	  },
	  label: {
	  	fontWeight: 100, 
	  	marginTop: 100
	  },
	  contactBtn: {
	  	alignSelf: 'center', 
	  	fontSize: 22, 
			fontWeight: 100,
			margin: 50,
	  },
	  cardDiv: {
	  	display: 'flex', 
	  	marginTop: 40,
	  },
	  outerContainer: {
	  	 backgroundColor: '#F9FBFD', 
			 display: 'flex',
			 flex: 1,
			 flexDirection: 'column',
			 padding: 10,
			 marginTop: 50,
		},
		largeCard1: {
				display: 'flex',
				flex: 1,
				width: '100%',
				height: 250,
				boxShadow: '9px 11px 8px -6px rgba(199,199,199,0.1)',
				
			},
			largeCard2: {
				display: 'flex',
				flex: 1,
				width: '100%',
				height: 250,
				boxShadow: '9px 11px 8px -6px rgba(199,199,199,0.1)',
			
			},
			infoCard1: {
				height: 200,
				width: '100%',
				boxShadow: '9px 11px 8px -6px rgba(199,199,199,0.1)',
			
			},
			infoCard2: {
				height: 200,
				width: '100%',
				boxShadow: '9px 11px 8px -6px rgba(199,199,199,0.1)',
				
			},
			infoCard3: {
				height: 200,
				width: '100%',
				boxShadow: '9px 11px 8px -6px rgba(199,199,199,0.1)',
				backgroundColor: '#80CBC4'
			}
    }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
//list of countries

/* <Container style={styles.container}>
						<Label pointing='below' size='massive' color='blue' style={styles.label}>Hey! {this.props.user ? this.props.user.name : 'person'}</Label>
							{image ? <Image src={image} alt='' size='medium' style={styles.image} circular /> : <Image src='http://www.freeiconspng.com/uploads/profile-icon-9.png' alt='' style={styles.image} size='medium' circular />}
			  				<h2 style={styles.location}><Icon name='globe'/>Location: {city ? city + ' ,' + country : 'planet earth, the universe'}</h2>	
			 					 <h3 style={styles.member}><Icon name='user'/>Member since: {new Date(timestamp).toString().substr(0,16)} </h3>			    
								  
								   <div style={styles.cardDiv}>
			  	 						<Card.Group>
						  					<Card style={styles.card}>
					     					 	<Card.Content>
					       					  <Card.Header style={styles.header} textAlign='center'>About Me</Card.Header>
					       					  <Card.Meta textAlign='center'>I'm a very intersting person</Card.Meta>
					      				    <Card.Description style={styles.description} textAlign='center'>{about ? about : 'professional pea shooter'}</Card.Description>
					      				  </Card.Content>			    
					   				 		  </Card>
												<Card style={styles.card}>
										      <Card.Content>
											      <Card.Header style={styles.header} textAlign='center'>My interests include</Card.Header>
											      <Card.Meta textAlign='center'>Besides kicking ass</Card.Meta>
											      <Card.Description style={styles.description} textAlign='center'>{interests ? interests : 'politics, simulation theory'}</Card.Description>
											    </Card.Content>
											  </Card>
										    <Card style={styles.card}>
									     		<Card.Content>
										        <Card.Header style={styles.header} textAlign='center'>Current Projects</Card.Header>
										        <Card.Meta textAlign='center'>Some things I'm working on</Card.Meta>
										        <Card.Description style={styles.description} textAlign='center'>{projects ? projects : "working on it"}</Card.Description>
										      </Card.Content>
						   					</Card>
				  						</Card.Group> 													   				 
			  						</div>	
			  						
			  						   	<Card style={styles.card}>
									     		<Card.Content>
										        <Card.Header style={styles.header} textAlign='center'>My Skills</Card.Header>
										        <Card.Meta textAlign='center'>Technologies I build with</Card.Meta>
										        <Card.Description style={styles.description} textAlign='center'>{skills ? skills : null}</Card.Description>
										      </Card.Content>
						   					</Card>
			   					
			   					<Button positive onClick={this.handleOpen} style={styles.contactBtn}>Edit Profile</Button>
								
								{savedJobs && savedJobs.length > 0 ? 
								<div>
									<h1>You have some saved jobs</h1>
									{savedJobs.map(job => {
									return (	
										<li key={job.title}>{job.title}<Icon name="x" onClick={() => this.removeSavedJob(job.id)}/></li>			
									)
								})}
								</div> : null}

								{this.props.jobs.jobs ? 
								<div>
									{this.props.jobs.jobs.map((job) => (
										<h1>Jobs that you created</h1>  								,
										job.createdUserEmail === email ? <li key={job.title}>{job.title} <Icon onClick={() => this.removeCreatedJob(job._id)} name="x"/></li> : null
									))}
								</div> : 'NO'}

								{this.props.services.services && this.props.services.services.length > 0 ? <div>
									<h1>Services you created</h1>
									{this.props.services.services.map((service) => (
										service.userId === _id ? <li key={service.userName}>{service.userName} <Icon onClick={() => this.removeService(service._id)} name="x"/></li> : null
									))}
								</div> : null} 
				        
				        <Modal open={this.state.modalOpen}
						           onClose={this.handleClose}
						           >
							    <Modal.Header>Your Profile</Modal.Header>
							    <Modal.Content>
							    	 <form className="ui form" onSubmit={this.submitEditProfile} style={styles.modal}>
										    <div className="field">
										    <label>About me</label>
										     <TextArea placeholder="C'mon now, don't be shy..." 
										     					 style={{ minHeight: 100 }}
										     					 onChange={this.handleChange}
										     					 name="about"/>
										    </div>
										    			<div className="field">

										    		<label>City</label>
										    		<input type="text" 
										    					 placeholder="Where do you live?"
										    			 		 onChange={this.handleChange}
										     					 name="city"/>
										   				</div>
										  			 <div className="field">

										  		 <label>Country</label>
										   		 <input type="text"  
										   						placeholder="Where the heck is that?"
										   						onChange={this.handleChange}
										     					name="country"/>
										  			 </div>											
										  			 <div className="field">

										  		 <label>Interests</label>
										  		 <input type="text" 
										    					placeholder="Are you a developer or business owner?"
										      		    onChange={this.handleChange}
										     					name="interests"/>
										  			 </div>
										  			 		 <div className="field">

										  		 <label>Skills</label>
										   		 <input type="text"  
										   						placeholder="Whats your stack?"
										   						onChange={this.handleChange}
										     					name="skills"/>
										  			 </div>	
										  			 <label>Profile Picture</label>
										  			 <div style={styles.dropzone}>
										  			 <Dropzone onDrop={this.uploadFile}><p style={{textAlign: 'center'}}>Click or drag image to update your profile pic</p></Dropzone>
										  			 {this.state.image ? <img src={this.state.image} alt=' profile' style={{height: 200, width: 200, marginLeft: 20}}/> : null}
														</div>
										 <Button positive className="ui button" type='submit' style={styles.submitBtn}>Submit</Button>
										</form>
							    </Modal.Content>
							  </Modal>
							 </Container> */
							 
						// 	 <Card style={styles.infoCard1}>
						// 	 <Card.Content>
						// 		 <Card.Header style={styles.header} textAlign='center'>Saved Jobs</Card.Header>
								 
						// 		 { savedJobs && savedJobs.length > 0 ? 				
						// 					 savedJobs.map(job => {
						// 						 return (	
						// 							 <li style={{ listStyle: 'none', margin: 5, fontSize: 18, color: '#333'}} key={job.title}>{job.title}<Icon style={{ float: 'right' }} name="x" onClick={() => this.removeSavedJob(job.id)}/></li>			
						// 						 )
						// 					 })							
						// 				 : 
						// 		 null}
						// 	 </Card.Content>
						//  </Card>
							 

					// 	<Card style={styles.infoCard2}>
					// 	<Card.Content>
					// 		<Card.Header style={styles.header} textAlign='center'>Jobs You Created</Card.Header>
							
					// 		{this.props.jobs.jobs ? 						
					// 				this.props.jobs.jobs.map((job) => (
					// 					job.createdUserEmail === email ? <li key={job._id} style={{ listStyle: 'none', margin: 5, fontSize: 18, color: '#333'}} >{job.title} <Icon style={{ float: 'right' }} onClick={() => this.removeCreatedJob(job._id)} name="x"/></li> : null
					// 				))							
					// 			: null
					// 		}
					// 	</Card.Content>
					// </Card>

				// 	<Card style={ styles.infoCard3 }>
				// 	<Card.Content>
				// 		<Card.Header style={styles.header} textAlign='center'>Services You Created</Card.Header>
						
				// 			{this.props.services.services && this.props.services.services.length > 0 ? 
				// 					this.props.services.services.map((service) => (
				// 						service.userId === _id ? <li key={service.userId} style={{ listStyle: 'none', margin: 5, fontSize: 18, color: '#333' }}>{service.userName} <Icon style={{ float: 'right' }} onClick={() => this.removeService(service._id)} name="x"/></li> : null
				// 					))									
				// 				: 
				// 			null
				// 		} 
				// 	</Card.Content>
				// </Card>

				// <Grid.Column width={2} style={{ padding: 10 }}>

				// <Card style={ styles.infoCard3 }>
				// 	<Card.Content>
				// 		<Card.Header style={styles.header} textAlign='center'>Views</Card.Header>
				// 	</Card.Content>
				// </Card>
					
				// </Grid.Column>