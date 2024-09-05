import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Signup() {
    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            redirect('/');
        }
    });

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: "",
        image: ""
    });
    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var res = true;
        if (formvalue.name == "") {
            toast.error("Name Field is required !");
            res = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error("Email Field is required !");
            res = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error("Password Field is required !");
            res = false;
            return false;
        }

        if (formvalue.mobile == "") {
            toast.error("Mobile Field is required !");
            res = false;
            return false;
        }
        if (formvalue.image == "") {
            toast.error("Add Image URL Field is required !");
            res = false;
            return false;
        }
        return res;
    }


    const submitHandel = async (e) => {
        e.preventDefault(); // not reload page
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/User`, formvalue);
            //console.log(res);
            setFormvalue({ ...formvalue, id: "", name: "", email: "", password: "", mobile: "", image: "" });
            toast.success('Signup Success');
            return false;
        }
    }

    return (
        <div>
            <Header/>
            {/* inner banner */}
            <div className="inner-banner">
                <section className="w3l-breadcrumb">
                    <div className="container">
                        <h4 className="inner-text-title font-weight-bold mb-2">Sign Up</h4>
                        <ul className="breadcrumbs-custom-path">
                            <li><a href="index.html">Home</a></li>
                            <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />Sign Up</li>
                        </ul>
                    </div>
                </section>
            </div>
            {/* //inner banner */}

            {/* login */}
            <section className="w3l-contact pb-5" id="contact">
                <div className="container pb-md-5 pb-4">
                    <div className="row contact-block">
                        <div className="col-lg-12 contact-right mt-5">
                            <h3 className="title-style mb-4 pb-2">Sign Up Here</h3>
                            <form name="sentMessage" onSubmit={submitHandel} method="post" className="signin-form">
                                <div className="input-grids">
                                    <input type="text" value={formvalue.name} onChange={changeHandel} name="name" id="w3lSender" placeholder="Enter Your Name*" className="contact-input" required />
                                    <input type="email" value={formvalue.email} onChange={changeHandel} name="email" id="w3lSender" placeholder="Your Email*" className="contact-input" required />
                                    <input type="password" value={formvalue.password} onChange={changeHandel} name="password" id="w3lSubect" placeholder="Password*" className="contact-input" required />
                                    <input type="number" value={formvalue.mobile} onChange={changeHandel} name="mobile" id="w3lSender" placeholder="Your Mobile*" className="contact-input" required />
                                    <input type="text" value={formvalue.address} onChange={changeHandel} name="address" id="w3lSubect" placeholder="Your Address*" className="contact-input" required />
                                    <input type="text" value={formvalue.image} onChange={changeHandel} name="image" placeholder="Your Image*" id="w3lSubect" className="contact-input" required />
                                </div>
                                <button className="btn btn-style mt-sm-3" name="submit" type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* // login */}
            <Footer/>
        </div>
    )
}

export default Signup