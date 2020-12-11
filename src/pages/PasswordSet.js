import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../includes/Navbar'
import NavbarMobile from '../includes/NavbarMobile'
import LoadAllJS from '../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../includes/Footer'
import BreadCrumb from '../includes/BreadCrumb'

export class PasswordSet extends Component {

    componentDidMount(){
        // loadjs('https://code.jquery.com/jquery-3.3.1.min.js', () => {});
        // loadjs('https://code.jquery.com/jquery-migrate-1.4.1.min.js', () => {});
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
        // loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/rendro-easy-pie-chart/jquery.easypiechart.min.js', () => {});
        // loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/rendro-easy-pie-chart/jquery.waypoints.min.js', () => {});
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
                    <center className="mt-4">
                        <h3>Change your password</h3>
                        <p className="pl-3 pr-3">Use at least 8 characters. Choose a longer password for better security.
                        </p>
                        <form className="mt-1">
                            <div className="form-group">
                                <input class="form-control" id="user-name" type="password" name="user-name" placeholder="New Password" required="required" />   
                            </div>
                            <div className="form-group">
                                <input class="form-control" id="user-name" type="password" name="user-name" placeholder="Confirm New Password" required="required" />   
                            </div>
                            <button class="btn btn-primary btn-block auctn_mainbutton">Continue</button>
                        </form>
                        <p className="mt-3">Need Help? <span className="text-primary">Contact us</span></p>
                    </center>
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

export default connect(mapStateToProps, mapDispatchToProps)(PasswordSet)
