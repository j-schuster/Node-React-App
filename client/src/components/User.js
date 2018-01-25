import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../actions';
import { Image,  Button, Modal, TextArea, Message, Container, Label, Icon, Card } from 'semantic-ui-react';

class User extends React.Component {

	componentDidMount(){
		const path = window.location.pathname
		const id = path.substr(path.lastIndexOf('/') + 1)

		this.props.getUserData(id)
	}

	render(){

		if(this.props.users.userInfo){
			const { city, country, about, interests, projects, timestamp, image, skills, name } = this.props.users.userInfo
			return (
				<div style={styles.outerContainer}>
					<Container style={styles.container}>
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
			   					
      				 </Container>
     				 </div>  
				)
		}
		return(
			<h1>This is the user component</h1>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	getUserData: (data) => dispatch(getUserInfo(data))
});

function mapStateToProps({ users }){
    return {
        users
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


export default connect(mapStateToProps, mapDispatchToProps)(User)