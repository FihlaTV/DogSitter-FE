import React, {Component} from 'react';

import "../../layout/layout.css";

import "../../layout/profile.css";



class Profile extends Component {

    render() {
        return (
            <div className="container">
                <div className="row profile">
                    <div className="col-md-4">
                        <div className="profile-sidebar">

                            <div className="profile-userpic">
                                <img
                                    src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg"
                                    className="img-responsive" alt=""/>
                            </div>

                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    Avtar Bamra
                                </div>
                                <div className="profile-usertitle-job">
                                    Dog Sitter
                                </div>
                            </div>

                            <div className="profile-userbuttons">
                                <button type="button" className="btn btn-success btn-sm">Follow</button>
                                <button type="button" className="btn btn-danger btn-sm">Message</button>
                            </div>

                            <div className="profile-usermenu ">
                                <ul style={{ "list-style-type": "none"}}>
                                    <li className="active">
                                        <a href="#">
                                            <i className="glyphicon glyphicon-home"></i>
                                            Overview </a>
                                    </li>
                                    <br/>
                                    <li>
                                        <a href="#">
                                            <i className="glyphicon glyphicon-user"></i>
                                            Account Settings </a>
                                    </li>
                                    <br/>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="glyphicon glyphicon-ok"></i>
                                            Tasks </a>
                                    </li>
                                    <br/>
                                    <li>
                                        <a href="#">
                                            <i className="glyphicon glyphicon-flag"></i>
                                            Help </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-8" style={{"background-color":"white","padding-top": "70px"}}>
                        <div className="container">

                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="rating-block">
                                        <h4>Average user rating</h4>
                                        <h2 className="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
                                        <button type="button" className="btn btn-warning btn-sm"
                                                aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                        <button type="button" className="btn btn-warning btn-sm"
                                                aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                        <button type="button" className="btn btn-warning btn-sm"
                                                aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                        <button type="button" className="btn btn-default btn-grey btn-sm"
                                                aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                        <button type="button" className="btn btn-default btn-grey btn-sm"
                                                aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <h4>Rating breakdown</h4>
                                    <div className="pull-left">
                                        <div className="pull-left" style={{"width":"35px", "line-height":"1"}}>
                                            <div style={{"height":"9px", "margin":"5px 0"}}>5 <span
                                                className="glyphicon glyphicon-star"></span>
                                            </div>
                                        </div>
                                        <div className="pull-left" style={{"width":"180px"}}>
                                            <div className="progress" style={{"height":"9px","margin":"8px 0"}}>
                                                <div className="progress-bar-success" role="progressbar"
                                                     aria-valuenow="5" aria-valuemin="0" aria-valuemax="5"
                                                     style={{"width": "1000%"}}>
                                                    <span className="sr-only">80% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right" style={{"margin-left":"10px"}}>1</div>
                                    </div>
                                    <div className="pull-left">
                                        <div className="pull-left" style={{"width":"35px", "line-height":"1"}}>
                                            <div style={{"height":"9px", "margin":"5px 0"}}>4 <span
                                                className="glyphicon glyphicon-star"></span></div>
                                        </div>
                                        <div className="pull-left" style={{"width":"180px"}}>
                                            <div className="progress" style={{"height":"9px", "margin":"8px 0"}}>
                                                <div className="progress-bar progress-bar-primary" role="progressbar"
                                                     aria-valuenow="4" aria-valuemin="0" aria-valuemax="5"
                                                     style={{"width": "80%"}}>
                                                    <span className="sr-only">80% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right" style={{"margin-left":"10px"}}>1</div>
                                    </div>
                                    <div className="pull-left">
                                        <div className="pull-left" style={{"width":"35px", "line-height":"1"}}>
                                            <div style={{"height":"9px", "margin":"5px 0"}}>3 <span
                                                className="glyphicon glyphicon-star"></span></div>
                                        </div>
                                        <div className="pull-left" style={{"width":"180px"}}>
                                            <div className="progress" style={{"height":"9px", "margin":"8px 0"}}>
                                                <div className="progress-bar-info" role="progressbar"
                                                     aria-valuenow="3" aria-valuemin="0" aria-valuemax="5"
                                                     style={{"width": "60%"}}>
                                                    <span className="sr-only">80% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right" style={{"margin-left":"10px"}}>0</div>
                                    </div>
                                    <div className="pull-left">
                                        <div className="pull-left" style={{"width":"35px", "line-height":"1"}}>
                                            <div style={{"height":"9px", "margin":"5px 0"}}>2 <span
                                                className="glyphicon glyphicon-star"></span></div>
                                        </div>
                                        <div className="pull-left" style={{"width":"180px"}}>
                                            <div className="progress" style={{"height":"9px", "margin":"8px 0"}}>
                                                <div className="progress-bar-warning" role="progressbar"
                                                     aria-valuenow="2" aria-valuemin="0" aria-valuemax="5"
                                                     style={{"width": "40%"}}>
                                                    <span className="sr-only">80% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right" style={{"margin-left":"10px"}}>0</div>
                                    </div>
                                    <div className="pull-left">
                                        <div className="pull-left" style={{"width":"35px", "line-height":"1"}}>
                                            <div style={{"height":"9px", "margin":"5px 0"}}>1 <span
                                                className="glyphicon glyphicon-star"></span></div>
                                        </div>
                                        <div className="pull-left" style={{"width":"180px"}}>
                                            <div className="progress" style={{"height":"9px", "margin":"8px 0"}}>
                                                <div className="progress-bar-danger" role="progressbar"
                                                     aria-valuenow="1" aria-valuemin="0" aria-valuemax="5"
                                                     style={{"width": "20%"}}>
                                                    <span className="sr-only">80% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pull-right" style={{"margin-left":"10px"}}>0</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="">
                                    <hr/>
                                    <div className="review-block">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                                                     className="img-rounded"/>
                                                    <div className="review-block-name"><a href="#">nktailor</a></div>
                                                    <div className="review-block-date">January 29, 2016<br/>1 day ago
                                                    </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="review-block-rate">
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-grey btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-grey btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                </div>
                                                <div className="review-block-title">this was nice in buy</div>
                                                <div className="review-block-description">this was nice in buy. this was
                                                    nice in buy. this was nice in buy. this was nice in buy this was
                                                    nice in buy this was nice in buy this was nice in buy this was nice
                                                    in buy
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                                                     className="img-rounded"/>
                                                    <div className="review-block-name"><a href="#">nktailor</a></div>
                                                    <div className="review-block-date">January 29, 2016<br/>1 day ago
                                                    </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="review-block-rate">
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-grey btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-grey btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                </div>
                                                <div className="review-block-title">this was nice in buy</div>
                                                <div className="review-block-description">this was nice in buy. this was
                                                    nice in buy. this was nice in buy. this was nice in buy this was
                                                    nice in buy this was nice in buy this was nice in buy this was nice
                                                    in buy
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                                                     className="img-rounded"/>
                                                    <div className="review-block-name"><a href="#">nktailor</a></div>
                                                    <div className="review-block-date">January 29, 2016<br/>1 day ago
                                                    </div>
                                            </div>
                                            <div className="col-sm-9">
                                                <div className="review-block-rate">
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-warning btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-grey btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-grey btn-xs"
                                                            aria-label="Left Align">
                                                        <span className="glyphicon glyphicon-star"
                                                              aria-hidden="true"></span>
                                                    </button>
                                                </div>
                                                <div className="review-block-title">this was nice in buy</div>
                                                <div className="review-block-description">this was nice in buy. this was
                                                    nice in buy. this was nice in buy. this was nice in buy this was
                                                    nice in buy this was nice in buy this was nice in buy this was nice
                                                    in buy
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Profile;