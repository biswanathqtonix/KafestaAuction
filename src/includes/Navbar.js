import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import LoadAllJS from '../includes/LoadAllJS'

export class Navbar extends Component {

    render() {
        return (
          <>
          {/* <LoadAllJS /> */}
          <header className="header">
          <div className="top-bar d-none d-xl-block">
            <div className="container">
              <div className="row">
                <div className="col offset-2">
                  <div className="top-bar__inner row justify-content-between align-items-center">
                    <ul className="top-bar__list list-unstyled col">
                      <li className="top-bar__item"><a className="top-bar__link" href="mailto:support@domain.com">support@domain.com</a></li>
                      <li className="top-bar__item">Mon to Fri : 9:00am to 6:00pm</li>
                      <li className="top-bar__item">Fairview Ave, El Monte, CA 91732</li>
                    </ul><a className="btn btn-primary btn-sm col-auto" href="#"><i className="ic icon-list" /> Add Listings</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-main">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-2 col-auto">
                  <a className="navbar-brand scroll" href="home.html"><img className="normal-logo" src="assets/media/general/logo.png" alt="logo" /></a>
                </div>
                <div className="col-lg-auto col">
                  <div className="header-contacts d-none d-md-block d-lg-none d-xl-block"><i className="ic text-primary icon-call-in" /><span className="header-contacts__inner">Call Us Today!<a className="header-contacts__number" href="tel:+17553028549">+1 755 302 8549</a></span></div>
                  {/* Mobile Trigger Start*/}
                  <button className="menu-mobile-button js-toggle-mobile-slidebar toggle-menu-button d-lg-none"><i className="toggle-menu-button-icon"><span /><span /><span /><span /><span /><span /></i></button>
                  {/* Mobile Trigger End*/}
                </div>
                <div className="col-lg d-none d-lg-block">
                  <nav className="navbar navbar-expand-md justify-content-end" id="nav">
                    <ul className="yamm main-menu navbar-nav">
                      {/* <li className="nav-item active"><a className="nav-link" href="home.html">Home<span className="sr-only">(current)</span></a></li> */}
                      <li className="nav-item active">
                        <Link className="nav-link" exact to='/'>Home</Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" exact to='/about'>About</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown2" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Inventory</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                          <a className="dropdown-item" href="inventory-list.html">Inventory list</a>
                          <a className="dropdown-item" href="inventory-grid.html">Inventory grid</a>
                          <a className="dropdown-item" href="vehicle-details.html">Vehicle details</a>
                          <a className="dropdown-item" href="dealers.html">Dealers list</a>
                          <a className="dropdown-item" href="dealers-info.html">Dealers info</a></div>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                      <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown1" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown1"><a className="dropdown-item" href="typography.html">Typography</a></div>
                      </li>
                      <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown4" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">News</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown4"><a className="dropdown-item" href="blog-main.html">Blog main</a><a className="dropdown-item" href="blog-post.html">Blog post</a></div>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="contacts.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
          </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
