import React from 'react';
import { connect } from 'react-redux';
import { addJob } from '../actions/index';
import { Button, Form, Container, Input, TextArea, Grid, Label, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';


class AddJob extends React.Component {

	state = {
		title: '',
		description: '',
		skills: '',
		timeframe: '',
		company: '',
		createdUserImage: '',
		redirect: false,
		selected: false,
		tags: [],
	}

	handleChange = (event) => {
	  		this.setState({[event.target.name]: event.target.value})
	  	}

	handleSubmit = (e) => {
		e.preventDefault();

		const job = {
			title: this.state.title,
			description: this.state.description,
			skills: this.state.skills,
			timeframe: this.state.timeframe,
			createdBy: this.props.user.name,
			createdUserImage: this.props.user.image,
			company: this.state.company,
			createdUserEmail: this.props.user.email,
			tags: this.state.tags,
		}

		this.props.addNewJob(job);
		this.setState({ redirect: true })
		
	}  	

	selectTag = (e) => {
		e.preventDefault()
	
		this.setState({
			tags: [...this.state.tags, e.target.innerHTML]
		})
	}

	render(){
		const { redirect } = this.state
		
		if (redirect) {
       		return <Redirect to={`/alljobs`}/>
     	}
			return (
				<div style={{ backgroundColor: '#F9FBFD', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<h1 style={{color: '#7c7c7c', fontWeight: 100, marginTop: 100}}>Need a developer? You've come to the right place!</h1>
						<h2 style={{color: '#7c7c7c', fontWeight: 100, margin: 5}}>Tell us more about your needs</h2>
							<div style={{ width: '70%', backgroundColor: '#fff', padding: 20,  display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)' }}>
								<Container style={{width: '90%'}}>
					 					<Grid>
								   	 <Grid.Column width={5} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#7c7c7c', fontWeight: 100}}>
								    		<Label pointing='below' size='large' style={{textAlign: 'center'}} color='violet'> Things to keep in mind</Label>
								    	 <h4><Icon name='check circle outline'/>BE DESCRIPTIVE</h4>
								    		 <p>The clearer you are the easier it is to match you with the perfect person to do the job!</p>
								    			<h4><Icon name='check circle outline'/>UNDERSTAND YOUR NEEDS</h4>
								   				<p>List specific technologies so that the right skills can be easily matched.</p>
								    		 <h4><Icon name='check circle outline'/>GIVE A TIMELINE ESTIMATE</h4>
								   		 <p>It helps to know the duration, so that the developer can manage time spent coding for your business!</p>
								     
										 </Grid.Column>

								    <Grid.Column width={11}>
								     <Form onSubmit={this.handleSubmit}>
											<Form.Field required>
								    		  <label style={{fontSize: 17}}>Title</label>
								      		  <Input type='text' name='title' placeholder='JavaScript UI Developer' onChange={this.handleChange}/>
								    		</Form.Field>

											<Form.Field required>
								    		  <label style={{fontSize: 17}}>Description</label>
								      		  <TextArea type='text' name='description' placeholder='Tell us about what you want the developer to help with.' onChange={this.handleChange}/>
								    		</Form.Field>

								    		<Form.Field required>
								    		  <label style={{fontSize: 17}}>Company</label>
								      		  <TextArea type='text' name='company' placeholder="What is your company's name?" onChange={this.handleChange}/>
								    		</Form.Field>

											<Form.Field required>
								    		  <label style={{fontSize: 17}}>Skills Needed</label>
								      		  <Input type='text' name='skills' placeholder='JavaScript, React, Redux, MongoDB' onChange={this.handleChange}/>
								    		</Form.Field>

								    		<Form.Field required>
								    		  <label style={{fontSize: 17}}>Timeframe</label>
								    		  <Input type='text' name='timeframe' placeholder='3 months' onChange={this.handleChange}/>
								    	</Form.Field>
											<div style={{height: 50, width: 400 }}>
											<Button.Group>
												<Button onClick={this.selectTag}>Developer</Button>
												<Button onClick={this.selectTag}>Design</Button>
												<Button onClick={this.selectTag}>Frontend</Button>
												<Button onClick={this.selectTag}>Backend</Button>
												<Button onClick={this.selectTag}>Wordpress</Button>
											</Button.Group>
										</div>
							  		<Button positive style={{margin: 10}}>SUBMIT JOB!</Button>
								 </Form>
					      </Grid.Column>
				 		  </Grid>								
						</Container>
					</div>
				</div>
			)
		}
	}

const mapStateToProps = ({ user }) => {
	return {
		 user
	}
}

const mapDispatchToProps = dispatch => ({
  addNewJob: (job) => dispatch(addJob(job))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddJob);
// timeframe format

/* <span style={{ height: 24, backgroundColor: '#cecece', margin: 5, color: '#333', pading: 2, paddingRight: 2, paddingLeft: 2 }} onClick={this.selectTag}>Designer</span>
<span style={{ height: 24, backgroundColor: '#cecece', margin: 5, color: '#333', pading: 2, paddingRight: 2, paddingLeft: 2 }} onClick={this.selectTag}>Developer</span>
<span style={{ height: 24, backgroundColor: '#cecece', margin: 5, color: '#333', pading: 2, paddingRight: 2, paddingLeft: 2 }} onClick={this.selectTag}>Frontend</span>
<span style={{ height: 24, backgroundColor: '#cecece', margin: 5, color: '#333', pading: 2, paddingRight: 2, paddingLeft: 2 }} onClick={this.selectTag}>Backend</span> */