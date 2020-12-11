import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../../includes/Navbar'
import NavbarMobile from '../../includes/NavbarMobile'
import LoadAllJS from '../../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../../includes/Footer'
import BreadCrumb from '../../includes/BreadCrumb'

export class UploadInfo extends Component {
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
                    <h1>Upload Your Information</h1>
                    </center>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h4 className="auctn_account_shead auctn_font1">Upload ID Card</h4>
                            <div className="">
                                    <p className="auctn_attentn"><img src="https://image.autowini.com/cdn/auction/web/images/content/ico_tip_red.png" alt=""/> Attention</p>
                                    <p>- Auctionwini only accept formal ID card issued by government</p>
                                    <p>- ID must include an image of your face.</p>
                                    <p>- We recommend uploading a passport or driver's license.</p>
                            </div>
                            <div className="auctn_upload_box">
                                <p>
                                    <img src="https://image.autowini.com/cdn/auction/web/images/content/ico_card.png" alt="" />
                                    Please upload Photo ID.
                                </p>
                            </div>
                            <form>
                            <button type="submit" className="btn btn-primary auctn_mainbutton mt-2">Click here to upload</button>
                            </form>


                        </div>
                        <div className="col-md-6">
                            <h4 className="auctn_account_shead auctn_font1">Detail Information<span>Please fill in your physical address.</span></h4>
                            <form>
                            <div className="form-group">
                                <label>Passport Number (Optional)</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Physical Address</label>
                                <textarea cols="30" rows="4" className="form-control"></textarea>
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

export default connect(mapStateToProps, mapDispatchToProps)(UploadInfo)
