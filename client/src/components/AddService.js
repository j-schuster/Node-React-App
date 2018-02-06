import React from 'react';
import { connect } from 'react-redux';
import { addService } from '../actions/index';
import { Button, Form, Container, Input, Segment, Icon, Label } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

class AddService extends React.Component {

	state = {
			lookingFor: '',
			redirect: false,
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
				lookingFor: this.state.lookingFor,
				tags: this.props.user.tags
		}

		this.props.addNewService(service)
		this.setState({redirect: true})
		
	}  	

	render(){
		
		if (this.state.redirect) {
			return <Redirect to={`/services`}/>
	}
		
		return (
			<Container style={{minHeight: '100vh', width: '60%'}}>
				<h1 style={{textAlign: 'center', color: '#7c7c7c', marginTop: 100}}>Looking for a job? Tell us more..</h1>
				<Segment>
				<Form onSubmit={this.handleSubmit}>
				<Label pointing='below' size='large' style={{textAlign: 'center'}} color='violet'> One quick thing</Label>
								    	 <h4><Icon name='check circle outline'/>Define the opportunity you're looking for</h4>
								    		 <p>The clearer you are the easier it is to match you with the perfect person to do the job!</p>
					<Form.Field required>
		      		  <Input type='text' name='lookingFor' placeholder='What kind of opportunity are you looking for?' onChange={this.handleChange}/>
		    		</Form.Field>
		    		<Button positive>Submit!</Button>
		 		 </Form>
				</Segment>	
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