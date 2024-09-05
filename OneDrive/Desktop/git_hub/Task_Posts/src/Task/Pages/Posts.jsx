import React, { useState, useEffect } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Posts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async (e) => {
        const res = await axios.get('http://localhost:3000/Posts')
        // console.log(res.data);
        setData(res.data);
    }

    return (
        <div>
            <Header />
            {/* image with content section */}
            <section className="image-with-content py-sm-5 py-4">
                <div className="container py-md-5">
                    <h3 class="title-style mb-2">Our All Posts</h3>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-5 content-sec-1">
                            <h4><a href="services.html" className="title-style-anchor">{data.title}</a></h4>
                            <p>{data.decs}</p>
                            <Link className="btn btn-style mt-4" to="/pots">Let's Know More</Link>
                        </div>
                        <div className="col-lg-8 col-md-7 pl-lg-5 mt-md-0 mt-sm-5 mt-4">
                            <img src={data.image} alt="" className="img-responsive" />
                        </div>
                    </div>
                    <div className="row align-items-center d-grid-res mt-5 pt-md-4">
                        <div className="col-lg-8 col-md-7 pr-lg-5 mt-md-0 mt-sm-5 mt-4 respon-order-2">
                            <img src={data.image} alt="" className="img-responsive" />
                        </div>
                        <div className="col-lg-4 col-md-5 content-sec-1 respon-order-1">
                            <h4><a href="services.html" className="title-style-anchor">{data.title}</a></h4>
                            <p>{data.decs}</p>
                            <Link className="btn btn-style mt-4" to="/pots">Let's Know More</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* //image with content section */}

            <Footer />
        </div>

    )
}

export default Posts