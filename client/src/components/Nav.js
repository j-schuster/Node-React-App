import React from 'react'
import { connect } from 'react-redux'

class Nav extends React.Component {
  
      renderContent() {
        switch (this.props.auth) {
            case null:
                return ;
            case false:
                return <a href="/auth/google">Login</a>
            default:   
              return <a href="/api/logout">Logout</a>
        }
    }
  
    render() {
       return (
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Logo</a>
                 <ul className="right hide-on-med-and-down">
                    <li>{this.renderContent()}</li>
                  </ul>
                </div>
             </nav>
           </div>
        );
    }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Nav);