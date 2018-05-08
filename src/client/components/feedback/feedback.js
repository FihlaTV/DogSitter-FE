import React, {Component} from 'react';

import "../../layout/layout.css";

import "../../layout/profile.css";

import $ from 'jquery';



class Feedback extends Component {
    submitted_ratings= 0;
    handlefocus(count){
        this.submitted_ratings=count;
            $(".starRating").removeClass('text-danger');
        for (let i=0;i<count;i++){
            $("#starRating_"+(i+1)).addClass('text-danger');
        }
    }

    handleFeedbackSubmit = event => {
        event.preventDefault();
        let apiBaseUrl = "http://127.0.0.1:8000/UserProfile/";
        const payload = {
            firstname: $("#firstName").val(),
            lastname: $("#lastName").val(),
            ratings:this.submitted_ratings,
            review: $("#review_message").val()

        };
        $.ajax({
            url: apiBaseUrl+"login/",
            type: "POST",
            data: payload
        }).done(function(response){
            //this.setShow=true;

            $("#firstName").val('');
            $("#lastName").val('');
            $("#review_message").val('');
            window.location = "../profile/";




        });

    }

    render() {
        return (
            <div className="row" id="post-review-box" >
                <div className="col-md-12">
                    <form accept-charset="UTF-8" action="" method="post">
                            <div className="row margin-top-15">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="Name" autoComplete="off" id="Name"
                                               placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="lastName" autoComplete="off"
                                               id="email" placeholder="Last Name"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control textarea" rows="10" name="Message" id="review_message" placeholder="Message"></textarea>
                                    </div>
                                </div>

                                <div style={{"width":"100%"}}>
                                    <div className={"margin-top-15"}>

                                        <span onClick={() => this.handlefocus(1)} id={"starRating_1"} className="starRating fa fa-star width-50"></span>
                                        <span onClick={() => this.handlefocus(2)} id={"starRating_2"} className="starRating fa fa-star width-50"></span>
                                        <span onClick={() => this.handlefocus(3)} id={"starRating_3"} className="starRating fa fa-star width-50"></span>
                                        <span onClick={() => this.handlefocus(4)} id={"starRating_4"} className="starRating fa fa-star width-50"></span>
                                        <span onClick={() => this.handlefocus(5)} id={"starRating_5"} className="starRating fa fa-star width-50"></span>

                                    </div>
                                    <div className="text-right">
                                        <button className="btn btn-danger btn-lg "  style= {{"margin-right": "10px","width":"100px"}}>Cancel</button>
                                        <button className="btn btn-success btn-lg" style= {{"margin-right": "10px","width":"100px"}} type="submit">Save</button>
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        );
    }




}

export default Feedback;