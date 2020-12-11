import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../../includes/Navbar'
import NavbarMobile from '../../includes/NavbarMobile'
import LoadAllJS from '../../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../../includes/Footer'
import BreadCrumb from '../../includes/BreadCrumb'

export class MembershipStatus extends Component {

    componentDidMount(){
        loadjs('https://code.jquery.com/jquery-3.3.1.min.js', () => {});
        loadjs('https://code.jquery.com/jquery-migrate-1.4.1.min.js', () => {});
        loadjs('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', () => {});
        loadjs('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/switcher/js/dmss.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/libs/bootstrap-select.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/magnific-popup/jquery.magnific-popup.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/headers/slidebar.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/headers/header.js', () => {});
        // loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/jqBootstrapValidation.js', () => {});
        // loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/contact_me.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/flowplayer/flowplayer.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/isotope/isotope.pkgd.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/isotope/imagesLoaded.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/rendro-easy-pie-chart/jquery.easypiechart.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/rendro-easy-pie-chart/jquery.waypoints.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/scrollreveal/scrollreveal.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/ofi.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/slider-pro/jquery.sliderPro.min.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/slick/slick.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/js/custom.js', () => {});
        window.scrollTo(0,0);
    }

    render() {
        return (
            <body className="page">
            <div className="l-theme animated-css animsition" data-header="sticky" data-header-top={200}>
                <NavbarMobile />
                <div data-canvas="container">
                <Navbar />
                <main>
                <div className="container section-default bg-light auctn_mt-3 auctn_account">
                    <center>
                    <h1>Membership Status</h1>
                    </center>
                    <section>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="auctn_font1">How To Join Live Auction?</h4>
                                <div className="auctn_account_box1">
                                    <p>- To bid for an auction, you need photo ID approval and $300 deposit.</p>
                                    <p>- You can 100% refund the remaining amount, except for the amount paid in penalty</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                    <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="auctn_font1">Membership Upgrade</h4>
                                <div className="row auctn_account_membershipbox">
                                    <div className="col-lg-3">
                                        <h5 className="auctn_font1 mt-5">Your Membership: Basic</h5>
                                        <p className="mt-3 auctn_account_font1">You have completed <span className="text-danger text-bold">Step1</span></p>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3 text-center auctn_account_membershipbox1">
                                                <img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" alt=""/>
                                                <p>Register for free</p>
                                            </div>
                                            <div className="col-md-6 col-lg-3 text-center auctn_account_membershipbox1">
                                                <img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" alt=""/>
                                                <p>ID Card Authentification</p>
                                                <p className="auctn_btn2">Upload ID Photo</p>
                                            </div>
                                            <div className="col-md-6 col-lg-3 text-center auctn_account_membershipbox1">
                                                <img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC_grey.png" alt=""/>
                                                <p>Deposit Charge</p>
                                                <p className="auctn_btn3">Charge My Deposite</p>

                                            </div>
                                            <div className="col-md-6 col-lg-3 text-center auctn_account_membershipbox1">
                                                <img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC_grey.png" alt=""/>
                                                <p>Premium Member</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="auctn_font1">Membership Plans</h4>

                                <div className="row">
                                    <div className="col-md-8">

                                        <div className="row">
                                            <div className="col-4"><h6 className="auctn_plan_h">Benefits</h6></div><div className="col-4"><h6 className="auctn_plan_h">Basic</h6></div><div className="col-4"><h6 className="auctn_plan_h">Premium</h6></div>
                                            <hr/>
                                            <div className="col-4"><h6 className="auctn_plan_s align-items-center">Create Saved Search</h6></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div>
                                            <div className="col-12">&nbsp;</div>
                                            <div className="col-4"><h6 className="auctn_plan_s align-items-center">Create Saved Search</h6></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div>
                                            <div className="col-12">&nbsp;</div>
                                            <div className="col-4"><h6 className="auctn_plan_s align-items-center">Create Saved Search</h6></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div>
                                            <div className="col-12">&nbsp;</div>
                                            <div className="col-4"><h6 className="auctn_plan_s align-items-center">Create Saved Search</h6></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div>
                                            <div className="col-12">&nbsp;</div>
                                            <div className="col-4"><h6 className="auctn_plan_s align-items-center">Create Saved Search</h6></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div>
                                            <div className="col-12">&nbsp;</div>
                                            <div className="col-4"><h6 className="auctn_plan_s align-items-center">Create Saved Search</h6></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div>
                                            <div className="col-12">&nbsp;</div>
                                            <div className="col-4"><h6 className="auctn_plan_s align-items-center">Create Saved Search</h6></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div><div className="col-4"><img src="https://image.autowini.com/cdn/auction/web/images/common/ico_stepC.png" height="30px" alt=""/></div>
                                            
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                    <h6 className="auctn_plan_h">Contact Us</h6>
                                    <p>inquiry@auctionwini.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>
                </main>
                <Footer />
                </div>
            </div>
        </body>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MembershipStatus)
