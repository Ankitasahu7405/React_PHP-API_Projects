import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login() {
    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            return redirect('/')
        }
    }, []);

    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
    });
    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var res = true;

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

        return res;
    }


    const submitHandel = async (e) => {
        e.preventDefault(); // not reload page
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/User?email=${formvalue.email}`);
            console.log(res);
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    if (res.data[0].status == "Unblock") {

                        // session create
                        localStorage.setItem('uid', res.data[0].id);
                        localStorage.setItem('uname', res.data[0].name);
                        redirect('/');

                        toast.success('Login Success ');
                        return false;
                    }
                    else {
                        setFormvalue({ ...formvalue, email: "", password: "" });
                        toast.error('Accout Blocked ');
                        return false;
                    }
                }
                else {
                    setFormvalue({ ...formvalue, email: "", password: "" });
                    toast.error('Wrong password');
                    return false;
                }
            }
            else {
                setFormvalue({ ...formvalue, email: "", password: "" });
                toast.error('Email does not Exist');
                return false;
            }

        }
    }


    return (
        <div>
            <Header/>
            {/* inner banner */}
            <div className="inner-banner">
                <section className="w3l-breadcrumb">
                    <div className="container">
                        <h4 className="inner-text-title font-weight-bold mb-2">Login</h4>
                        <ul className="breadcrumbs-custom-path">
                            <li><a href="index.html">Home</a></li>
                            <li className="active"><span className="fa fa-chevron-right mx-2" aria-hidden="true" />Login</li>
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
                            <h3 className="title-style mb-4 pb-2">Login Here</h3>
                            <form name="sentMessage" method="post" onSubmit={submitHandel} className="signin-form">
                                <div className="input-grids">
                                    <input type="email" value={formvalue.email} onChange={changeHandel} name="email" id="w3lSender" placeholder="Your Email*" className="contact-input" required />
                                    <input type="password" value={formvalue.password} onChange={changeHandel} name="password" id="w3lSubect" placeholder="Password*" className="contact-input" required />
                                </div>
                                <button className="btn btn-style mt-sm-3" name="submit" type="submit">LOGIN</button>
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

export default Login