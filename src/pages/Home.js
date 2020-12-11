import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../includes/Navbar'
import NavbarMobile from '../includes/NavbarMobile'
import LoadAllJS from '../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../includes/Footer'


export class Home extends Component {
    
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
            {/* {process.env.REACT_APP_APP_URL} */}

          {/* <LoadAllJS /> */}

        <div>
            {/* Loader*/}
            {/* <div id="page-preloader"><span className="spinner border-t_second_b border-t_prim_a" /></div> */}
            {/* Loader end*/}
            <div className="l-theme animated-css animsition" data-header="sticky" data-header-top={200}>
                {/* MOBILE NAV */}
                 <NavbarMobile />
                {/* MOBILE NAV */}

                <div data-canvas="container">
                

                {/* HEADER */}
                <Navbar />
                {/* HEADER */}


                {/* end .header*/}
                <div className="main-slider slider-pro" id="main-slider" data-slider-width="100%" data-slider-height="700px" data-slider-arrows="false" data-slider-buttons="false">
                    <div className="sp-slides">
                    {/* Slide 1*/}
                    <div className="main-slider__slide sp-slide"><img className="sp-image" src="https://pro-theme.com/html/revus/assets/media/content/b-main-slider/bg-1.jpg" alt="slider" />
                        <div className="sp-layer" data-width="100%" data-show-transition="left" data-hide-transition="left" data-show-duration={800} data-show-delay={400} data-hide-delay={400}>
                        <div className="main-slider__wrap">
                            <div className="main-slider__slogan">luxury unleashed</div>
                            <div className="main-slider__title">MAZDA<span className="main-slider__title_lg text-right">CX3<span className="main-slider__title">’19</span></span>
                            </div>
                            <div className="text-center">
                            <div className="main-slider__price"><span className="main-slider__price_up">$</span>249<span className="main-slider__price_down">/m</span><span className="main-slider__price_info">for 24 months</span></div>
                            </div>
                            <div className="text-right"><a className="main-slider__link" href="blog-post.html">learn more</a></div>
                        </div>
                        </div>
                    </div>
                    {/* Slide 2*/}
                    <div className="main-slider__slide-2 sp-slide"><img className="sp-image" src="assets/media/content/b-main-slider/bg-2.jpg" alt="slider" />
                        <div className="sp-layer" data-width="100%" data-show-transition="left" data-hide-transition="left" data-show-duration={800} data-show-delay={400} data-hide-delay={400}>
                        <div className="main-slider__wrap">
                            <div className="main-slider__slogan">expert auto services</div>
                            <div className="main-slider__title">Premium
                            <br />Cars Dealers</div>
                            <div className="text-right"><a className="main-slider__link" href="blog-post.html">learn more</a></div>
                        </div>
                        </div>
                        <div className="sp-layer" data-width="100%" data-show-transition="left" data-hide-transition="left" data-show-duration={1500} data-show-delay={800} data-hide-delay={400}><img className="main-slider__figure-1 img-fluid" src="assets/media/content/b-main-slider/bg-2_item-1.png" alt="foto" /></div>
                        <div className="sp-layer" data-width="100%" data-show-transition="right" data-hide-transition="right" data-show-duration={2000} data-show-delay={1200} data-hide-delay={400}><img className="main-slider__figure-2 img-fluid" src="assets/media/content/b-main-slider/bg-2_item-2.png" alt="foto" /></div>
                    </div>
                    </div>
                </div>
                {/* end .main-slider*/}
                <div className="section-area bg-light">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="b-find">
                            <ul className="b-find-nav nav nav-tabs" id="findTab" role="tablist">
                            <li className="b-find-nav__item nav-item"><a className="b-find-nav__link nav-link active" id="tab-allCar" data-toggle="tab" href="#content-allCar" role="tab" aria-controls="content-allCar" aria-selected="true">All Car Types</a></li>
                            <li className="b-find-nav__item nav-item"><a className="b-find-nav__link nav-link" id="tab-newCars" data-toggle="tab" href="#content-newCars" role="tab" aria-controls="content-newCars" aria-selected="false">New Cars</a></li>
                            <li className="b-find-nav__item nav-item"><a className="b-find-nav__link nav-link" id="tab-usedCars" data-toggle="tab" href="#content-usedCars" role="tab" aria-controls="content-usedCars" aria-selected="false">Used Cars</a></li>
                            </ul>
                            <div className="b-find-content tab-content" id="findTabContent">
                            <div className="tab-pane fade show active" id="content-allCar">
                                <form className="b-find__form">
                                <div className="b-find__row">
                                    <div className="b-find__main">
                                    <div className="b-find__inner">
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">01</span> Select Make</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Audi</option>
                                            <option>BMV</option>
                                            <option>Opel</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">02</span> Select a Model</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Model 1</option>
                                            <option>Model 2</option>
                                            <option>Model 3</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">03</span> Price Range</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Max $5000</option>
                                            <option>Max $15000</option>
                                            <option>Max $25000</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <button className="b-find__btn btn btn-primary">Search</button>
                                </div>
                                <div className="b-find__checkbox-group"><span className="b-find__checkbox-item">
                                    <input className="forms__check" id="newCars" type="checkbox" defaultChecked="checked" />
                                    <label className="forms__label forms__label-check" htmlFor="newCars">New Cars</label></span><span className="b-find__checkbox-item">
                                    <input className="forms__check" id="usedCars" type="checkbox" />
                                    <label className="forms__label forms__label-check" htmlFor="usedCars">Used Cars</label></span></div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="content-newCars">
                                <form className="b-find__form">
                                <div className="b-find__row">
                                    <div className="b-find__main">
                                    <div className="b-find__inner">
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">01</span> Select Make</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Audi</option>
                                            <option>BMV</option>
                                            <option>Opel</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">02</span> Select a Model</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Model 1</option>
                                            <option>Model 2</option>
                                            <option>Model 3</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">03</span> Price Range</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Max $5000</option>
                                            <option>Max $15000</option>
                                            <option>Max $25000</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <button className="b-find__btn btn btn-primary">Search</button>
                                </div>
                                <div className="b-find__checkbox-group"><span className="b-find__checkbox-item">
                                    <input className="forms__check" id="newCars2" type="checkbox" defaultChecked="checked" />
                                    <label className="forms__label forms__label-check" htmlFor="newCars2">New Cars</label></span><span className="b-find__checkbox-item">
                                    <input className="forms__check" id="usedCars2" type="checkbox" />
                                    <label className="forms__label forms__label-check" htmlFor="usedCars2">Used Cars</label></span></div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="content-usedCars">
                                <form className="b-find__form">
                                <div className="b-find__row">
                                    <div className="b-find__main">
                                    <div className="b-find__inner">
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">01</span> Select Make</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Audi</option>
                                            <option>BMV</option>
                                            <option>Opel</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">02</span> Select a Model</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Model 1</option>
                                            <option>Model 2</option>
                                            <option>Model 3</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="b-find__item">
                                        <div className="b-find__label"><span className="b-find__number">03</span> Price Range</div>
                                        <div className="b-find__selector">
                                            <select className="selectpicker" data-width="100%" data-style="ui-select">
                                            <option>Max $5000</option>
                                            <option>Max $15000</option>
                                            <option>Max $25000</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <button className="b-find__btn btn btn-primary">Search</button>
                                </div>
                                <div className="b-find__checkbox-group"><span className="b-find__checkbox-item">
                                    <input className="forms__check" id="newCars3" type="checkbox" defaultChecked="checked" />
                                    <label className="forms__label forms__label-check" htmlFor="newCars3">New Cars</label></span><span className="b-find__checkbox-item">
                                    <input className="forms__check" id="usedCars3" type="checkbox" />
                                    <label className="forms__label forms__label-check" htmlFor="usedCars3">Used Cars</label></span></div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end .b-find*/}
                <section className="b-welcome section-default">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                        <div className="ui-title-slogan">Helps you to find your next car easily</div>
                        <h2 className="ui-title">Welcome to<span className="text-primary"> Revus</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididu et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris aliquip ex ea commodo consequat. Duis aute irure dolorin reprehenderits volupta velit dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                        <p>Non proident sunt ind culpa qudesa officia deserunt mollit anim est laborum. Sed per unde omnis iste natus error sit voluptatem accusantium doloremque laudantium tom eaque ipsa quae ab illo inventore veritatis architecto.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                        <ul className="b-welcome-list list-unstyled d-sm-flex justify-content-around">
                            <li className="b-welcome-list__item flex-fill"><i className="ic flaticon-car" />We Offers Lower
                            <br /> Cars Prices</li>
                            <li className="b-welcome-list__item flex-fill"><i className="ic flaticon-gearbox" />Largest cars
                            <br /> Dealership</li>
                            <li className="b-welcome-list__item flex-fill"><i className="ic flaticon-wrench" />Multipoint Safety
                            <br /> Checks offers</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-welcome*/}
                <section className="section-carousel">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="ui-title-slogan">Helps you to find your next car easily</div>
                        <h2 className="ui-title">Featured<span className="text-primary"> Vehicles</span></h2>
                        </div>
                    </div>
                    </div>
                    <div className="section-carousel__inner bg-dark">
                    <div className="js-slider" data-slick="{&quot;slidesToShow&quot;: 5,  &quot;slidesToScroll&quot;: 5, &quot;infinite&quot;: true, &quot;responsive&quot;: [{&quot;breakpoint&quot;: 1800, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4, &quot;slidesToScroll&quot;: 4}}, {&quot;breakpoint&quot;: 1400, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;slidesToScroll&quot;: 1}}, {&quot;breakpoint&quot;: 1040, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;slidesToScroll&quot;: 1}}, {&quot;breakpoint&quot;: 767, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1}}]}">
                        <div className="b-goods-f b-goods-f_mod-a">
                        <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="https://pro-theme.com/html/revus/assets/media/content/b-goods/375x300/1.jpg" alt="foto" /></a>
                        </div>
                        <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                            <div className="b-goods-f__title"><span>Audi Q2 L35 Quattro</span></div>
                            <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                            <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><i className="ic flaticon-speedometer" /> 35,000km</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-car-1" />Model: 2017</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-gearshift" /> Auto - Petrol</li>
                            </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price bg-primary"><span className="b-goods-f__price-numb">$45,800</span></span>
                            </span>
                            </div>
                        </div>
                        </div>
                        {/* end .b-goods*/}
                        <div className="b-goods-f b-goods-f_mod-a">
                        <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="https://pro-theme.com/html/revus/assets/media/content/b-goods/375x300/2.jpg" alt="foto" /></a>
                        </div>
                        <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                            <div className="b-goods-f__title"><span>Ford Mustang SZ3</span></div>
                            <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                            <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><i className="ic flaticon-speedometer" /> 35,000km</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-car-1" />Model: 2017</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-gearshift" /> Auto - Petrol</li>
                            </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price bg-primary"><span className="b-goods-f__price-numb">$30,480</span></span>
                            </span>
                            </div>
                        </div>
                        </div>
                        {/* end .b-goods*/}
                        <div className="b-goods-f b-goods-f_mod-a">
                        <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/375x300/3.jpg" alt="foto" /></a>
                        </div>
                        <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                            <div className="b-goods-f__title"><span>Mercedes Benz C Class</span></div>
                            <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                            <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><i className="ic flaticon-speedometer" /> 35,000km</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-car-1" />Model: 2017</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-gearshift" /> Auto - Petrol</li>
                            </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price bg-primary"><span className="b-goods-f__price-numb">$30,480</span></span>
                            </span>
                            </div>
                        </div>
                        </div>
                        {/* end .b-goods*/}
                        <div className="b-goods-f b-goods-f_mod-a">
                        <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/375x300/4.jpg" alt="foto" /></a>
                        </div>
                        <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                            <div className="b-goods-f__title"><span>Skoda KodiaQ 2019</span></div>
                            <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                            <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><i className="ic flaticon-speedometer" /> 35,000km</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-car-1" />Model: 2017</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-gearshift" /> Auto - Petrol</li>
                            </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price bg-primary"><span className="b-goods-f__price-numb">$30,480</span></span>
                            </span>
                            </div>
                        </div>
                        </div>
                        {/* end .b-goods*/}
                        <div className="b-goods-f b-goods-f_mod-a">
                        <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/375x300/1.jpg" alt="foto" /></a>
                        </div>
                        <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                            <div className="b-goods-f__title"><span>Audi Q2 L35 Quattro</span></div>
                            <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                            <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><i className="ic flaticon-speedometer" /> 35,000km</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-car-1" />Model: 2017</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-gearshift" /> Auto - Petrol</li>
                            </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price bg-primary"><span className="b-goods-f__price-numb">$45,800</span></span>
                            </span>
                            </div>
                        </div>
                        </div>
                        {/* end .b-goods*/}
                        <div className="b-goods-f b-goods-f_mod-a">
                        <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/375x300/2.jpg" alt="foto" /></a>
                        </div>
                        <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                            <div className="b-goods-f__title"><span>Ford Mustang SZ3</span></div>
                            <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                            <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><i className="ic flaticon-speedometer" /> 35,000km</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-car-1" />Model: 2017</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-gearshift" /> Auto - Petrol</li>
                            </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price bg-primary"><span className="b-goods-f__price-numb">$30,480</span></span>
                            </span>
                            </div>
                        </div>
                        </div>
                        {/* end .b-goods*/}
                        <div className="b-goods-f b-goods-f_mod-a">
                        <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/375x300/3.jpg" alt="foto" /></a>
                        </div>
                        <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                            <div className="b-goods-f__title"><span>Mercedes Benz C Class</span></div>
                            <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                            <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><i className="ic flaticon-speedometer" /> 35,000km</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-car-1" />Model: 2017</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-gearshift" /> Auto - Petrol</li>
                            </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price bg-primary"><span className="b-goods-f__price-numb">$30,480</span></span>
                            </span>
                            </div>
                        </div>
                        </div>
                        {/* end .b-goods*/}
                        <div className="b-goods-f b-goods-f_mod-a">
                        <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/375x300/4.jpg" alt="foto" /></a>
                        </div>
                        <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                            <div className="b-goods-f__title"><span>Skoda KodiaQ 2019</span></div>
                            <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                            <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><i className="ic flaticon-speedometer" /> 35,000km</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-car-1" />Model: 2017</li>
                                <li className="b-goods-f__list-item"><i className="ic flaticon-gearshift" /> Auto - Petrol</li>
                            </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price bg-primary"><span className="b-goods-f__price-numb">$30,480</span></span>
                            </span>
                            </div>
                        </div>
                        </div>
                        {/* end .b-goods*/}
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-12"><a className="section-carousel__btn btn btn-primary" href="#"><i className="ic icon-list" /> View All Cars Listings</a></div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-carousel*/}
                <section className="b-services section-default bg-light">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <ul className="b-services-nav nav" id="servicesTab" role="tablist">
                            <li className="b-services-nav__item nav-item col-lg-6 col-md-4"><a className="b-services-nav__link nav-link active" id="repairing-tab" data-toggle="tab" href="#repairing" role="tab" aria-controls="repairing" aria-selected="true"><span className="b-services-nav__number">01</span><i className="ic flaticon-car-door" /><span className="b-services-nav__info">Parts Repairing</span></a></li>
                            <li className="b-services-nav__item nav-item col-lg-6 col-md-4"><a className="b-services-nav__link nav-link" id="inspection-tab" data-toggle="tab" href="#inspection" role="tab" aria-controls="inspection" aria-selected="false"><span className="b-services-nav__number">02</span><i className="ic flaticon-plunger" /><span className="b-services-nav__info">Car Inspection</span></a></li>
                            <li className="b-services-nav__item nav-item col-lg-6 col-md-4"><a className="b-services-nav__link nav-link" id="trade-tab" data-toggle="tab" href="#trade" role="tab" aria-controls="trade" aria-selected="false"><span className="b-services-nav__number">03</span><i className="ic flaticon-car-2" /><span className="b-services-nav__info">Vehicle Trade-In</span></a></li>
                            <li className="b-services-nav__item nav-item col-lg-6 col-md-4"><a className="b-services-nav__link nav-link" id="painting-tab" data-toggle="tab" href="#painting" role="tab" aria-controls="painting" aria-selected="false"><span className="b-services-nav__number">04</span><i className="ic flaticon-paint-roller" /><span className="b-services-nav__info">Auto Painting</span></a></li>
                            <li className="b-services-nav__item nav-item col-lg-6 col-md-4"><a className="b-services-nav__link nav-link" id="financing-tab" data-toggle="tab" href="#financing" role="tab" aria-controls="financing" aria-selected="false"><span className="b-services-nav__number">05</span><i className="ic flaticon-money" /><span className="b-services-nav__info">Auto Financing</span></a></li>
                            <li className="b-services-nav__item nav-item col-lg-6 col-md-4"><a className="b-services-nav__link nav-link" id="delivery-tab" data-toggle="tab" href="#delivery" role="tab" aria-controls="delivery" aria-selected="false"><span className="b-services-nav__number">06</span><i className="ic flaticon-car-4" /><span className="b-services-nav__info">Vehicle Delivery</span></a></li>
                        </ul>
                        </div>
                        <div className="col-lg-6">
                        <div className="b-services__main">
                            <div className="ui-title-slogan">Helps you to find your next car easily</div>
                            <h2 className="ui-title">Services We<span className="text-primary"> Offers</span></h2>
                            <div className="b-services-content tab-content" id="servicesTabContent">
                            <div className="b-services-content__item tab-pane fade show active" id="repairing" role="tabpanel" aria-labelledby="repairing-tab"><img className="img-fluid" src="assets/media/content/b-services/1.jpg" alt="foto" />
                                <h3 className="b-services-content__title ui-title-sm">Parts Repairing</h3>
                                <p>Edipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin reprehenderits. Non proident sunt in culpa qudesa officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="b-services-content__item tab-pane fade" id="inspection" role="tabpanel" aria-labelledby="inspection-tab"><img className="img-fluid" src="assets/media/content/b-services/1.jpg" alt="foto" />
                                <h3 className="b-services-content__title ui-title-sm">Car Inspection</h3>
                                <p>Edipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin reprehenderits. Non proident sunt in culpa qudesa officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="b-services-content__item tab-pane fade" id="trade" role="tabpanel" aria-labelledby="trade-tab"><img className="img-fluid" src="assets/media/content/b-services/1.jpg" alt="foto" />
                                <h3 className="b-services-content__title ui-title-sm">Vehicle Trade-In</h3>
                                <p>Edipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin reprehenderits. Non proident sunt in culpa qudesa officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="b-services-content__item tab-pane fade" id="painting" role="tabpanel" aria-labelledby="painting-tab"><img className="img-fluid" src="assets/media/content/b-services/1.jpg" alt="foto" />
                                <h3 className="b-services-content__title ui-title-sm">Auto Painting</h3>
                                <p>Edipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin reprehenderits. Non proident sunt in culpa qudesa officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="b-services-content__item tab-pane fade" id="financing" role="tabpanel" aria-labelledby="financing-tab"><img className="img-fluid" src="assets/media/content/b-services/1.jpg" alt="foto" />
                                <h3 className="b-services-content__title ui-title-sm">Auto Financing</h3>
                                <p>Edipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin reprehenderits. Non proident sunt in culpa qudesa officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="b-services-content__item tab-pane fade" id="delivery" role="tabpanel" aria-labelledby="delivery-tab"><img className="img-fluid" src="assets/media/content/b-services/1.jpg" alt="foto" />
                                <h3 className="b-services-content__title ui-title-sm">Vehicle Delivery</h3>
                                <p>Edipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqa Ut enim ad minim veniam, quis nostrud exercitation ullam co laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin reprehenderits. Non proident sunt in culpa qudesa officia deserunt mollit anim id est laborum.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-services*/}
                <section className="b-bnr bg-dark">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                        <div className="b-bnr__main">
                            <h2 className="b-bnr__title">Book your Free Car Inspection</h2>
                            <div className="b-bnr__info">Labore dolore magna aliqua minim ipsum veniam quis nostrud exercitation</div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="b-bnr__second"><a className="btn btn-primary" href="#">get rigistered</a>
                            <div className="b-bnr-contacts">
                            <div className="b-bnr-contacts__info">Call Us For Booking Vehicle</div><a className="b-bnr-contacts__phone" href="tel:+17553028549"><i className="ic icon-call-end text-primary" /> +1 (755) 302-8549</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-bnr*/}
                <div className="section-progress">
                    <div className="container">
                    <ul className="b-progress-list row list-unstyled">
                        <li className="b-progress-list__item col-md-3">
                        <div className="b-progress-list__wrap bg-light"><span className="b-progress-list__name">Vehicles Stock</span><span className="b-progress-list__percent js-chart" data-percent={3874}><span className="js-percent" /></span>
                        </div>
                        </li>
                        <li className="b-progress-list__item col-md-3">
                        <div className="b-progress-list__wrap bg-light"><span className="b-progress-list__name">dealers served</span><span className="b-progress-list__percent js-chart" data-percent={299}><span className="js-percent" /><span>+</span></span>
                        </div>
                        </li>
                        <li className="b-progress-list__item col-md-3">
                        <div className="b-progress-list__wrap bg-light"><span className="b-progress-list__name">Happy Customers</span><span className="b-progress-list__percent js-chart" data-percent={6403}><span className="js-percent" /></span>
                        </div>
                        </li>
                        <li className="b-progress-list__item col-md-3">
                        <div className="b-progress-list__wrap bg-light"><span className="b-progress-list__name">vehicles on sale</span><span className="b-progress-list__percent js-chart" data-percent={1450}><span className="js-percent" /><span>+</span></span>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                {/* end .b-progress*/}
                <section className="b-isotope section-default">
                    <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                        <div className="ui-title-slogan">Helps you to find perfect car</div>
                        <h2 className="ui-title">Our Vehicles<span className="text-primary"> Listing</span></h2>
                        <ul className="b-isotope-filter list-unstyled">
                            <li className="current"><a href data-filter="*">Show All</a></li>
                            <li><a href data-filter=".bmw">BMW</a></li>
                            <li><a href data-filter=".honda">Honda</a></li>
                            <li><a href data-filter=".mercedes">Mercedes</a></li>
                            <li><a href data-filter=".rover">Range Rover</a></li>
                        </ul>
                        </div>
                    </div>
                    <ul className="b-isotope-grid grid list-unstyled row">
                        <li className="grid-sizer col-lg-4 col-md-6" />
                        <li className="b-isotope-grid__item grid-item col-lg-4 col-md-6 web honda">
                        <div className="b-goods-f b-goods-f_dark">
                            <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/360x260/1.jpg" alt="foto" /></a>
                            </div>
                            <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                                <div className="b-goods-f__title"><span>Jaguar GX 490i</span>
                                </div>
                                <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                                <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">35,000km</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">2019</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Manual</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Petrol</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">160 hp</span></li>
                                </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price"><span className="b-goods-f__price-numb">$30,480</span></span>
                                </span>
                            </div>
                            </div>
                        </div>
                        {/* end .b-goods*/}
                        </li>
                        <li className="b-isotope-grid__item grid-item col-lg-4 col-md-6 web bmw">
                        <div className="b-goods-f b-goods-f_dark">
                            <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/360x260/2.jpg" alt="foto" /></a>
                            </div>
                            <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                                <div className="b-goods-f__title"><span className="b-goods-f__label bg-primary">NEW</span><span>Volkswagen Tiguan</span>
                                </div>
                                <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                                <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">35,000km</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">2019</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Manual</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Petrol</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">160 hp</span></li>
                                </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price"><span className="b-goods-f__price-numb">$45,800</span></span>
                                </span>
                            </div>
                            </div>
                        </div>
                        {/* end .b-goods*/}
                        </li>
                        <li className="b-isotope-grid__item grid-item col-lg-4 col-md-6 web honda">
                        <div className="b-goods-f b-goods-f_dark">
                            <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/360x260/3.jpg" alt="foto" /></a>
                            </div>
                            <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                                <div className="b-goods-f__title"><span>Tesla Model RX3</span>
                                </div>
                                <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                                <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">35,000km</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">2019</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Manual</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Petrol</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">160 hp</span></li>
                                </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price"><span className="b-goods-f__price-numb">$18,250</span></span>
                                </span>
                            </div>
                            </div>
                        </div>
                        {/* end .b-goods*/}
                        </li>
                        <li className="b-isotope-grid__item grid-item col-lg-4 col-md-6 web rover">
                        <div className="b-goods-f b-goods-f_dark">
                            <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/360x260/4.jpg" alt="foto" /></a>
                            </div>
                            <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                                <div className="b-goods-f__title"><span>Lexus RC 3500</span>
                                </div>
                                <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                                <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">35,000km</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">2019</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Manual</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Petrol</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">160 hp</span></li>
                                </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price"><span className="b-goods-f__price-numb">$26,080</span></span>
                                </span>
                            </div>
                            </div>
                        </div>
                        {/* end .b-goods*/}
                        </li>
                        <li className="b-isotope-grid__item grid-item col-lg-4 col-md-6 web mercedes">
                        <div className="b-goods-f b-goods-f_dark">
                            <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/360x260/5.jpg" alt="foto" /></a>
                            </div>
                            <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                                <div className="b-goods-f__title"><span>Mercedes SX</span>
                                </div>
                                <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                                <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">35,000km</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">2019</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Manual</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Petrol</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">160 hp</span></li>
                                </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price"><span className="b-goods-f__price-numb">$66,500</span></span>
                                </span>
                            </div>
                            </div>
                        </div>
                        {/* end .b-goods*/}
                        </li>
                        <li className="b-isotope-grid__item grid-item col-lg-4 col-md-6 web bmw">
                        <div className="b-goods-f b-goods-f_dark">
                            <div className="b-goods-f__media">
                            <a href="#"><img className="b-goods-f__img img-scale" src="assets/media/content/b-goods/360x260/6.jpg" alt="foto" /></a>
                            </div>
                            <div className="b-goods-f__main">
                            <div className="b-goods-f__descrip">
                                <div className="b-goods-f__title"><span>Porsche 911 Targa</span>
                                </div>
                                <div className="b-goods-f__info">Magna aliqua enim aduas veniam quis nostrud exercitation ullam laboris aliquip.</div>
                                <ul className="b-goods-f__list list-unstyled">
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">35,000km</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">2019</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Manual</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">Petrol</span></li>
                                <li className="b-goods-f__list-item"><span className="b-goods-f__list-info">160 hp</span></li>
                                </ul>
                            </div>
                            <div className="b-goods-f__sidebar"><span className="b-goods-f__price-group"><span className="b-goods-f__price"><span className="b-goods-f__price-numb">$35,700</span></span>
                                </span>
                            </div>
                            </div>
                        </div>
                        {/* end .b-goods*/}
                        </li>
                    </ul>
                    </div>
                </section>
                {/* end .b-isotope*/}
                <section className="b-steps section-default parallax">
                    <div className="b-steps__inner">
                    <div className="container">
                        <div className="row">
                        <div className="col-12">
                            <div className="ui-title-slogan">Helps you to find perfect car</div>
                            <h2 className="ui-title">How Revus<span className="text-primary"> Works</span></h2>
                            <ul className="b-steps-list list-unstyled row">
                            <li className="b-steps-list__item col-lg"><span className="b-steps-list__number">01</span>
                                <div className="b-steps-list__title">Search Our Inventory</div>
                                <div className="b-steps-list__info">Magna aliqua enim aduas dui veniam quis nostrud exercitation ullam laboris aut aliquip ex consequat.</div>
                            </li>
                            <li className="b-steps-list__item col-lg"><span className="b-steps-list__number">02</span>
                                <div className="b-steps-list__title">Choose The Car You Like</div>
                                <div className="b-steps-list__info">Magna aliqua enim aduas dui veniam quis nostrud exercitation ullam laboris aut aliquip ex consequat.</div>
                            </li>
                            <li className="b-steps-list__item col-lg"><span className="b-steps-list__number">03</span>
                                <div className="b-steps-list__title">Apply For Auto Finance</div>
                                <div className="b-steps-list__info">Magna aliqua enim aduas dui veniam quis nostrud exercitation ullam laboris aut aliquip ex consequat.</div>
                            </li>
                            <li className="b-steps-list__item col-lg"><span className="b-steps-list__number">04</span>
                                <div className="b-steps-list__title">Get Approved &amp; Drive</div>
                                <div className="b-steps-list__info">Magna aliqua enim aduas dui veniam quis nostrud exercitation ullam laboris aut aliquip ex consequat.</div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-steps*/}
                <section className="b-bnr-2 section-default">
                    <div className="b-bnr-2__figure"><img className="b-bnr-2__img img-fluid" src="assets/media/content/b-bnr/1.png" alt="auto" /></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="b-bnr-2__section b-bnr-2__section_first bg-dark">
                            <h2 className="b-bnr-2__title">Are you looking to<br />buy a new car?</h2><a className="b-bnr-2__link" href="#">Start searching our inventory that includes 2000+ cars</a>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="b-bnr-2__section b-bnr-2__section_second bg-primary">
                            <div className="b-bnr-2__title">Are you looking to
                            <br />sell your car?</div><a className="b-bnr-2__link" href="#">Add your vehicle to inventory &amp; reach 3k potential buyers</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-bnr*/}
                <div className="section-goods-vip">
                    <a className="b-goods-vip b-goods-vip_1" href="#">
                    <div className="b-goods-vip__main"><span className="b-goods-vip__label b-goods-vip__label-1 bg-primary">NEW</span>
                        <div className="b-goods-vip__title">AUDI Q2L (2019)</div>
                        <div className="b-goods-vip__subtitle">LUXURTY APART -<span className="b-goods-vip__price"> $499/M</span></div>
                        <ul className="b-goods-vip__list list-unstyled">
                        <li className="b-goods-vip__list-item">2019</li>
                        <li className="b-goods-vip__list-item">Manual</li>
                        <li className="b-goods-vip__list-item">Petrol</li>
                        <li className="b-goods-vip__list-item">661 hp</li>
                        </ul>
                    </div>
                    </a>
                    <a className="b-goods-vip b-goods-vip_2" href="#">
                    <div className="b-goods-vip__main"><span className="b-goods-vip__label b-goods-vip__label-2 bg-primary">As Low As<strong className="b-goods-vip__label_b"> 1.5% APR</strong></span>
                        <div className="b-goods-vip__subtitle">Off-Road King</div>
                        <div className="b-goods-vip__title">JAGUAR I PACE</div>
                        <div className="b-goods-vip__slogan">Limited Time Offer</div>
                    </div>
                    </a>
                    <a className="b-goods-vip b-goods-vip_3" href="#">
                    <div className="b-goods-vip__main">
                        <div className="b-goods-vip__subtitle">2019 Models</div>
                        <div className="b-goods-vip__title">All Brands Cars<span className="b-goods-vip__label b-goods-vip__label-3 bg-primary">MORE POWER</span></div>
                        <div className="b-goods-vip__slogan">PREMIUM LUXURY</div>
                    </div>
                    </a>
                </div>
                {/* end .b-goods*/}
                <section className="section-team section-default">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="text-center">
                            <div className="ui-title-slogan">Helps you to find perfect car</div>
                            <h2 className="ui-title">Our Sales<span className="text-primary"> Team</span></h2>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                        <div className="b-team">
                            <div className="b-team__media">
                            <div className="b-team__img"><img className="img-fluid" src="assets/media/content/b-team/1.jpg" alt="Foto" /></div>
                            <ul className="b-team__soc list-unstyled">
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-facebook" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-twitter" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-google-plus-g" /></a></li>
                            </ul>
                            </div>
                            <div className="b-team__inner bg-dark">
                            <div className="b-team__name">Alex Leeman</div>
                            <div className="b-team__category">Director</div>
                            </div>
                            <div className="b-team__footer"><a className="b-team__phone" href="tel:+17553028549"><i className="ic text-primary icon-call-end" /> +1 755 302 8549</a></div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="b-team">
                            <div className="b-team__media">
                            <div className="b-team__img"><img className="img-fluid" src="assets/media/content/b-team/2.jpg" alt="Foto" /></div>
                            <ul className="b-team__soc list-unstyled">
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-facebook" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-twitter" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-google-plus-g" /></a></li>
                            </ul>
                            </div>
                            <div className="b-team__inner bg-dark">
                            <div className="b-team__name">Diago Johnson</div>
                            <div className="b-team__category">Sales Manager</div>
                            </div>
                            <div className="b-team__footer"><a className="b-team__phone" href="tel:+17553028549"><i className="ic text-primary icon-call-end" /> +1 755 302 8549</a></div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="b-team">
                            <div className="b-team__media">
                            <div className="b-team__img"><img className="img-fluid" src="assets/media/content/b-team/3.jpg" alt="Foto" /></div>
                            <ul className="b-team__soc list-unstyled">
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-facebook" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-twitter" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-google-plus-g" /></a></li>
                            </ul>
                            </div>
                            <div className="b-team__inner bg-dark">
                            <div className="b-team__name">Sophia Lauren</div>
                            <div className="b-team__category">Co-Founder</div>
                            </div>
                            <div className="b-team__footer"><a className="b-team__phone" href="tel:+17553028549"><i className="ic text-primary icon-call-end" /> +1 755 302 8549</a></div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="b-team">
                            <div className="b-team__media">
                            <div className="b-team__img"><img className="img-fluid" src="assets/media/content/b-team/4.jpg" alt="Foto" /></div>
                            <ul className="b-team__soc list-unstyled">
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-facebook" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-twitter" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-google-plus-g" /></a></li>
                            </ul>
                            </div>
                            <div className="b-team__inner bg-dark">
                            <div className="b-team__name">William Henry</div>
                            <div className="b-team__category">Marketing</div>
                            </div>
                            <div className="b-team__footer"><a className="b-team__phone" href="tel:+17553028549"><i className="ic text-primary icon-call-end" /> +1 755 302 8549</a></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-team*/}
                <section className="section-reviews section-default parallax area-bg area-bg_dark">
                    <div className="area-bg__inner">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                            <div className="ui-title-slogan">Helps you to find perfect car</div>
                            <h2 className="ui-title">Customer Reviews</h2><span className="section-reviews__decor">“</span>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12">
                            <div className="b-reviews-slider js-slider" data-slick="{&quot;slidesToShow&quot;: 3,  &quot;slidesToScroll&quot;: 3, &quot;centerMode&quot;: true, &quot;arrows&quot;: false, &quot;dots&quot;: true, &quot;responsive&quot;: [{&quot;breakpoint&quot;: 1400, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2, &quot;slidesToScroll&quot;: 2, &quot;centerMode&quot;: false}}, {&quot;breakpoint&quot;: 768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1, &quot;centerMode&quot;: false}}]}">
                            <div className="b-reviews">
                                <blockquote className="b-reviews__blockquote">
                                <div className="b-reviews__wrap">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqua. Ut enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit.</p>
                                </div>
                                <cite className="b-reviews__cite" title="Blockquote Title"><span className="b-reviews__inner"><span className="b-reviews__name">Alexa Cathy</span><span className="b-reviews__category">Customer</span></span><span className="b-reviews__author"><img className="img-fluid" src="assets/media/content/b-reviews/face-1.jpg" alt="foto" /></span></cite>
                                </blockquote>
                            </div>
                            <div className="b-reviews">
                                <blockquote className="b-reviews__blockquote">
                                <div className="b-reviews__wrap">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqua uat enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit. Slyly babbled much partook this much in in thus the sauc.</p>
                                </div>
                                <cite className="b-reviews__cite" title="Blockquote Title"><span className="b-reviews__inner"><span className="b-reviews__name">Tina Olivia</span><span className="b-reviews__category">Customer</span></span><span className="b-reviews__author"><img className="img-fluid" src="assets/media/content/b-reviews/face-2.jpg" alt="foto" /></span></cite>
                                </blockquote>
                            </div>
                            <div className="b-reviews">
                                <blockquote className="b-reviews__blockquote">
                                <div className="b-reviews__wrap">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqua. Ut enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit.</p>
                                </div>
                                <cite className="b-reviews__cite" title="Blockquote Title"><span className="b-reviews__inner"><span className="b-reviews__name">Alexa Cathy</span><span className="b-reviews__category">Customer</span></span><span className="b-reviews__author"><img className="img-fluid" src="assets/media/content/b-reviews/face-3.jpg" alt="foto" /></span></cite>
                                </blockquote>
                            </div>
                            <div className="b-reviews">
                                <blockquote className="b-reviews__blockquote">
                                <div className="b-reviews__wrap">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqua. Ut enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit.</p>
                                </div>
                                <cite className="b-reviews__cite" title="Blockquote Title"><span className="b-reviews__inner"><span className="b-reviews__name">Alexa Cathy</span><span className="b-reviews__category">Customer</span></span><span className="b-reviews__author"><img className="img-fluid" src="assets/media/content/b-reviews/face-1.jpg" alt="foto" /></span></cite>
                                </blockquote>
                            </div>
                            <div className="b-reviews">
                                <blockquote className="b-reviews__blockquote">
                                <div className="b-reviews__wrap">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqua uat enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit. Slyly babbled much partook this much in in thus the sauc.</p>
                                </div>
                                <cite className="b-reviews__cite" title="Blockquote Title"><span className="b-reviews__inner"><span className="b-reviews__name">Tina Olivia</span><span className="b-reviews__category">Customer</span></span><span className="b-reviews__author"><img className="img-fluid" src="assets/media/content/b-reviews/face-2.jpg" alt="foto" /></span></cite>
                                </blockquote>
                            </div>
                            <div className="b-reviews">
                                <blockquote className="b-reviews__blockquote">
                                <div className="b-reviews__wrap">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqua. Ut enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit.</p>
                                </div>
                                <cite className="b-reviews__cite" title="Blockquote Title"><span className="b-reviews__inner"><span className="b-reviews__name">Alexa Cathy</span><span className="b-reviews__category">Customer</span></span><span className="b-reviews__author"><img className="img-fluid" src="assets/media/content/b-reviews/face-3.jpg" alt="foto" /></span></cite>
                                </blockquote>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-reviews*/}
                <section className="section-news section-default">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="text-center">
                            <div className="ui-title-slogan">Helps you to find perfect car</div>
                            <h2 className="ui-title">News &amp;<span className="text-primary"> Articles</span></h2>
                        </div>
                        </div>
                    </div>
                    <div className="b-post-group-2">
                        <div className="row">
                        <div className="col-md-4">
                            <section className="b-post b-post-1 clearfix">
                            <div className="entry-media">
                                <a href="#"><img className="img-fluid" src="assets/media/content/b-posts/360x280/1.jpg" alt="Foto" /></a>
                            </div>
                            <div className="entry-main">
                                <div className="entry-header">
                                <div className="entry-meta"><span className="entry-meta__item"><a className="entry-meta__link" href="blog-main.html">25 DEC 2018</a></span><span className="entry-meta__item"><a className="entry-meta__link" href="blog-main.html">BY ADMIN</a></span></div>
                                <h2 className="entry-title">Top 10 most Fuel-Efficient cars on the roads</h2>
                                </div>
                                <div className="entry-content">
                                <p>Edipisicing eiusmod tempor incididunt labore dolore magna aliqa ust enim ad minim veniams quis nostrud citation ullam co laboris nisi ut aliquip.</p>
                                </div>
                                <div className="entry-footer"><a className="entry-link btn-link" href="#">READ article</a><span className="entry-views"><i className="ic icon-speech" /> 52</span></div>
                            </div>
                            </section>
                            {/* end .post*/}
                        </div>
                        <div className="col-md-4">
                            <section className="b-post b-post-1 clearfix">
                            <div className="entry-media">
                                <a href="#"><img className="img-fluid" src="assets/media/content/b-posts/360x280/2.jpg" alt="Foto" /></a>
                            </div>
                            <div className="entry-main">
                                <div className="entry-header">
                                <div className="entry-meta"><span className="entry-meta__item"><a className="entry-meta__link" href="blog-main.html">25 DEC 2018</a></span><span className="entry-meta__item"><a className="entry-meta__link" href="blog-main.html">BY ADMIN</a></span></div>
                                <h2 className="entry-title">How to increase Auto Sales: A Dealers’ Guide</h2>
                                </div>
                                <div className="entry-content">
                                <p>Edipisicing eiusmod tempor incididunt labore dolore magna aliqa ust enim ad minim veniams quis nostrud citation ullam co laboris nisi ut aliquip.</p>
                                </div>
                                <div className="entry-footer"><a className="entry-link btn-link" href="#">READ article</a><span className="entry-views"><i className="ic icon-speech" /> 52</span></div>
                            </div>
                            </section>
                            {/* end .post*/}
                        </div>
                        <div className="col-md-4">
                            <section className="b-post b-post-1 clearfix">
                            <div className="entry-media">
                                <a href="#"><img className="img-fluid" src="assets/media/content/b-posts/360x280/3.jpg" alt="Foto" /></a>
                            </div>
                            <div className="entry-main">
                                <div className="entry-header">
                                <div className="entry-meta"><span className="entry-meta__item"><a className="entry-meta__link" href="blog-main.html">25 DEC 2018</a></span><span className="entry-meta__item"><a className="entry-meta__link" href="blog-main.html">BY ADMIN</a></span></div>
                                <h2 className="entry-title">We have vehicle with safety checks and licensed</h2>
                                </div>
                                <div className="entry-content">
                                <p>Edipisicing eiusmod tempor incididunt labore dolore magna aliqa ust enim ad minim veniams quis nostrud citation ullam co laboris nisi ut aliquip.</p>
                                </div>
                                <div className="entry-footer"><a className="entry-link btn-link" href="#">READ article</a><span className="entry-views"><i className="ic icon-speech" /> 52</span></div>
                            </div>
                            </section>
                            {/* end .post*/}
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="b-bnr-3 bg-dark">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h2 className="b-bnr-3__title ui-tilte">Buy Sell Your Car Quickly &amp; Easily with Revus</h2>
                        <div className="b-bnr-3__info">Labore dolore magna aliqua minim ipsum sed ipsumveniam quis nostrud exercitation</div><a className="b-bnr-3__btn btn btn-primary" href="#">get rigistered</a>
                        </div>
                    </div>
                    </div>
                </section>
                {/* end .b-bnr*/}
                <div className="b-gallery js-slider" data-slick="{&quot;slidesToShow&quot;: 8, &quot;arrows&quot;: false, &quot;autoplay&quot;: true,  &quot;slidesToScroll&quot;: 1, &quot;responsive&quot;: [{&quot;breakpoint&quot;: 1400, &quot;settings&quot;: {&quot;slidesToShow&quot;: 6, &quot;slidesToScroll&quot;: 3}}, {&quot;breakpoint&quot;: 768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3, &quot;slidesToScroll&quot;: 1}}]}">
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/1.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/2.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/3.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/4.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/5.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/6.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/7.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/8.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/1.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/2.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/3.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/4.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/5.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/6.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/7.jpg" alt="foto" /></div>
                    <div className="b-gallery__item"><img className="img-fluid" src="assets/media/content/b-gallery/240x200/8.jpg" alt="foto" /></div>
                </div>
                {/* ============FOOTER============ */}
                <Footer />
                {/* ============FOOTER============ */}
                </div>
            </div>
        {/* end layout-theme*/}
        </div>

      </body>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
