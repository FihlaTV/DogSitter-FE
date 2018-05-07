import React, {Component} from 'react';
import './layout.css'
import Feedback from "../components/feedback/feedback";
import HeaderProfile from "../components/headerprofile/headerprofile";

class Feedbackpage extends Component {
    render() {
        return (
            <div >
                <HeaderProfile/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Feedback/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default Feedbackpage;