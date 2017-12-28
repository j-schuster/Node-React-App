import React from 'react'
import { connect } from 'react-redux'
import { fetchJob } from '../actions/index'
import { Button, Container, Grid, Image, Icon, Label } from 'semantic-ui-react';

class JobView extends React.Component {

	componentDidMount(){
		const path = window.location.pathname
		const id = path.substr(path.lastIndexOf('/') + 1)

		this.props.getJob(id)
	}

	render(){
		
		if(this.props.jobs.job){
			const {title, description, skills, timeframe, createdBy, timestamp, createdUserImage, company } = this.props.jobs.job
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
								 			   <Button style={{margin: 5, width: '100%'}} positive size='large'>Apply!</Button>
								 			   <Button style={{margin: 5, width: '100%'}} primary size='large'>Save for later</Button>	
							    	 	  	 </Grid.Column>

							        		 <Grid.Column width={11} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', color: '#7c7c7c'}}>
								    		  <Label as='a' color='orange' ribbon='right' size='large' style={{width: 80, marginLeft: 40}}>This is a brand new post!</Label>
								    		  <h1 style={{margin: 5}}>{this.props.jobs.job ? title : null}</h1>
								     	  <h2 style={{margin: 5}}><Icon name='at'/>{this.props.jobs.job ? company : null}</h2>						     	 
											<h3 style={{margin: 5}}>{this.props.jobs.job ? description : null}</h3>
							  		<h2 style={{margin: 5}}><Icon name='code'/> {this.props.jobs.job ? skills : null}</h2>
						  		<h2 style={{margin: 5}}><Icon name='time'/>{this.props.jobs.job ? timeframe : null}</h2>
					      </Grid.Column>
				 		  </Grid>							
						</Container>
					</div>
				</div>
		  )
		}else{
			return (
				<div>
					<h1>Waiting</h1>
				</div>
				)
		}
	}
}

const mapDispatchToProps = dispatch => ({
  getJob: (id) => dispatch(fetchJob(id))
});

const mapStateToProps = ({ jobs }) => {
 
	return {
		jobs
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobView)