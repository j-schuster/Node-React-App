import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Truist from '../images/Truist.png';
import './footer.css'

class Footer extends React.Component {
	render(){
		return(
			<Menu attached='bottom' fluid widths={4} borderless stackable style={{ border: 'none' }}>
				<Menu.Item style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 40 }}>	
				<img src={Truist} style={{ height: 40, width: 100 }} alt='' />
				 <p style={{fontSize: 13, color: 'rgba(0, 0, 0, 0.4)'}}>Truist is a platform where exchange between non profits and web developers happen. Using our code to help those that move the world forward.</p>
	     	  <div>
					<Icon className='social' size='large' style={{margin: 10, color: '#2ecc71', fontSize: 24}} name='medium'/>
		      <Icon className='social' size='large' style={{margin: 10, color: '#2980b9', fontSize: 24}} name='facebook'/>
					<Icon className='social' size='large' style={{margin: 10, color: '#224f96', fontSize: 24}} name='linkedin'/>
				  <Icon className='social' size='large' style={{margin: 10, color: '#3498db', fontSize: 24}} name='twitter'/>
					</div>
				</Menu.Item>
        <Menu.Item style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
					<div className='footerInfo' style={{ fontWeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
					<h4>Company</h4>
					<li style={{margin: 5, listStyle: 'none'}}>About us</li>
					<li style={{margin: 5, listStyle: 'none'}}>Blog</li>
					<li style={{margin: 5, listStyle: 'none'}}>Terms and Service</li>
					<li style={{margin: 5, listStyle: 'none'}}>Privacy Policy</li>
					</div>
				</Menu.Item>
        <Menu.Item>
				<div className='footerInfo' style={{ fontWeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
					<h4>Quick Links</h4>
					<li style={{margin: 5, listStyle: 'none'}}>Login</li>
					<li style={{margin: 5, listStyle: 'none'}}>Signup</li>
					<li style={{margin: 5, listStyle: 'none'}}>Developers</li>
					<li style={{margin: 5, listStyle: 'none'}}>Jobs</li>
					</div>
				</Menu.Item>
				<Menu.Item>
				<div className='footerInfo' style={{ fontWeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
					<h4>Get In Touch</h4>
					<li style={{margin: 5, listStyle: 'none'}}>849 037 0027</li>
					<li style={{margin: 5, listStyle: 'none'}}>truist@gmail.com</li>
					<li style={{margin: 5, listStyle: 'none'}}>PO Box 1234</li>
					<li style={{margin: 5, listStyle: 'none'}}>Skype@me</li>
					</div>
				</Menu.Item>
			</Menu>
		)
	}
}

export default Footer;

/* 
style={{borderRadius: 0, height: '26vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: 0, border: 'none'}}

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
</div> */