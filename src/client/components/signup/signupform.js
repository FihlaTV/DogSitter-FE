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
                            <input type="text" required className="form-control input-height40" id="firstName"
                                   placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control input-height40" id="lastName"
                                   placeholder="Last Name"/>
                        </div>
                        <div className="form-group">

                            <input type="text" required className="form-control input-height40" id="emailid"
                                   placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" required className="form-control input-height40" id="password"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control input-height40" id="address"
                                   placeholder="Address"/>
                        </div>
                        <div className="form-group">
                            <select type="role" required placeholder="role" id="role" className="form-control input-height40">
                                <option value="Dog Sitter">Dog Sitter</option>
                                <option value="Dog Owner">Dog Owner</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary" style={{"width":"80px","height":"30px","font-size":"15px","font-style":"bold"}} value="Sign Up" onClick={this.handleSubmit}/>
                    </fieldset>
                </form>
                <div style={{"display":"none"}}>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Alert!!</strong> <div id="alert_text"></div>
                    </div>
                </div>
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
        let firstName =  $("#firstName").val();
        let lastName =  $("#lastName").val();
        let email_id =  $("#emailid").val();
        let address =  $("#address").val();
        let password =  $("#password").val();
        let role =  $("#role").val();

        if (firstName==''){
            alert("First Name Cannot be empty");
            return false;

        }

        if (lastName==''){
            alert("Last Name Cannot be empty");
            return false;
        }
        if (address==''){
            alert("Email Cannot be empty");
            return false;
        }
        if (password==''){
            alert("Email Cannot be empty");
            return false;
        }



        let apiBaseUrl = "http://127.0.0.1:8000/UserProfile/";
        const payload = {
            firstName: firstName,
            lastName: lastName,
            email_id: email_id,
            address: address,
            password: password,
            role: role
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