import React from 'react'
import { Button, Icon, Step } from 'semantic-ui-react'
import Hero from '../images/hero.png'
import Happy from '../images/happy.png'
import Person from '../images/person.png'


class Home extends React.Component {
	render(){
		return(
			<div style={{ backgroundColor: '#edf4ff', display: 'flex', flex: 1, flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
				<div style={{marginTop: 100, textAlign: 'center'}}>
					<h1 style={{color: '#042847'}}>Get the talent you need to move your non-profit forward</h1>
						<h2 style={{color: '#7c7c7c', textAlign: 'center', fontWeight: 100}}>Login, create a project and start working</h2>
						 <Button primary size='large' style={{margin: 10}} className="ui button">Sign up for free</Button>
				</div>				
				<img alt='truist logo' style={{marginTop: 40}} src={Hero} width={520} height={300}/>
				<div style={{backgroundColor: '#fff', width: '100%', marginTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<h1 style={{marginTop: 100, color: '#042847'}}>How it works</h1>
					 <Step.Group stackable='tablet'>
				    <Step active>
				      <Icon name='signup' />
				      <Step.Content>
				        <Step.Title>Register</Step.Title>
				        <Step.Description>Create a verified account</Step.Description>
				      </Step.Content>
				    </Step>
				    <Step>
				      <Icon name='plus' />
				      <Step.Content>
				        <Step.Title>Post a job</Step.Title>
				        <Step.Description>Describe your needs</Step.Description>
				      </Step.Content>
				    </Step>
				    <Step >
				      <Icon name='globe' />
				      <Step.Content>
				        <Step.Title>Connect</Step.Title>
				        <Step.Description>Share info, code and goals</Step.Description>
				      </Step.Content>
				    </Step>
				  </Step.Group>
				  <img alt='truist logo' style={{marginTop: 40, marginBottom: 100}} src={Happy} width={400} height={300}/>
				</div>
				<div style={{height: '100vh', backgroundColor: '#042847', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<h1 style={{color: '#fff', fontWeight: 100, marginTop: 80}}>Testimonial</h1>
				
				<h3 style={{color: '#fff', fontWeight: 100}}><Icon name='quote left' style={{color: '#174184', fontSize: 20, alignSelf: 'flex-start'}}/>I'm the founder of not for profit startup with no coding experience and a tight budget. <br/>Truist helped me get all the work I needed to get our technology up and running, <br/>and provided me with all the support I needed. Thanks Truist!<Icon name='quote right' style={{color: '#174184', fontSize: 20, alignSelf: 'flex-start'}}/></h3>
					<img alt='truist logo' style={{marginTop: 40, borderRadius: 50}} src={Person} width={100} height={100}/>
					<h3 style={{color: '#fff', fontWeight: 100}}>Rachel Doe</h3>
					<h4 style={{color: '#7c7c7c', marginTop: -10}}>Founder at Jumpstart Kickers</h4>
				</div>
			</div>
		)
	}
}

export default Home