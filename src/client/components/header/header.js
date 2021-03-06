import React, {Component} from 'react';

import "../../layout/layout.css";
import $ from "jquery";



class Header extends Component {



    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <a className="navbar-brand text-white" href="#">
                        <img src="http://webpage.pace.edu/ab85414n/dogsitter/logo.png" className="d-inline-block align-top" alt/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">

                        </ul>
                        <form className="form-inline my-2 my-lg-0 float-right" style={{"padding":"20px"}}>
                            <input className="form-control mr-sm-2 input-height40" style={{"width": "180px"}} id="email_id" type="text" placeholder="Username or Email"
                                   aria-label="Search"/>
                            <input className="form-control mr-sm-2 input-height40" style={{"width": "180px"}} id="password" type="password" placeholder="Password"
                                   aria-label="Search"/>
                            <fieldset style={{"width": "120PX","margin-left": "9px"}}>
                                <label className="checkbox inline"  style={{"position": "fixed","top": "25px"}}>
                                    <input type="checkbox" defaultValue="remember-me" />&nbsp;&nbsp;<span style={{"position": "fixed", "top": "27px", "display": "inline","font-size": "11px"}}className="text-white">Remember me
                                </span>
                                </label>
                                <a  style={{"margin-left": "14px","position": "fixed","top": "44px","font-size": "11px"}}className="help-inline" href="#">Forgot password?</a>
                            </fieldset>
                            &nbsp;&nbsp;
                            <input className="btn btn-danger " style={{"width":"80px","height":"30px","font-size":"15px","font-style":"bold"}} onClick={this.handleSubmit} type="submit" value="Login"/>
                        </form>
                    </div>
                </nav>
            </div>

        );


    }

    handleSubmit = event => {
        event.preventDefault();
        let apiBaseUrl = "http://127.0.0.1:8000/UserProfile/";
        const payload = {
            email_id: $("#email_id").val(),
            password: $("#password").val(),

        };
        $.ajax({
            url: apiBaseUrl+"login/",
            type: "POST",
            data: payload
        }).done(function(response){
            //this.setShow=true;

            $("#email_id").val('');
            $("#password").val('');
            window.location = "/profile/";




        });

    }
}

export default Header;