import React, {Component} from 'react';
import $ from 'jquery';
import { Modal } from 'react-bootstrap';




class Signupform extends Component {

    setShow = false;


    render() {

        return (
            <div>
                <form className="signupform">
                    <fieldset>
                        <legend>Sign Up</legend>
                        <div className="form-group">
                            <input type="text" className="form-control" id="firstName"
                                   placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="lastName"
                                   placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email_id"
                                   aria-describedby="emailHelp" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="address"
                                   placeholder="Address"/>
                        </div>
                        <div className="form-group">
                            <select type="role" placeholder="role" id="role" className="form-control">
                                <option value="Dog Sitter">Dog Sitter</option>
                                <option value="Dog Owner">Dog Owner</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Sign Up" onClick={this.handleSubmit}/>
                    </fieldset>
                </form>
                <Modal show={this.setState.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>

                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={this.handleClose}>Close</button>
                    </Modal.Footer>
                </Modal>


            </div>

        );

    }
    handleSubmit = event => {
        event.preventDefault();
        let apiBaseUrl = "http://127.0.0.1:8000/UserProfile/";
        const payload = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email_id: $("#email_id").val(),
            address: $("#address").val(),
            password: $("#password").val(),
            role: $("#role").val()
        };
        $.ajax({
            url: apiBaseUrl+"addUserProfile/",
            type: "POST",
            data: payload
        }).done(function(response){
            //this.setShow=true;
            $("#firstName").val('');
                $("#lastName").val('');
                $("#email_id").val('');
                $("#address").val('');
                $("#password").val('');
            alert("Thanks for Registering with us.");

        });

    }
}

export default Signupform;