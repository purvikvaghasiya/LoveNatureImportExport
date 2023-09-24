import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer id="footer" className='footer-wrapper'>
                <div className='container'>
                    <div className='row'>

                        <div className='footer-item  col-12 col-lg-5'>
                            <ul className='footer-ul'>
                                <li className='footer-li'>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className='footer-li'>
                                    <Link href="/about">About</Link>
                                </li>
                                <li className='footer-li'>
                                    <Link href="/our-products">Our Products</Link>
                                </li>
                                <li className='footer-li'>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-2 footer-logo'>
                            <img src="/image/logo-green.svg"></img>
                        </div>
                        <div className='col-12 col-lg-5 footer-copyright'>
                            <p> Love Nature by Tyler Moore</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;