import React from 'react';
import { connect } from 'react-redux';
import { addService } from '../actions/index';
import { Button, Form, Container, Input, TextArea } from 'semantic-ui-react';

class AddService extends React.Component {

	state = {
	    lookingFor: ''
	}

	handleChange = (event) => {
	  		this.setState({[event.target.name]: event.target.value})
	  	}

	handleSubmit = (e) => {
		e.preventDefault();

		const service = {
			userName: this.props.user.name,
		    about: this.props.user.about,
		    image: this.props.user.image,
		    skills: this.props.user.skills,
		    userId: this.props.user._id,
		    lookingFor: this.state.lookingFor
		}

		this.props.addNewService(service)
		
	}  	

	render(){
		
		return (
			<Container style={{height: '100vh', width: '60%'}}>
				<h1 style={{textAlign: 'center', marginTop: 80, color: '#7c7c7c'}}>Looking for a job? Tell us more..</h1>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field required>
		    		  <label>What do you have in mind?</label>
		      		  <Input type='text' name='lookingFor' placeholder='What opportunity are you interested in?' onChange={this.handleChange}/>
		    		</Form.Field>
		    		<Button positive>Submit!</Button>
		 		 </Form>
			</Container>
		)
	}
}

const mapDispatchToProps = dispatch => ({
 	addNewService: (service) => dispatch(addService(service))
});

const mapStateToProps = ({ user }) => {
	return {
		 user
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddService)