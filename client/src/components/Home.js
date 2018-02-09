import React from 'react'
import { Button, Icon, Step } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import Happy from '../images/happy.png'

import OfficeGuy from '../images/officeGuy.png'
import Sittng from '../images/person-sitting.png'
import './home.css'

import kb from '../images/kb.png'
import pcut from '../images/pcut.png'

import verify from '../images/verify.png'
import checkmark from '../images/checkmark.png'

import writing from '../images/writing.png'
import lightb from '../images/lightb.png'

import handshake from '../images/handshake.png'
import connected from '../images/connected.png'

import HRL from '../images/HRL.png'

import spec2 from '../images/spec2.png'
import paperCheck from '../images/paperCheck.png'


class Home extends React.Component {

	state={
		howItWorks: 'Register',
		currentTest: '1',
		slide: false,
		slowSlide: false,
		class: '',
	}

	componentDidMount(){
		this.setSlide()
	}

	componentWillMount(){
    this.setState({width: window.innerWidth});
	}

	selectTest = (num) => {
		this.setState({ currentTest: num, class: 'testCarousel' })
		setTimeout(() => { this.setState({ class: '' }) }, 600);
	}
	
	getCartoonImage = (state = this.state.howItWorks) => {
	
		switch(state){
			case 'Register' :
			return (
				<div style={{ marginTop: 60, display: 'flex', flex: 1, justifyContent: 'space-around', alignItems: 'center', height: 400, width: 800 }}>
			  <img alt='' className={this.state.howItWorks === 'Register' ? 'slideRight' : null} height={100} width={100} src={verify} style={{ alignSelf: 'flex-start'}}/>
				<img alt='truist logo' style={{ height: 400, width: 400}} src={OfficeGuy}/>
				<img alt='' className={this.state.howItWorks === 'Register' ? 'slideLeft' : null} height={100} width={100} src={checkmark} style={{ alignSelf: 'flex-start' }}/>
				</div>
			)
			case 'Post' :
			return (
				<div style={{ marginTop: 60, display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: 400, width: 400 }}>
				<img alt='' className={this.state.howItWorks === 'Post' ? 'scaleUp' : null} height={100} width={100} src={lightb} style={{ alignSelf: 'flex-start'}}/>
				<img alt='truist logo' style={{ height: 400, width: 400}} src={Sittng} width={400} height={360}/>
				<img alt='' className={this.state.howItWorks === 'Post' ? 'verticalSlide' : null} height={100} width={100} src={writing} style={{ alignSelf: 'flex-start'}}/>
				</div>
			)	
			case 'Connect' :
			return (
				<div style={{ marginTop: 60, display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center', height: 400, width: 800}}>
			  <img alt='' className={this.state.howItWorks === 'Connect' ? 'slowSlide' : null} height={100} width={100} src={handshake} style={{ alignSelf: 'flex-start'}}/>
				<img alt='truist logo' style={{ height: 400, width: 400}} src={Happy} width={400} height={260}/>
				<img alt='' className={this.state.howItWorks === 'Connect' ? 'slowSlide' : null} height={100} width={100} src={connected} style={{ alignSelf: 'flex-start'}}/>
				</div>
			)	
			default :
			return (
			<div style={{ marginTop: 60, display: 'flex', flex: 1, justifyContent: 'space-around', alignItems: 'center', height: 400, width: 800 }}>
			  <img alt='' className={this.state.howItWorks === 'Register' ? 'slideRight' : null} height={100} width={100} src={verify} style={{ alignSelf: 'flex-start'}}/>
				<img alt='truist logo' style={{ height: 400, width: 400}} src={OfficeGuy}/>
				<img alt='' className={this.state.howItWorks === 'Register' ? 'slideLeft' : null} height={100} width={100} src={checkmark} style={{ alignSelf: 'flex-start' }}/>
			</div>
			)
		}
	}


	slectImage = (name) => {
		this.setState({ howItWorks: name })
	}

	setSlide = () => {
		this.setState({ slide: true })
	}

	getTestimonial = () => {

 switch(this.state.currentTest){
	      case '1' : 
	      return(
						<div className={this.state.currentTest === '1' ? this.state.class : null} style={{ height: 400 }}>
		 					<h3 style={{color: '#fff', fontWeight: 100}}><Icon name='quote left' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5, alignSelf: 'flex-start'}}/>I'm the founder of not for profit startup with no coding experience and a tight budget. <br/>Truist helped me get all the work I needed to get our technology up and running, <br/>and provided me with all the support I needed. Thanks Truist!<Icon name='quote right' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5,margin: 10, alignSelf: 'flex-start'}}/></h3>
		          <img alt='truist logo' style={{marginTop: 40, borderRadius: 50}} src={'http://media.4rgos.it/i/Argos/7399257_R_Z001A?$Web$&$DefaultPDP570$'} width={100} height={100}/>
		          <h3 style={{color: '#fff', fontWeight: 100}}>Rachel Doe</h3>
		          <h4 style={{ fontWeight: 100, color: '#abb0ba', opacity: 0.7, marginTop: -10}}>Founder at Jumpstart Kickers</h4>
			     </div>
		 			) 
	      case '2' : 
	      return(
						<div className={this.state.currentTest === '2' ? this.state.class : null} style={{ height: 400 }}>
		 					<h3 style={{color: '#fff', fontWeight: 100}}><Icon name='quote left' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5, alignSelf: 'flex-start'}}/>I'm the founder of not for profit startup with no coding experience and a tight budget. <br/>Truist helped me get all the work I needed to get our technology up and running, <br/>and provided me with all the support I needed. Thanks Truist!<Icon name='quote right' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5,margin: 10, alignSelf: 'flex-start'}}/></h3>
		          <img alt='truist logo' style={{marginTop: 40, borderRadius: 50}} src={'http://media.4rgos.it/i/Argos/7399257_R_Z001A?$Web$&$DefaultPDP570$'} width={100} height={100}/>
		          <h3 style={{color: '#fff', fontWeight: 100}}>Johann Scuster</h3>
		          <h4 style={{ fontWeight: 100, color: '#abb0ba', opacity: 0.7, marginTop: -10}}>Founder at Jumpstart Kickers</h4>
			     </div>
	      )
	      case '3' : 
	      return(
						<div className={this.state.currentTest === '3' ? this.state.class : null} style={{ height: 400 }}>
		 					<h3 style={{color: '#fff', fontWeight: 100}}><Icon name='quote left' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5, alignSelf: 'flex-start'}}/>I'm the founder of not for profit startup with no coding experience and a tight budget. <br/>Truist helped me get all the work I needed to get our technology up and running, <br/>and provided me with all the support I needed. Thanks Truist!<Icon name='quote right' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5,margin: 10, alignSelf: 'flex-start'}}/></h3>
		          <img alt='truist logo' style={{marginTop: 40, borderRadius: 50}} src={'http://media.4rgos.it/i/Argos/7399257_R_Z001A?$Web$&$DefaultPDP570$'} width={100} height={100}/>
		          <h3 style={{color: '#fff', fontWeight: 100}}>Emily Tuan</h3>
		          <h4 style={{ fontWeight: 100, color: '#abb0ba', opacity: 0.7, marginTop: -10}}>Founder at Jumpstart Kickers</h4>
			     </div>
	      )
	      case '4' : 
	      return(
		        <div className={this.state.currentTest === '4' ? this.state.class : null} style={{ height: 400 }}>
		 					<h3 style={{color: '#fff', fontWeight: 100}}><Icon name='quote left' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5, alignSelf: 'flex-start'}}/>I'm the founder of not for profit startup with no coding experience and a tight budget. <br/>Truist helped me get all the work I needed to get our technology up and running, <br/>and provided me with all the support I needed. Thanks Truist!<Icon name='quote right' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5,margin: 10, alignSelf: 'flex-start'}}/></h3>
		          <img alt='truist logo' style={{marginTop: 40, borderRadius: 50}} src={'http://media.4rgos.it/i/Argos/7399257_R_Z001A?$Web$&$DefaultPDP570$'} width={100} height={100}/>
		          <h3 style={{color: '#fff', fontWeight: 100}}>Danny California</h3>
		          <h4 style={{ fontWeight: 100, color: '#abb0ba', opacity: 0.7, marginTop: -10}}>Founder at Jumpstart Kickers</h4>
			     </div>
	      )
				default :
				return (
					<div className={this.state.currentTest === '1' ? this.state.class : null} style={{ height: 400 }}>
		 					<h3 style={{color: '#fff', fontWeight: 100}}><Icon name='quote left' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5, alignSelf: 'flex-start'}}/>I'm the founder of not for profit startup with no coding experience and a tight budget. <br/>Truist helped me get all the work I needed to get our technology up and running, <br/>and provided me with all the support I needed. Thanks Truist!<Icon name='quote right' style={{color: '#abb0ba', fontSize: 50,opacity: 0.5,margin: 10, alignSelf: 'flex-start'}}/></h3>
		          <img alt='truist logo' style={{marginTop: 40, borderRadius: 50}} src={'http://media.4rgos.it/i/Argos/7399257_R_Z001A?$Web$&$DefaultPDP570$'} width={100} height={100}/>
		          <h3 style={{color: '#fff', fontWeight: 100}}>Rachel Doe</h3>
		          <h4 style={{ fontWeight: 100, color: '#abb0ba', opacity: 0.7, marginTop: -10}}>Founder at Jumpstart Kickers</h4>
			     </div>
				)
	    }
		}

	render(){
		
		return(
			<div style={{ backgroundColor: '#edf3ff', display: 'flex', flex: 1, flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
				<div style={{ marginTop: 120, textAlign: 'center'}}>
					<h1 style={{color: '#042847'}}>Get the talent you need to move your non-profit forward</h1>
						<h2 style={{color: '#7c7c7c', textAlign: 'center', fontWeight: 100}}>Login, create a project and start working</h2>
						 <Link to="/signup"><Button primary size='large' style={{margin: 10}} className="ui button" onClick={() => this.setSlide()}>Sign up for free</Button></Link>
					 
							<div style={{ width: 900, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-around' }}>
								<img alt='' className={this.state.slide ? 'slideRight' : null} height={200} width={240} src={paperCheck} style={{ marginTop: -140, position: 'absolute'}}/>
								<img alt='' className={this.state.slide ? 'slideRight' : null} height={150} width={150} src={kb} style={{ position: 'absolute', left: 0}}/>	
								<img alt='' className={this.state.slide ? 'slideLeft' : null} height={200} width={240} src={spec2} style={{ position: 'absolute', alignSelf: 'flex-end'}}/>
								<img alt='' className={this.state.slide ? 'slideUp' : null} style={{ marginTop: 100, alignSelf: 'center'}} src={HRL} height={350} width={500}/>
								<img alt='' className={this.state.slide ? 'slideLeft' : null} height={100} width={80} src={pcut} style={{ position: 'absolute', right: 0, marginTop: 150}}/>	
							</div> 	
						</div>		

						<div style={{ backgroundColor: '#fff', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
							<h1 style={{ marginTop: 100, color: '#042847'}}>How it works</h1>
							<Step.Group size='small' stackable='tablet'>
								<Step active={this.state.howItWorks === 'Register' ? true : null} onClick={() => this.slectImage('Register')}>
									<Icon name='signup' />
									<Step.Content>
										<Step.Title>Register</Step.Title>
										<Step.Description>Create a verified account</Step.Description>
									</Step.Content>
								</Step>
								<Step active={this.state.howItWorks === 'Post' ? true : null} onClick={() => this.slectImage('Post')}>
									<Icon name='plus' />
									<Step.Content>
										<Step.Title>Post a job</Step.Title>
										<Step.Description>Describe your needs</Step.Description>
									</Step.Content>
								</Step>
								<Step active={this.state.howItWorks === 'Connect' ? true : null} onClick={() => this.slectImage('Connect')}>
									<Icon name='globe' />
									<Step.Content>
										<Step.Title>Connect</Step.Title>
										<Step.Description>Share info, code and goals</Step.Description>
									</Step.Content>
								</Step>
							</Step.Group>

				 { this.getCartoonImage() }
			
				</div>
				<div style={{height: '80vh', backgroundColor: '#05243e', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
				<h1 style={{color: '#fff', fontWeight: 100, marginTop: 80}}>Testimonial</h1>
				
			 {this.getTestimonial() }
				
				<div style={{ display: 'flex', flexDirection: 'row', color: '#2c3e50', marginTop: 50 }}>
						<li className='testimonial' onClick={() => { this.selectTest('1') }} style={ this.state.currentTest === '1' ? { fontSize: 22, color: '#3498db' } : { fontSize: 22 }}></li>
						<li className='testimonial' onClick={() => { this.selectTest('2') }} style={ this.state.currentTest === '2' ? { fontSize: 22, color: '#3498db' } : { fontSize: 22 }}></li>
						<li className='testimonial' onClick={() => { this.selectTest('3') }} style={ this.state.currentTest === '3' ? { fontSize: 22, color: '#3498db' } : { fontSize: 22 }}></li>
						<li className='testimonial' onClick={() => { this.selectTest('4') }} style={ this.state.currentTest === '4' ? { fontSize: 22, color: '#3498db' } : { fontSize: 22 }}></li>	
			  </div>
				</div>

				<div style={{ height: 200,  width: '100%', backgroundColor: '#edf3ff', textAlign: 'center' }}>
					<h1 style={{color: '#05243e', fontWeight: 100, marginTop: 40}}>Ready to jump in?</h1>
					<Link to="/signup"><Button primary size='large' style={{margin: 10}} className="ui button" onClick={() => this.setSlide()}>Sign up for free</Button></Link>
				</div>
			</div>
		)
	}
}

export default Home

	