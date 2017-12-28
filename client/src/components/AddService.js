import React from 'react';
import { connect } from 'react-redux';
import { addService } from '../actions/index';
import { Button, Form, Container, Input, TextArea } from 'semantic-ui-react';

class AddService extends React.Component {

	state = {
		title: '',
		description: '',
		skills: ''
	}

	handleChange = (event) => {
	  		this.setState({[event.target.name]: event.target.value})
	  	}

	handleSubmit = (e) => {
		e.preventDefault();

		const service = {
			title: this.state.title,
			description: this.state.description,
			skills: this.state.skills
		}

		this.props.addNewService(service)
		
	}  	

	render(){

		return (
			<Container>
				<h1 style={{textAlign: 'center'}}>Looking for a job? Tell us more..</h1>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field required>
		    		  <label>Title</label>
		      		  <Input type='text' name='title' placeholder='JavaScript UI Developer' onChange={this.handleChange}/>
		    		</Form.Field>

					<Form.Field required>
		    		  <label>Description</label>
		      		  <TextArea type='text' name='description' placeholder='Tell us about what you want the developer to help with.' onChange={this.handleChange}/>
		    		</Form.Field>

					<Form.Field required>
		    		  <label>Skills Needed</label>
		      		  <Input type='text' name='skills' placeholder='JavaScript, React, Redux, MongoDB' onChange={this.handleChange}/>
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

export default connect(null, mapDispatchToProps)(AddService)