import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions';
import { Image,  Button, Modal, TextArea, Message, Container, Label, Icon, Card, Dimmer, Loader } from 'semantic-ui-react';
import { contactUser } from '../actions/index';

class User extends React.Component {

	state={
		modalOpen: false,
		message: '',
		email: '',
		messageSent: false,
	}

	componentDidMount(){
		const path = window.location.pathname
		const id = path.substr(path.lastIndexOf('/') + 1)

		this.props.getUserData(id)
		this.setState({
			userInfo: this.props.users.userInfo
		})
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleOpen = () => this.setState({ modalOpen: true })
	handleClose = () => this.setState({ modalOpen: false })

	submitMessage = (e) => {
		e.preventDefault();

		 const contactInfo = {
			 email: this.state.email,
			 motivation: this.state.message,
			 createdByEmail: this.props.users.userInfo.email,
			 createdByName: this.props.users.userInfo.name,
			 candidateName: this.props.user.name,
		 }

		 this.props.contactDev(contactInfo);

		 this.setState({ messageSent: true })
		 this.handleClose()
	}

	render(){
		if(this.props.users.userInfo){
			const { city, country, about, interests, projects, timestamp, image, name, stack } = this.props.users.userInfo
			return (
				<div style={styles.outerContainer}>
					<Container style={styles.container}>
					{this.state.messageSent ? 
					<div style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
					 			<Message
					 					success
					 					header='Your submittance was succesful!'
					 					content='Remember to communicate often and use your code for good!'
					 				/>
					 		</div>
					: null}
						<Label pointing='below' size='massive' color='blue' style={styles.label}>Hey! I'm {name ? name : 'person'}</Label>
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
											      <Card.Header style={styles.header} textAlign='center'>I am a..</Card.Header>
											      <Card.Meta textAlign='center'>This is my craft</Card.Meta>
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
										        <Card.Description style={styles.description} textAlign='center'>{stack ? stack : null }</Card.Description>
										      </Card.Content>
						   					</Card>
												 <Button size='large' style={{ margin: 40, fontWeight: 100 }} positive onClick={this.handleOpen}>Get in touch with { name }</Button>
      				 </Container>

							 <Modal open={this.state.modalOpen}
						           onClose={this.handleClose}
						           >
							    <Modal.Header>Your Profile</Modal.Header>
							    <Modal.Content>
							    	 <form className="ui form" onSubmit={this.submitMessage} style={styles.modal}>
										    <div className="field">
										    <label>Let {name} know a bit more about why you're reaching out.</label>
										     <TextArea placeholder="How can this candidate help your business?" 
										     					 style={{ minHeight: 100 }}
										     					 onChange={this.handleChange}
										     					 name="message"/>
										    </div>		
												<div className="field">
										    <label>Where can you be reached at?</label>
										     <TextArea placeholder="Please enter your email address" 
										     					 style={{ minHeight: 100 }}
										     					 onChange={this.handleChange}
										     					 name="email"/>
										    </div>														  			 
										 <Button positive className="ui button" type='submit' style={styles.submitBtn}>Submit</Button>
										</form>
							    </Modal.Content>
							  </Modal>
     				 </div>  
				)
		}
			return(
				<div style={{ minHeight: '100vh' }}>
				<Dimmer active inverted style={{ backgroundColor: 'transparent' }}>
				<Loader size='big'>Loading</Loader>
			</Dimmer>	
			</div>
			)
	}
}

const mapDispatchToProps = dispatch => ({
	getUserData: (data) => dispatch(getUserInfo(data)),
	contactDev: (data) => dispatch(contactUser(data)),
});

function mapStateToProps({ users, user }){
    return {
				users,
				user
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
			display: 'flex',
			minHeight: '100vh'
	  }
    }


export default connect(mapStateToProps, mapDispatchToProps)(User)

// else if(this.state.messageSent){
// 	return (
// 		<div style={{ height: '85vh', justifyContent: 'center', alignItems: 'center'}}>
// 			<Message
// 					success
// 					header='Your submittance was succesful!'
// 					content='Remember to communicate often and use your code for good!'
// 				/>
// 		</div>
// 		)
// }