import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Profile() {
    const redirect = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('uid')) {
      fetch();
    }
    else {
      return redirect('/')
    }
  }, []);

  const [data, setData] = useState({});
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/User/${localStorage.getItem('uid')}`);
    console.log(res.data);
    setData(res.data);
  }

  //==================================================================

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    status: "",
    image: ""
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/User/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  }

  //========================================================================


  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
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


    if (formvalue.mobile == "") {
      toast.error("Mobile Field is required !");
      res = false;
      return false;
    }
    if (formvalue.image == "") {
      toast.error("Add image URL Field is required !");
      res = false;
      return false;
    }
    return res;
  }


  const submitHandel = async (e) => {
    e.preventDefault(); // Not reload the  page
    if (validation()) {
      const res = await axios.patch(`http://localhost:3000/User/${formvalue.id}`, formvalue);
      //console.log(res);
      setFormvalue({ ...formvalue, id: "", name: "", email: "", mobile: "", image: "" });
      toast.success('Update success');
      fetch();
      return false;
    }
  }

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