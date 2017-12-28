import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Dropdown, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Truist from '../images/Truist.png'

import './nav.css'

class Nav extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
    render() {   

    return (
      <Menu stackable size='massive' className='navbar' borderless={true} style={{margin: 0}}>

         
          <img alt='truist logo' src={Truist} width={250} height={80} style={{marginLeft: 50}}/>
       

         {this.props.user ? <Menu.Menu position='right'>
                              <Dropdown item text='Create a Post'>
                                <Dropdown.Menu>
                                  <Dropdown.Item href="/addjob">Add Job</Dropdown.Item>
                                   <Dropdown.Item href="/addservice">Add service</Dropdown.Item>
                                    </Dropdown.Menu>
                                   </Dropdown> 
                                  <Menu.Item>
                                <Button primary href='/api/logout'>Logout</Button>
                              </Menu.Item>
                            </Menu.Menu> 
                          :<Menu.Menu position='right'>  
                              <Menu.Item>
                                <Button basic color='blue' href='/auth/google'>Login</Button>
                                  </Menu.Item>
                                  <Menu.Item>
                                 <Button primary href='/user/signup'>Sign Up For Free</Button>
                              </Menu.Item>
                           </Menu.Menu>}

        {this.props.user ? <Menu.Item><Link to={`/profile/${this.props.user._id}`}><Icon name='user circle' size='large' link={true}/></Link></Menu.Item>  : null }
                     
      </Menu>
        );
    }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Nav);