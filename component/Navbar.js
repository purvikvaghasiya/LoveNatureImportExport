import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import axiosApi from "@/axios-instance";
import Register1 from "./Register";
import Login1 from "./Login";
import Image from "next/image";


const Navbar = () => {
    const [open, setopen] = useState(false);
    // const [Menuopen,setMenuopen] = useState(false);
    const router = useRouter();
    const handlemenubar = (e, value) => {
        setopen(!open);
    };
    const [isOpen, setIsOpen] = useState(false);

    const handledropdown = () => {
        setIsOpen(!isOpen);
    };

    const [Loginuser, setLoginuser] = useState({});
    const [registeropen, setregisteropen] = useState(false);
    const [loginOpen, setloginOpen] = useState(false);
    const [updateState, setupdateState] = useState(false);
    // console.log("loginuser", Loginuser)
    const handleLogout = () => {
        axiosApi.delete(`/user/${Loginuser.data.id}`)
            .then((res) => {
                console.log("res", res)
                setupdateState((prev) => !prev)
                // setloginOpen((prev)=>prev);
                localStorage.removeItem('loginuser')
            })
            .catch((err) => console.log("err", err));
    }
    useEffect(() => {
        setLoginuser(JSON.parse(localStorage.getItem('loginuser')));
    }, [updateState, loginOpen])

    return (
        <div >
            <header id="header" className="header-nav">
                <nav id="navbar" className="navbar navbar-expand-lg order-lg-0 ">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="logo me-auto me-lg-0">
                            <Link href="/" className="d-block">
                                <Image src="/image/logo-white.svg" alt="nav-logo" width={60} height={50}></Image>
                                {/* <img src="/image/logo-white.svg" width="60px" height="50px"></img> */}
                            </Link>
                        </div>
                        {
                            Loginuser && Loginuser.data !== undefined ?
                                <div className="login-section">

                                    <div className="fw-bold d-flex d-md-none d-lg-none login-h1">
                                        <h1 > {
                                            Loginuser.data.name
                                        }
                                        </h1>
                                        <i className="fa-solid fa-right-from-bracket" onClick={handleLogout}></i>
                                    </div>
                                </div> : <></>
                        }
                        <button
                            className="navbar-toggler bg-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation" onClick={handlemenubar}>
                            {
                                open ? <> <svg className="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z">

                                    </path>
                                </svg></> : <>
                                    <svg className="ast-mobile-svg ast-menu2-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
                                        <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z">
                                        </path>
                                    </svg>
                                </>
                            }
                        </button>

                        <div
                            className={
                                open ? "navbar-collapse collapse" : "collapse navbar-collapse"
                            }
                            // className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                            style={{
                                marginLeft: "auto",
                                // overflowX:'hidden',
                                // boxShadow:"0px 3px 10px, -1px -2px 10px"

                            }}
                        >
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className={router.pathname == "/" ? "nav-link active" : "nav-link"}
                                        href="/"
                                        // onClick={(e) => handlemenubar(e)}
                                        onClick={handlemenubar}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={router.pathname == "/about" ? "nav-link active" : "nav-link "}
                                        href="/about"
                                        // onClick={(e) => handlemenubar(e)}
                                        onClick={handlemenubar}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className={router.pathname == "/our-products" ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"}
                                        href="/our-products"
                                        // onClick={(e) => handlemenubar(e)}
                                        onClick={handledropdown}
                                        data-bs-toggle="dropdown"
                                    >
                                        Our Products
                                    </Link>
                                    <ul className="dropdown-menu m-0 p-0" aria-labelledby="dropdownMenuButton">
                                        <li className="submenu-li">
                                            <Link
                                                className={router.pathname == "/our-products/brass-products" ? "active dropdown-item" : "dropdown-item"}
                                                // className="dropdown-item" 
                                                href="/our-products/brass-products"
                                                onClick={handlemenubar}>
                                                Brass Product <span className="d-sm-none d-none d-lg-block">&raquo;</span>
                                            </Link>
                                            <ul className="dropdown-menu  dropdown-submenu-1">
                                                <li className="submenu-inner">
                                                    <Link
                                                        href="/our-products/brass-products/hardware-products"
                                                        //  className="dropdown-item"

                                                        className={router.pathname == "/our-products/brass-products/hardware-products" ? "active dropdown-item" : "dropdown-item"}
                                                    >
                                                        Hardware Product
                                                    </Link>
                                                </li>
                                                <li className="submenu-inner">
                                                    <Link href="#" className="dropdown-item" style={{ borderTop: "none" }}>
                                                        Sanitary Ware Product
                                                    </Link>
                                                </li>
                                                <li className="submenu-inner">
                                                    <Link href="#" className="dropdown-item" style={{ borderTop: "none" }}>
                                                        Electro Part Product
                                                    </Link>
                                                </li>
                                            </ul>

                                        </li>
                                        <li className="submenu-li">
                                            <Link
                                                className={router.pathname == "/our-products/ss-products" ? "active dropdown-item" : "dropdown-item"}
                                                href="/our-products/ss-products"
                                                // className="dropdown-item" 
                                                onClick={handlemenubar}
                                            >
                                                Ss product <span className="d-sm-none d-none  d-lg-block">&raquo;</span>
                                            </Link>
                                            <ul className="dropdown-menu  dropdown-submenu-1">
                                                <li className="submenu-inner">
                                                    <Link
                                                        className={router.pathname == "/our-products/ss-products/bathroom-accesories" ? "active dropdown-item" : "dropdown-item"}
                                                        href="/our-products/ss-products/bathroom-accesories"
                                                        // className="dropdown-item" 
                                                        onClick={handlemenubar}>
                                                        Bathroom accessories
                                                    </Link>
                                                </li>
                                            </ul>
                                            {/* <ul className="dropdown-menu dropdown-submenu">
                                                <li>
                                                    <Link href="/our-products/ss-products" className="dropdown-item">
                                                        Bathroom accessories
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li className="submenu-li">
                                            <Link
                                                className={router.pathname == "/our-products/Alluminium-products" ? "active dropdown-item" : "dropdown-item"}
                                                href="/our-products/Alluminium-products"
                                                //  className="dropdown-item" 
                                                onClick={handlemenubar}>
                                                Alluminium Product <span className="d-sm-none d-none   d-lg-block">&raquo;</span>
                                            </Link>

                                            <ul className="dropdown-menu  dropdown-submenu-1">
                                                <li>
                                                    <Link
                                                        className={router.pathname == "/our-products/Alluminium-products/tower-bolts" ? "active dropdown-item" : "dropdown-item"}
                                                        href="/our-products/Alluminium-products/tower-bolts"
                                                        //   className="dropdown-item" 
                                                        onClick={handlemenubar}>
                                                        Tower Bolts
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={router.pathname == "/contact" ? "nav-link active" : "nav-link "}
                                        href="/contact"
                                        onClick={(e) => handlemenubar(e)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>


                            <div className="header-button">
                                <Link href="tel:202-555-0188" className="custom-button">
                                    202-555-0188
                                </Link>
                            </div>
                            <div className="login-section d-lg-flex">
                                {
                                    Loginuser ?
                                        Loginuser.data !== undefined && (
                                            <div className="fw-bold d-none d-sm-none d-lg-flex">
                                                <h1> {
                                                    Loginuser.data.name
                                                }
                                                </h1>
                                                <i className="fa-solid fa-right-from-bracket" onClick={handleLogout}></i>
                                            </div>
                                        )
                                        : <>
                                            <div className="mx-lg-3">
                                                <h2
                                                    className={loginOpen ? "dropdown-toggle login-navitem d-block d-md-none  d-lg-block" : "dropdown-toggle login-navitem d-md-none d-none d-lg-block "}
                                                    // className="dropdown-toggle login-navitem"
                                                    data-bs-toggle="dropdown">

                                                    Login
                                                </h2>
                                                <h2 className=" login-navitem d-lg-none d-block d-sm-block  nav-item">
                                                    <Link href="/login" onClick={(e) => handlemenubar(e)}
                                                        className={router.pathname == "/login" ? "nav-link active" : "nav-link "}
                                                    >Login</Link>
                                                </h2>
                                                <ul
                                                    className={loginOpen ? "dropdown-menu login-menu show d-block" : "dropdown-menu login-menu"}
                                                // className="dropdown-menu login-menu"
                                                >
                                                    <Login1 LoginOpen={setloginOpen} />
                                                </ul>
                                            </div>
                                            <div className="mx-lg-3">
                                                <h2
                                                    className={registeropen ? "dropdown-toggle  register-navitem d-block d-md-none d-lg-block" : "dropdown-toggle  register-navitem d-md-none d-none d-lg-block"}
                                                    data-bs-toggle="dropdown"
                                                >Register</h2>
                                                <h2 className="register-navitem d-lg-none d-block d-sm-block nav-item">
                                                    <Link href="/register" onClick={(e) => handlemenubar(e)}
                                                        className={router.pathname == "/register" ? "nav-link active" : "nav-link "}
                                                    >Register</Link>
                                                </h2>
                                                {/* {
                                                    Loginuser.data &&(
                                                        <h2 className="register-navitem d-lg-none d-block d-sm-block nav-item">
                                                        <Link href="/register" onClick={(e) => handlemenubar(e)} 
                                                        className={router.pathname == "/register" ? "nav-link active" : "nav-link "}
                                                        >Register</Link>
                                                    </h2>
                                                    )
                                                } */}



                                                <ul
                                                    className={registeropen ? "dropdown-menu register-menu show d-block" : "dropdown-menu register-menu"}
                                                // className="dropdown-menu register-menu"
                                                >
                                                    <Register1 Registeropen={setregisteropen} />
                                                </ul>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;