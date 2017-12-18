import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from './Nav';

const Dashboard = () => <h2>Dashboard</h2>;
const Home = () => <h2>Home</h2>;

class App extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render(){
        
        return(
        <div>
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/profile" component={Dashboard}/>
                </div>
            </BrowserRouter>
        </div>
        );
    };
};

export default connect(null, actions)(App);