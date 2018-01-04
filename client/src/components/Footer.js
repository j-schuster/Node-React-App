import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Truist from '../images/Truist.png';
import './footer.css'

class Footer extends React.Component {
	render(){
		return(
			<Menu color='blue' attached='bottom' style={{borderRadius: 0, height: '26vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: 0}}>
				<div style={{width: '40%', color: '#7c7c7c', textAlign: 'center', fontSize: 16, padding: 35}}>		
				<img src={Truist} width={125} alt='' height={40}/>
				 	<p style={{fontSize: 17}}>Truist is a platform where exchange between non profits and web developers happen. Using our code to help those that move the world forward.</p>
						<Icon size='large' style={{margin: 10}} name='medium'/>
						<Icon size='large' style={{margin: 10}} name='facebook'/>
					    <Icon size='large' style={{margin: 10}} name='linkedin'/>
					     <Icon size='large' style={{margin: 10}} name='twitter'/>

						</div>
							<div style={{ width: '20%', textAlign: 'center', fontSize: 14, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', color: '#7c7c7c'}}>
								<h3>Company</h3>
									<a>About us</a>
									<a>Blog</a>
										<a>Terms and Service</a>
											<a>Privacy Policy</a>
												</div>
													<div style={{ width: '20%', textAlign: 'center', fontSize: 14, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', color: '#7c7c7c'}}>
														<h3>Quick Links</h3>
														<a>Log in</a>
														<a>Sign Up</a>
													<a>Developers</a>
												<a>Jobs</a>
											</div>
										<div style={{ width: '20%', textAlign: 'center', fontSize: 14, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', color: '#7c7c7c'}}>
									<h3>Get in Touch</h3>
								<a>849 037 0027</a>
							<a>truist@gmail.com</a>
						<a>PO Box 1234</a>
					<a>Skype@me</a>
				</div>			
			</Menu>
		)
	}
}

export default Footer;