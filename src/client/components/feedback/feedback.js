import React, {Component} from 'react';

import "../../layout/layout.css";

import "../../layout/profile.css";

import $ from 'jquery';



class Feedback extends Component {
    handlefocus(count){
        debugger;
        $(".starRating").removeClass('text-danger');
        for (let i=0;i<count;i++){
            $("#starRating_"+(i+1)).addClass('text-danger');
        }
    }
    render() {
        return (
            <div className="row" id="post-review-box" >
                <div className="col-md-12">
                    <form accept-charset="UTF-8" action="" method="post">
                        <input id="ratings-hidden" name="rating" type="hidden"/>
                            <textarea className="form-control animated" cols="50" id="new-review" name="comment"
                                      placeholder="Enter your review here..." rows="15"></textarea>

                            <div >
                                <div className={"margin-top-15"}>

                                        <span onClick={() => this.handlefocus(1)} id={"starRating_1"} className="starRating fa fa-star width-50"></span>
                                        <span onClick={() => this.handlefocus(2)} id={"starRating_2"} className="starRating fa fa-star width-50"></span>
                                        <span onClick={() => this.handlefocus(3)} id={"starRating_3"} className="starRating fa fa-star width-50"></span>
                                        <span onClick={() => this.handlefocus(4)} id={"starRating_4"} className="starRating fa fa-star width-50"></span>
                                        <span onClick={() => this.handlefocus(5)} id={"starRating_5"} className="starRating fa fa-star width-50"></span>

                                </div>
                                <div className="text-right">
                                    <button className="btn btn-danger btn-lg "  style= {{"margin-right": "10px"}}>Cancel</button>
                                    <button className="btn btn-success btn-lg" type="submit">Save</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        );
    }




}

export default Feedback;