import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../includes/Navbar'
import NavbarMobile from '../includes/NavbarMobile'
import LoadAllJS from '../includes/LoadAllJS'
import loadjs from 'loadjs';
import Footer from '../includes/Footer'
import BreadCrumb from '../includes/BreadCrumb'



export class About extends Component {

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
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/jqBootstrapValidation.js', () => {});
        loadjs(process.env.REACT_APP_APP_URL+'assets/plugins/contact_me.js', () => {});
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


                {/* ============BreadCrumb============ */}
                <BreadCrumb pageName="About Us" />
                {/* ============BreadCrumb============ */}
                


                <main>
                    <div className="section-default bg-light">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="b-advantages"><i className="b-advantages__ic flaticon-car-repair-check-list" />
                            <div className="b-advantages__title">Easy Financing</div>
                            <div className="b-advantages__info">Edipisicing elit sed eiusmodsul  sed tempor enim min veniam aute nostrud xercitation comsec nsequat duis sintaute irure.</div>
                            </div>
                            {/* end .b-advantages*/}
                        </div>
                        <div className="col-lg-4">
                            <div className="b-advantages active"><i className="b-advantages__ic flaticon-speedometer" />
                            <div className="b-advantages__title">All Brands Cars</div>
                            <div className="b-advantages__info">Edipisicing elit sed eiusmodsul  sed tempor enim min veniam aute nostrud xercitation comsec nsequat duis sintaute irure.</div>
                            </div>
                            {/* end .b-advantages*/}
                        </div>
                        <div className="col-lg-4">
                            <div className="b-advantages"><i className="b-advantages__ic flaticon-car-repair" />
                            <div className="b-advantages__title">Quality Services</div>
                            <div className="b-advantages__info">Edipisicing elit sed eiusmodsul  sed tempor enim min veniam aute nostrud xercitation comsec nsequat duis sintaute irure.</div>
                            </div>
                            {/* end .b-advantages*/}
                        </div>
                        </div>
                    </div>
                    </div>
                    <section className="section-about section-default">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-6">
                            <div className="ui-title-slogan">Helps you to find your next car easily</div>
                            <h2 className="ui-title"><span className="text-primary">Revus</span>  Values &amp; Features</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incid et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris aliquip ex ea commodo consequat duis aute irure dolorin reprehenderits volupta dolore fugiat nulla pariatur excepteur.</p>
                            <ul className="list list-mark-3">
                            <li>We offers lowest auto prices &amp; stress free financing</li>
                            <li>Trusted by millions of people officially dent sunt ind culpa</li>
                            <li>Mollit anim est laborum sed per unde omnis sed ipsum natus</li>
                            <li>Error sit voluptatem accusantium doloremque laudantium</li>
                            <li>Offers auto maintaining services for all customers for lifetime</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* end .b-about*/}
                    <div className="section-progress">
                    <div className="container">
                        <ul className="b-progress-list b-progress-list_mod-a row list-unstyled">
                        <li className="b-progress-list__item col-md-3">
                            <div className="b-progress-list__wrap bg-light"><span className="b-progress-list__name">Vehicles Stock</span><span className="b-progress-list__percent js-chart" data-percent={3874}><span className="js-percent" /></span></div>
                        </li>
                        <li className="b-progress-list__item col-md-3">
                            <div className="b-progress-list__wrap bg-light"><span className="b-progress-list__name">dealers served</span><span className="b-progress-list__percent js-chart" data-percent={299}><span className="js-percent" /><span>+</span></span></div>
                        </li>
                        <li className="b-progress-list__item col-md-3">
                            <div className="b-progress-list__wrap bg-light"><span className="b-progress-list__name">Happy Customers</span><span className="b-progress-list__percent js-chart" data-percent={6403}><span className="js-percent" /></span></div>
                        </li>
                        <li className="b-progress-list__item col-md-3">
                            <div className="b-progress-list__wrap bg-light"><span className="b-progress-list__name">vehicles on sale</span><span className="b-progress-list__percent js-chart" data-percent={1450}><span className="js-percent" /><span>+</span></span></div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    {/* end .b-progress*/}
                    <section className="b-bnr bg-dark b-bnr_mod-a">
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
                            <div className="b-team b-team_mod-a">
                            <div className="b-team__media">
                                <div className="b-team__img"><img className="img-fluid" src="assets/media/content/b-team/1.jpg" alt="Foto" /></div>
                                <ul className="b-team__soc list-unstyled">
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-facebook" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-twitter" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-google-plus-g" /></a></li>
                                </ul><a className="b-team__phone" href="tel:+17553028549"><i className="ic icon-call-end" /> +1 755 302 8549</a>
                            </div>
                            <div className="b-team__inner bg-dark">
                                <div className="b-team__name">Alex Leeman</div>
                                <div className="b-team__category">Director</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="b-team b-team_mod-a">
                            <div className="b-team__media">
                                <div className="b-team__img"><img className="img-fluid" src="assets/media/content/b-team/2.jpg" alt="Foto" /></div>
                                <ul className="b-team__soc list-unstyled">
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-facebook" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-twitter" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-google-plus-g" /></a></li>
                                </ul><a className="b-team__phone" href="tel:+17553028549"><i className="ic icon-call-end" /> +1 755 302 8549</a>
                            </div>
                            <div className="b-team__inner bg-dark">
                                <div className="b-team__name">Diago Johnson</div>
                                <div className="b-team__category">Sales Manager</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="b-team b-team_mod-a">
                            <div className="b-team__media">
                                <div className="b-team__img"><img className="img-fluid" src="assets/media/content/b-team/3.jpg" alt="Foto" /></div>
                                <ul className="b-team__soc list-unstyled">
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-facebook" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-twitter" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-google-plus-g" /></a></li>
                                </ul><a className="b-team__phone" href="tel:+17553028549"><i className="ic icon-call-end" /> +1 755 302 8549</a>
                            </div>
                            <div className="b-team__inner bg-dark">
                                <div className="b-team__name">Sophia Lauren</div>
                                <div className="b-team__category">Co-Founder</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="b-team b-team_mod-a">
                            <div className="b-team__media">
                                <div className="b-team__img"><img className="img-fluid" src="assets/media/content/b-team/4.jpg" alt="Foto" /></div>
                                <ul className="b-team__soc list-unstyled">
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-facebook" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-twitter" /></a></li>
                                <li className="b-team__soc-item"><a className="b-team__soc-link" href="#"><i className="ic fab fa-google-plus-g" /></a></li>
                                </ul><a className="b-team__phone" href="tel:+17553028549"><i className="ic icon-call-end" /> +1 755 302 8549</a>
                            </div>
                            <div className="b-team__inner bg-dark">
                                <div className="b-team__name">William Henry</div>
                                <div className="b-team__category">Marketing</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* end .b-team*/}
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
                    <div className="container">
                    <div className="section-default-sm">
                        <div className="row">
                        <div className="col-lg-6">
                            <section className="section-area">
                            <h2 className="ui-title-inner">Our<span className="text-primary"> Advantages</span></h2>
                            <div className="accordion" id="accordion-1">
                                <div className="card">
                                <div className="card-header" id="headingOne">
                                    <button className="accordion-trigger ui-subtitle" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="ic fas fa-share" />We offer eco-petrol technology cars</button>
                                </div>
                                <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion-1">
                                    <div className="card-body">Edipisicing elit sed do eiusmod tempor incididunt ut labore sed dolore magna Ut enim ad minim veniam, quis nostrud exercitation ullam ipsum laboris nisi ut comsecdo consequat duis aute irure dolorin.</div>
                                </div>
                                </div>
                                <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <button className="accordion-trigger ui-subtitle collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="ic fas fa-share" />How Revus can help you buy a new car?</button>
                                </div>
                                <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion-1">
                                    <div className="card-body">Edipisicing elit sed do eiusmod tempor incididunt ut labore sed dolore magna Ut enim ad minim veniam, quis nostrud exercitation ullam ipsum laboris nisi ut comsecdo consequat duis aute irure dolorin.</div>
                                </div>
                                </div>
                                <div className="card">
                                <div className="card-header" id="headingThree">
                                    <button className="accordion-trigger ui-subtitle collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="ic fas fa-share" />We help to increase auto sales</button>
                                </div>
                                <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion-1">
                                    <div className="card-body">Edipisicing elit sed do eiusmod tempor incididunt ut labore sed dolore magna Ut enim ad minim veniam, quis nostrud exercitation ullam ipsum laboris nisi ut comsecdo consequat duis aute irure dolorin.</div>
                                </div>
                                </div>
                            </div>
                            {/* end .accordion*/}
                            </section>
                        </div>
                        <div className="col-lg-6">
                            <section className="section-reviews-2">
                            <h2 className="ui-title-inner">What Customers<span className="text-primary"> Say</span></h2>
                            <div className="b-reviews-slider-2 js-slider" data-slick="{&quot;arrows&quot;: false, &quot;dots&quot;: true}">
                                <div className="b-reviews-2">
                                <blockquote className="b-reviews-2__blockquote">
                                    <div className="b-reviews-2__wrap bg-light">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqu uat enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit babbled much partook this much sed ipsum in thus the saucy.</p>
                                    </div>
                                    <cite className="b-reviews-2__cite" title="Blockquote Title"><span className="b-reviews-2__name">Tina Olivia</span><span className="b-reviews-2__category">BMW 7 Series owner</span></cite>
                                </blockquote>
                                </div>
                                <div className="b-reviews-2">
                                <blockquote className="b-reviews-2__blockquote">
                                    <div className="b-reviews-2__wrap bg-light">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqu uat enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit babbled much partook this much sed ipsum in thus the saucy.</p>
                                    </div>
                                    <cite className="b-reviews-2__cite" title="Blockquote Title"><span className="b-reviews-2__name">Tina Olivia</span><span className="b-reviews-2__category">BMW 7 Series owner</span></cite>
                                </blockquote>
                                </div>
                                <div className="b-reviews-2">
                                <blockquote className="b-reviews-2__blockquote">
                                    <div className="b-reviews-2__wrap bg-light">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqu uat enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit babbled much partook this much sed ipsum in thus the saucy.</p>
                                    </div>
                                    <cite className="b-reviews-2__cite" title="Blockquote Title"><span className="b-reviews-2__name">Tina Olivia</span><span className="b-reviews-2__category">BMW 7 Series owner</span></cite>
                                </blockquote>
                                </div>
                                <div className="b-reviews-2">
                                <blockquote className="b-reviews-2__blockquote">
                                    <div className="b-reviews-2__wrap bg-light">
                                    <p>Norem ipsum dolor sit amet consectetur adipisicing elit aliqu uat enim ad minim veniam, quis nostrud exercita Duis aute irure dolor reprehenderit babbled much partook this much sed ipsum in thus the saucy.</p>
                                    </div>
                                    <cite className="b-reviews-2__cite" title="Blockquote Title"><span className="b-reviews-2__name">Tina Olivia</span><span className="b-reviews-2__category">BMW 7 Series owner</span></cite>
                                </blockquote>
                                </div>
                            </div>
                            </section>
                            {/* end .b-reviews*/}
                        </div>
                        </div>
                    </div>
                    </div>
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
                    {/* end .b-gallery*/}
                    <div className="section-brands">
                    <div className="container">
                        <div className="row">
                        <div className="col-12">
                            <div className="section-brands__inner">
                            <div className="b-brands-2 row">
                                <div className="col-md col-12">
                                <div className="b-brands-2__item"><img className="b-brands-2__img img-fluid" src="assets/media/content/b-brands-2/1.jpg" alt="foto" /></div>
                                </div>
                                <div className="col-md col-12">
                                <div className="b-brands-2__item"><img className="b-brands-2__img img-fluid" src="assets/media/content/b-brands-2/2.jpg" alt="foto" /></div>
                                </div>
                                <div className="col-md col-12">
                                <div className="b-brands-2__item"><img className="b-brands-2__img img-fluid" src="assets/media/content/b-brands-2/3.jpg" alt="foto" /></div>
                                </div>
                                <div className="col-md col-12">
                                <div className="b-brands-2__item"><img className="b-brands-2__img img-fluid" src="assets/media/content/b-brands-2/4.jpg" alt="foto" /></div>
                                </div>
                                <div className="col-md col-12">
                                <div className="b-brands-2__item"><img className="b-brands-2__img img-fluid" src="assets/media/content/b-brands-2/5.jpg" alt="foto" /></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* end .b-brands*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(About)
