import React, { Component } from 'react'
import loadjs from 'loadjs';


export default class LoadAllJS extends Component {

    componentDidMount(){
        loadjs('https://code.jquery.com/jquery-3.3.1.min.js', () => {});
        loadjs('https://code.jquery.com/jquery-migrate-1.4.1.min.js', () => {});
        loadjs('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', () => {});
        loadjs('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/switcher/js/dmss.js', () => {});
        loadjs('http://localhost:3000/assets/libs/bootstrap-select.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/magnific-popup/jquery.magnific-popup.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/headers/slidebar.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/headers/header.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/jqBootstrapValidation.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/contact_me.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/flowplayer/flowplayer.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/isotope/isotope.pkgd.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/isotope/imagesLoaded.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/rendro-easy-pie-chart/jquery.easypiechart.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/rendro-easy-pie-chart/jquery.waypoints.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/scrollreveal/scrollreveal.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/ofi.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/slider-pro/jquery.sliderPro.min.js', () => {});
        loadjs('http://localhost:3000/assets/plugins/slick/slick.js', () => {});
        loadjs('http://localhost:3000/assets/js/custom.js', () => {});
      }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
