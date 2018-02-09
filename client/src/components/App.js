import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Dashboard from './Dashboard';
import AddJob from './AddJob';
import AllJobs from './AllJobs';
import JobView from './JobView';
import AddService from './AddService';
import AllServices from './AllServices';
import ServiceView from './ServiceView';
import SignUp from './SignUp';
import User from './User';
import Home from './Home'

import Nav from './Nav';
import Footer from './Footer'

class App extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser();
    };
    
    render(){
        
        return(
        
       
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/profile/:id" component={Dashboard}/>
                    <Route exact path="/job/:id" component={JobView}/>
                    <Route exact path="/alljobs" component={AllJobs}/>
                    <Route exact path="/addjob" component={AddJob}/>
                    <Route exact path="/addservice" component={AddService}/>
                    <Route exact path="/services" component={AllServices}/>
                    <Route exact path="/services/:id" component={ServiceView}/>
                    <Route exact path="/user/:id" component={User}/>
                    <Footer/> 
                </div>
            </BrowserRouter>
          
        
        );
    };
};


export default connect(null, actions)(App);
