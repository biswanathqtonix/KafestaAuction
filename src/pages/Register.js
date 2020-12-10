import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../includes/Navbar'
import NavbarMobile from '../includes/NavbarMobile'
import LoadAllJS from '../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../includes/Footer'
import BreadCrumb from '../includes/BreadCrumb'

import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";


export class Register extends Component {

    // componentDidMount(){
    //     // loadjs('https://code.jquery.com/jquery-3.3.1.min.js', () => {});
    //     loadjs('https://code.jquery.com/jquery-migrate-1.4.1.min.js', () => {});
    //     loadjs('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', () => {});
    //     loadjs('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/switcher/js/dmss.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/libs/bootstrap-select.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/magnific-popup/jquery.magnific-popup.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/headers/slidebar.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/headers/header.js', () => {});
    //     // loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/jqBootstrapValidation.js', () => {});
    //     // loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/contact_me.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/flowplayer/flowplayer.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/isotope/isotope.pkgd.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/isotope/imagesLoaded.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/rendro-easy-pie-chart/jquery.easypiechart.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/rendro-easy-pie-chart/jquery.waypoints.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/scrollreveal/scrollreveal.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/ofi.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/slider-pro/jquery.sliderPro.min.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/slick/slick.js', () => {});
    //     loadjs(process.env.REACT_APP_APP_URL+'assets/js/custom.js', () => {});
    //     window.scrollTo(0,0);
    // }

    render() {
        return (
            <body className="page">
            {/* <LoadAllJS /> */}
            {/* Loader*/}
            {/* <div id="page-preloader"><span className="spinner border-t_second_b border-t_prim_a" /></div> */}
            {/* Loader end*/}
            <div className="l-theme animated-css animsition" data-header="sticky" data-header-top={200}>
            {/* ============MOBILE NAV============ */}
            <NavbarMobile />
            {/* ============MOBILE NAV============ */}
            <div data-canvas="container">
            {/* ============HEADER============ */}
            <Navbar />
            {/* ============HEADER============ */}                               
            <main>
                                    
                                    
                                    
            <div className="section-default bg-light auctn_mt-3">
                <div className="container col-md-4 card">
                    <center>
                        <img className="normal-logo" src="assets/media/general/logo.png" className="mt-4" alt="logo" />
                    </center>
                    <form className="mt-3">
                        <div className="form-group">
                            <input className="form-control" id="user-name" type="text" name="user-name" placeholder="email" required="required" />   
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="user-name" type="text" name="user-name" placeholder="name" required="required" />   
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="user-name" type="text" name="user-name" placeholder="contact" required="required" />   
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                            <option>Select Country</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="form-control" id="user-name" type="password" name="user-name" placeholder="password" required="required" />
                        </div>
                        <div className="form-group form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" for="exampleRadios1">
                                I agree all statements in <span className="text-primary">Terms of service</span>
                            </label>
                        </div>
                        <button className="btn btn-primary btn-block auctn_mainbutton">Login</button>
                    </form>
                    <p className="mt-3">Have already an account? <span className="text-primary ">Register</span> </p>
                
                   
                    <center><h6>OR</h6></center>
                    
                    <FacebookLoginButton onClick={() => alert("Hello")} />
                    <GoogleLoginButton onClick={() => alert("Hello")} />
                    <div className="mt-4"></div>    
                </div>
            </div>


            </main>
            {/* ============FOOTER============ */}
            <Footer />
            {/* ============FOOTER============ */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)
