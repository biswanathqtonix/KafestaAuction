import React, { Component } from 'react'
import Navbar from '../includes/Navbar'
import NavbarMobile from '../includes/NavbarMobile'
import LoadAllJS from '../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../includes/Footer'
import BreadCrumb from '../includes/BreadCrumb'


export default class BlankPage extends Component {

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
            <BreadCrumb pageName="Blank Page" />
                <main>
                    <div className="section-default bg-light">
                        <h1>Hello World</h1>
                    </div>
                </main>
            <Footer />
            </div>
            </div>
            </body>
        )
    }
}
