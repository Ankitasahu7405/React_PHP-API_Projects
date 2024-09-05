import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Profile() {
    return (
        <div>
            <Header />
            {/* inner banner */}
            <div className="inner-banner">
                <section className="w3l-breadcrumb">
                    <div className="container">
                        <h4 className="inner-text-title font-weight-bold mb-2">Profile</h4>
                        <ul className="breadcrumbs-custom-path">
                            <li><a href="index.html">Home</a></li>
                            <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />Profile</li>
                        </ul>
                    </div>
                </section>
            </div>
            {/* //inner banner */}

            {/* profile */}
            <section className="w3l-aboutblock py-5">
                <div className="container py-md-5 py-sm-4">
                    <div className="row">
                        <div className="col-lg-5 left-wthree-img mb-lg-0 mb-5">
                            <img className="img-fluid img-responsive" src={data.image} alt=" " />
                        </div>
                        <div className="col-lg-7 about-right-faq align-self pl-lg-5">
                            <h3 className="title-style mb-2">My Account</h3>
                            <h2 className="title-style mb-2">data.name</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* // profile */}
            <Footer />
        </div>
    )
}

export default Profile