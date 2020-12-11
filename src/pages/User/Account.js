import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../../includes/Navbar'
import NavbarMobile from '../../includes/NavbarMobile'
import LoadAllJS from '../../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../../includes/Footer'
import BreadCrumb from '../../includes/BreadCrumb'

export class Account extends Component {

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
                    <h1>My Information</h1>
                    </center>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h4 className="auctn_account_shead auctn_font1">Basic <span>Required Information</span></h4>
                        
                            <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Contact</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <select className="form-control">
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary auctn_mainbutton">Update</button>
                            </form>


                        </div>
                        <div className="col-md-6">
                            <h4 className="auctn_account_shead auctn_font1">Detail Information <span>Membership Upgrade Information</span></h4>
                            <form>
                            <div className="form-group">
                                <label>Passport Number (Optional)</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Physical Address</label>
                                <textarea cols="30" rows="3" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Consignee Information</label>
                                <textarea cols="30" rows="5" className="form-control"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary auctn_mainbutton">Update</button>
                            </form>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Account)
