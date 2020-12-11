import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../../includes/Navbar'
import NavbarMobile from '../../includes/NavbarMobile'
import LoadAllJS from '../../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../../includes/Footer'
import BreadCrumb from '../../includes/BreadCrumb'

export class Deposit extends Component {
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
                    <h1>Deposit Charge</h1>
                    </center>
                    <section>
                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="auctn_font1">Deposit Charge</h4>
                                <div className="auctn_account_box1">
                                    <p>- USD 300$ deposit must be cahrged to upgrade your membership.</p>
                                    <p>- When you want to cancel your membership, the remaining deposit can be refunded by 100%.</p>
                                    <p>- However, if you cancel your purchase, 10% or USD 150$ of the winning price will be paid as a fine from the deposit.</p>
                                    <p>- You can pay the deposit on both account transfer and credit card.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                    <div className="row mt-5">
                            <div className="col-md-12">
                                <h4 className="auctn_font1">Payment Method</h4>

                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="card">
                                            <div className="card-body p-5">
                                                <h5 className="auctn_font2">Paypal / Credit Card</h5>
                                                <p>You can pay by credit card even if you don't have a PayPal account. <span> <img src="https://img21.shop-pro.jp/PA01346/389/etc/paypal-btn.png" alt="" style={{height: '33px', float: 'right'}} /> </span> </p>
                                                <img src="https://image.autowini.com/cdn/auction/web/images/content/img_payment.png" height="37px" alt=""/>
                                            </div>
                                            <div className="card-body p-5 auctn_mt-3">
                                                <h5 className="auctn_font2">Wiretransfer</h5>
                                                <p>
                                                    - Wiretransfer takes time to check. <br/>
                                                    - Please enter your ID in the memo when you proceed with the account transfer.Otherwise, the check will take additional time.<br/>
                                                    - For quick confirmation, please send the copy of receipt to the staff of CS team.
                                                </p>
                                            </div>
                                            <div className="card-body p-5 auctn_mt-4">
                                                <h5 className="auctn_font2">BANK ACCOUNT FOR T/T</h5>
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td width="250px"><b>BENEFICIARY'S NAME</b></td>
                                                            <td>AUTOWINI INC</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="250px"><b>BENEFICIARY'S ADDRESS</b></td>
                                                            <td>8th floor, IB TOWER BLDG, NAMBUSUNHWAN_RO 350-gil SEOCHO-GU, SEOUL,SOUTH KOREA</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="250px"><b>BANK ACCOUNT No.</b></td>
                                                            <td>537-041818-56-00020</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="250px"><b>BANK NAME</b></td>
                                                            <td>INDUSTRIAL BANK OF KOREA</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="250px"><b>SWIFT CODE</b></td>
                                                            <td>IBKOKRSEXXX</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="250px"><b>BANK ADDRESS</b></td>
                                                            <td>50, ULCHIRO 2-GA, CHUNG-GU, SEOUL, KOREA</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4">
                                        <div className="card">
                                            <div className="card-body p-5">
                                                <h5 className="auctn_font2">Current status of my deposit</h5>
                                                <hr/>
                                                <div className="lh2">
                                                    <p>Minimum Deposit <span className="float-right">USD <b>300</b></span></p>
                                                    <p>Current Deposit <span className="float-right">USD <b>0</b></span></p>
                                                </div>
                                                <hr/>
                                                <p>Required Amount <span className="auctn_font3 float-right">USD 300</span></p>
                                            </div>
                                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Deposit)
