import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import LoadAllJS from '../includes/LoadAllJS'


export class NavbarMobile extends Component {
    render() {
        return (
          <>
          {/* <LoadAllJS /> */}

            <div data-off-canvas="mobile-slidebar left overlay">
            <a className="navbar-brand scroll" href="home.html"><img className="scroll-logo" src="assets/media/general/logo-light.png" alt="logo" /></a>
            <ul className="navbar-nav">
              {/* <li className="nav-item active"><a className="nav-link" href="home.html">Home<span className="sr-only">(current)</span></a></li> */}

              <li className="nav-item active">
                                <Link className="nav-link" exact to='/'>Home</Link>
                              </li>
                              <li className="nav-item active">
                                <Link className="nav-link" exact to='/about'>About</Link>
                              </li>

              <li className="nav-item "><a className="nav-link">Inventory</a>
                <ul>
                  <li><a className="dropdown-item" href="inventory-list.html">Inventory list</a></li>
                  <li><a className="dropdown-item" href="inventory-grid.html">Inventory grid</a><a className="dropdown-item" href="dealers.html">Dealers list</a></li>
                  <li><a className="dropdown-item" href="dealers-info.html">Dealers info</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
              <li className="nav-item "><a className="nav-link" href="#">Pages</a>
                <ul>
                  <li><a className="dropdown-item" href="typography.html">Typography</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">News</a>
                <ul>
                  <li><a className="dropdown-item" href="blog-main.html">Blog main</a></li>
                  <li><a className="dropdown-item" href="blog-post.html">Blog post</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="contacts.html">Contact</a></li>
            </ul>
          </div>
          </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobile)
