import React, {Component} from 'react';

import "../../layout/layout.css";
import $ from "jquery";



class HeaderProfile extends Component {



    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
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
                        <form className="form-inline my-2 my-lg-0 float-right">

                            <input className="btn btn-danger " style={{"width":"100px","height":"40px","font-size":"15px","font-style":"bold"}} onClick={this.handleSubmit} type="submit" value="Logout"/>
                        </form>
                    </div>
                </nav>
            </div>

        );


    }

    handleSubmit = event => {
        window.location = "/login/";
    }
}

export default HeaderProfile;