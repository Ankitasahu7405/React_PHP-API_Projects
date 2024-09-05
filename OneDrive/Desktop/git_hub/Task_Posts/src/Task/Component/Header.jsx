import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header() {
    const redirect = useNavigate();
    const userlogout = () => {
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success ');
        redirect('/');
        return false;
    }

    return (
        <div>
            {/*header*/}
            <header id="site-header" className="fixed-top">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg stroke">
                        <h1>
                            <a className="navbar-brand d-flex align-items-center" href="index.html">
                                <i className="fa fa-yelp mr-1" aria-hidden="true" />Fitment</a>
                        </h1>
                        {/* if logo is image enable this   
                            <a class="navbar-brand" href="#index.html">
                            <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                             </a> 
                        */}
                        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                            <span className="navbar-toggler-icon fa icon-close fa-times" />
                        </button>


                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                            <ul className="navbar-nav ml-lg-auto">

                                {(
                                    () => {
                                        if (localStorage.getItem('uid')) {
                                            return (
                                                <>
                                                    <small className="text-danger"><i className="fa fa-user ms-5 me-2 pr-1" />Hii.. {localStorage.getItem('uname')}</small>
                                                    <small className="text-danger"><i className="fa fa-user ms-5 me-2 pr-1 pl-3" /><Link to="/profile" className="text-danger pr-2"> My Account</Link></small>
                                                </>
                                            )
                                        }
                                    }
                                )()}

                                <li className="nav-item active">
                                    <NavLink className="nav-link text-secondary" to="/posts">Posts</NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link text-secondary" to="/">Sign Up</NavLink>
                                </li>
                                {(
                                    () => {
                                        if (localStorage.getItem('uid')) {
                                            return (
                                                <a href="javascript:void(0)" onClick={userlogout} className="nav-link text-secondary">Logout</a>
                                            )
                                        }
                                        else {
                                            return (
                                                <Link to="/login" className="nav-link">Login</Link>
                                            )
                                        }
                                    }
                                )()}
        
                                {/* search button */}
                                <div className="search-right ml-lg-3">
                                    <form action="#search" method="GET" className="search-box position-relative">
                                        <div className="input-search">
                                            <input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus className="search-popup" />
                                        </div>
                                        <button type="submit" className="btn search-btn"><i className="fa fa-search" aria-hidden="true" /></button>
                                    </form>
                                </div>
                                {/* //search button */}
                            </ul>
                        </div>
                        {/* toggle switch for light and dark theme */}
                        <div className="cont-ser-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox" />
                                        <div className="mode-container">
                                            <i className="gg-sun" />
                                            <i className="gg-moon" />
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                        {/* //toggle switch for light and dark theme */}
                    </nav>
                </div>
            </header>
            {/*//header*/}
        </div>
    )
}

export default Header