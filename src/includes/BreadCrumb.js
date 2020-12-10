import React from 'react'
import {Link} from 'react-router-dom'

export default function BreadCrumb(props) {
    return (
        <div className="section-title-page area-bg area-bg_dark area-bg_op_60">
            <div className="area-bg__inner">
                <div className="container">
                    <div className="row">
                        <div className="col offset-lg-3">
                            <div className="b-title-page__wrap">
                            <h1 className="b-title-page">{props.pageName}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link exact to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{props.pageName}</li>
                                </ol>
                            </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
