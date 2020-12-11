import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="text-center">
                            <div className="footer-logo">
                            <a className="footer-logo__link" href="home.html"><img className="img-responsive" src="/assets/media/general/logo-light.png" alt="Logo" /></a>
                            </div>
                            <ul className="footer-soc list-unstyled">
                            <li className="footer-soc__item"><a className="footer-soc__link" href="#" target="_blank"><i className="ic fab fa-twitter" /></a></li>
                            <li className="footer-soc__item"><a className="footer-soc__link" href="#" target="_blank"><i className="ic fab fa-facebook" /></a></li>
                            <li className="footer-soc__item"><a className="footer-soc__link" href="#" target="_blank"><i className="ic fab fa-linkedin" /></a></li>
                            <li className="footer-soc__item"><a className="footer-soc__link" href="#" target="_blank"><i className="ic fab fa-google-plus-g" /></a></li>
                            <li className="footer-soc__item"><a className="footer-soc__link" href="#" target="_blank"><i className="ic fab fa-pinterest" /></a></li>
                            <li className="footer-soc__item"><a className="footer-soc__link" href="#" target="_blank"><i className="ic fas fa-play" /></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-5">
                        <div className="footer-section footer-section_info">
                            <div className="footer-info">Ceipisicing elit sed do eiusmod tempor laboe dolore magna aliqa Ut enim ad minim veniam quis nostrud exercitation ullam co laboris nis aliquip comsecd sed ipsum.</div>
                            <div className="footer-contacts">
                            <div className="footer-contacts__item"><i className="ic icon-location-pin" />Fairview Ave, El Monte, CA 91732</div>
                            <div className="footer-contacts__item"><i className="ic icon-envelope" /><a href="mailto:support@domain.com">support@domain.com</a></div>
                            <div className="footer-contacts__item"><i className="ic icon-earphones-alt" />Phone:
                                <a href="tel:+17553028549">+1 755 302 8549</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-3">
                        <div className="row">
                            <div className="col-lg-6">
                            <section className="footer-section footer-section_link">
                                <h3 className="footer-section__title">About Revus</h3>
                                <ul className="footer-list list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Inventory</a></li>
                                <li><a href="#">Parts Shop</a></li>
                                <li><a href="#">Contact</a></li>
                                </ul>
                            </section>
                            </div>
                            <div className="col-lg-6">
                            <section className="footer-section footer-section_link">
                                <h3 className="footer-section__title">Customer Links</h3>
                                <ul className="footer-list list-unstyled">
                                <li><a href="#">Latest Cars</a></li>
                                <li><a href="#">Featured Cars</a></li>
                                <li><a href="#">Sell Your Car</a></li>
                                <li><a href="#">Buy a Car</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Latest News</a></li>
                                </ul>
                            </section>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <section className="footer-section footer-section_subscribe">
                            <h3 className="footer-section__title">Subscribe Newsletter</h3>
                            <form className="footer-form">
                            <div className="footer-form__info">Get our weekly nwsletter for latest car news exclusive offers and deals and more.</div>
                            <div className="form-group">
                                <input className="footer-form__input form-control" type="email" placeholder="your email" />
                            </div>
                            <button className="btn btn-sm btn-primary">Subscribe</button>
                            </form>
                        </section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <div className="footer-copyright">
                            Copyrights (c) 2019 Revus - Auto Dealer Template. All rights reserved.
                            <a className="footer-copyright__link" href="privacy-policy.html">Privacy Policy</a>
                        </div>
                        </div>
                    </div><span className="footer__btn-up js-scroll-top"><i className="ic fas fa-angle-up" /><img src="/assets/media/general/go_top.png" alt="go top" /></span>
                    </div>
                </footer>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
