import React, { Component } from 'react'
import { connect } from 'react-redux'

export const ShowContact1 = () => {
    return (
        <>
            <h5 className="auctn_font2">Contact Us</h5>
            <p><b>inquiry@auctionwini.com</b></p>

            <div className="row">
                <div className="col-md-12 lh14">
                    <p className="auctn_font4"> <span className="auctn_font5">English</span> John Monyo</p>
                    <p className="auctn_mt-1">Whatsapp/Viber  +82.10.9954.5765</p>
                    <p className="auctn_mt-1">AM 08:00 - PM 05:00 (GMT)</p>
                 </div>
                <div className="col-md-12 lh14 mt-3">
                    <p className="auctn_font4"> <span className="auctn_font5">English</span> John Monyo</p>
                    <p className="auctn_mt-1">Whatsapp/Viber  +82.10.9954.5765</p>
                    <p className="auctn_mt-1">AM 08:00 - PM 05:00 (GMT)</p>
                </div>
                <div className="col-md-12 lh14 mt-3">
                    <p className="auctn_font4"> <span className="auctn_font5">English</span> John Monyo</p>
                    <p className="auctn_mt-1">Whatsapp/Viber  +82.10.9954.5765</p>
                    <p className="auctn_mt-1">AM 08:00 - PM 05:00 (GMT)</p>
                </div>
                <div className="col-md-12 lh14 mt-3">
                    <p className="auctn_font4"> <span className="auctn_font5">English</span> John Monyo</p>
                    <p className="auctn_mt-1">Whatsapp/Viber  +82.10.9954.5765</p>
                    <p className="auctn_mt-1">AM 08:00 - PM 05:00 (GMT)</p>
                </div>
             </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContact1)
