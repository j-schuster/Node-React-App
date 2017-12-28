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

import Nav from './Nav';
import Footer from './Footer'

const Home = () => <div style={{height: '100vh'}}><h2>Home</h2></div>;

class App extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser();
    };
    
    render(){
        
        return(
        
         <div>
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/user/signup" component={SignUp}/>
                    <Route exact path="/profile/:id" component={Dashboard}/>
                    <Route exact path="/job/:id" component={JobView}/>
                    <Route exact path="/alljobs" component={AllJobs}/>
                    <Route exact path="/addjob" component={AddJob}/>
                    <Route exact path="/addservice" component={AddService}/>
                    <Route exact path="/services" component={AllServices}/>
                    <Route exact path="/services/:id" component={ServiceView}/>
                    <Footer/> 
                </div>
            </BrowserRouter>
            </div>
        
        );
    };
};


export default connect(null, actions)(App);
