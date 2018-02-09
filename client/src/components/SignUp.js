import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import Truist from '../images/Truist.png'
import atLogo from '../images/altruistLogo.png'

class SignUp extends React.Component {
	render(){
		return (
		  <div style={styles.container}>
			  <img src={atLogo} alt='truist logo' style={styles.logo}/>
				  <div style={styles.card}>
				  	<h1 style={{fontWeight: 100}}>Create an account for free</h1>
					  	<h3 style={styles.h3}>Connect, exchange info, and start working together</h3>
						  	<Button href="/auth/google" style={styles.button}  size='large' color='google plus'>
   						<Icon name='google plus' /> Connect with Google
  				  </Button>   
					</div>
				<h3 style={{color: '#7c7c7c', fontWeight: 100}}>Already have a Truist account? <a href='/auth/google'>Log in</a></h3>
			</div>
		)
	}
}

export default SignUp

const styles = {
	container: {
		backgroundColor: '#eff6fc',
		padding: 20,
		flex: 1,
	  display: 'flex',
	  alignItems: 'center',
	  flexDirection: 'column'
	},
  logo: {
  	width: 350,
  	height: 60,
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
	  boxShadow: '9px 11px 8px -6px rgba(199,199,199,0.5)'
	},
	h3 : {color: '#7c7c7c', marginTop: 0, marginBottom: 40, fontWeight: 100},
	button: {width: 250, margin: 10},
}

/* <Button style={styles.button}  size='large' secondary>
<Icon name='github' /> Connect with GitHub
</Button>
<Button style={styles.button} size='large' color='linkedin'>
<Icon name='linkedin' />Connect with LinkedIn
</Button> */