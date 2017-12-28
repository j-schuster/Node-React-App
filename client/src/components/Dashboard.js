import React from 'react';
import { connect } from 'react-redux';
import { Image,  Button, Modal, TextArea, Message, Container, Label, Icon, Card } from 'semantic-ui-react';
import { updateUser } from '../actions/index';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class Dashboard extends React.Component {

	state = {
	    about: '',
	    city: '',
	    country: '',
	    interests: '',
	    projects: '',
	    image: '',
	    imageDone: false,
	    modalOpen: false
	  }

	  handleOpen = () => this.setState({ modalOpen: true })
  	handleClose = () => this.setState({ modalOpen: false })

	  handleChange = (event) => {
	  		this.setState({[event.target.name]: event.target.value})
	  	}

	  submitEditProfile = (e) => {
      	e.preventDefault()

	      const profile = {
	        about: this.state.about,
	        city: this.state.city,
	        country: this.state.country,
	        interests: this.state.interests,
	        projects: this.state.projects,
	        image: this.state.image
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

 

	render(){
		if(this.props.user){
			const { city, country, about, interests, projects, timestamp, image } = this.props.user
			
			return (	
				<div style={styles.outerContainer}>
					<Container style={styles.container}>
						<Label pointing='below' size='massive' color='blue' style={styles.label}>Hey! I'm {this.props.user ? this.props.user.name : 'person'}</Label>
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
			   					
			   					<Button positive onClick={this.handleOpen} style={styles.contactBtn}>Edit Profile</Button>
				        
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
										  			 <label>Profile Picture</label>
										  			 <div style={styles.dropzone}>
										  			 <Dropzone onDrop={this.uploadFile}><p style={{textAlign: 'center'}}>Click or drag image to update your profile pic</p></Dropzone>
										  			 {this.state.image ? <img src={this.state.image} alt=' profile' style={{height: 200, width: 200, marginLeft: 20}}/> : null}
														</div>
										 <Button positive className="ui button" type='submit' style={styles.submitBtn}>Submit</Button>
										</form>
							    </Modal.Content>
							  </Modal>
      				 </Container>
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

function mapStateToProps({ user }){
    return {
        user
    }
}

const mapDispatchToProps = dispatch => ({
  updateUserInfo: (info) => dispatch(updateUser(info))
});

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
	  	marginTop: 40
	  },
	  outerContainer: {
	  	height: '100vh', 
	  	backgroundColor: '#F9FBFD', 
	  	display: 'flex'
	  }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
//list of countries