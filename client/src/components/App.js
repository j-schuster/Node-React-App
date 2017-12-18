import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';

const Dashboard = () => <h2>Dashboard</h2>

class App extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render(){
        
        return(
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Nav}/>
                    <Route exact path="/profile" component={Dashboard}/>
                </div>
            </BrowserRouter>
        </div>
        );
    };
};

export default connect(null, actions)(App);