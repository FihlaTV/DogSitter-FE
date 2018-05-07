import React, {Component} from 'react';
import './layout.css'
import Profile from "../components/profile/profile";
import HeaderProfile from "../components/headerprofile/headerprofile";

class Profilepage extends Component {
    render() {
        return (
            <div >
                <HeaderProfile/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Profile/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default Profilepage;