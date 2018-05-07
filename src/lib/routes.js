import React, { Component } from 'react';



import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landingpage from "../client/layout/landingpage"
import Profile from "../client/layout/profilepage";
import Feedback from "../client/layout/feedbackpage";

class Routes extends Component{

    render(){

        return(

            <BrowserRouter>

                <div>

                    <Route path = "/" exact component = {Landingpage}/>
                    <Route path = "/profile/login/" exact component = {Landingpage}/>
                    <Route path ="/profile/" exact component = { Profile}/>
                    <Route path ="/feedback" component = { Feedback }/>












                </div>









            </BrowserRouter>






        );





    }



}
export default Routes;