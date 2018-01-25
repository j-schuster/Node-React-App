import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import Truist from '../images/Truist.png'

export default function SignUp() {
	return (
		  <div style={styles.container}>
			  <img src={Truist} alt='truist logo' style={styles.logo}/>
				  <div style={styles.card}>
				  	<h1 style={{fontWeight: 100}}>Create an account for free</h1>
					  	<h3 style={styles.h3}>Connect, exchange info, and start working together</h3>
						  	<Button href="/auth/google" style={styles.button}  size='large' color='google plus'>
   						    <Icon name='google plus' /> Connect with Google
  				    		 </Button>
  		    				  <Button style={styles.button}  size='large' secondary>
      						  <Icon name='github' /> Connect with GitHub
    					  	</Button>
    					 <Button style={styles.button} size='large' color='linkedin'>
						 <Icon name='linkedin' />Connect with LinkedIn
  				</Button>
				</div>
			<h3 style={{color: '#7c7c7c'}}>Already have a Truist account? <a href='/auth/google'>Log in</a></h3>
		</div>
		)
}

const styles = {
	container: {
		backgroundColor: '#eff6fc',
		height: '100vh',
	  display: 'flex',
	  alignItems: 'center',
	  flexDirection: 'column'
	},
  logo: {
  	width: 350,
  	height: 110,
  	margin: 40
  },
  card: {
    borderRadius: 5,
	  width: '40%',
	  height: 400,
	  backgroundColor: '#fff',
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  flexDirection: 'column',
	  boxShadow: '9px 11px 8px -6px rgba(199,199,199,1)'
	},
	h3 : {color: '#7c7c7c', marginTop: 0, marginBottom: 40, fontWeight: 100},
	button: {width: 250, margin: 10},
}