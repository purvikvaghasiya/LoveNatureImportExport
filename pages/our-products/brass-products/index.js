import React from 'react'
import Link from 'next/link';
import AllProduct from '@/component/data';
import Image from 'next/image';

const BrassProduct = () => {
    return (
        <div>
             <title>BrassProduct - Love Nature</title>
            <section id="about-wrapper" className="about-wrapper">
                <div className="elementor-background-overlay1"></div>
            </section>
            <section id="portfolio" className="portfolio">
                <div className="container ">
                    <div
                        className="container-sm row portfolio-container  mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="probootstrap-main js-probootstrap-main">
                            <div className="card-columns">
                                {AllProduct.map((item, index) => {
                                    return (
                                        <div
                                            className="aos-init aos-animate"
                                            data-aos="zoom-out-up"
                                            key={index}
                                        >
                                            <div className="card img-loaded" id={item.category}>
                                                <Link href="#">
                                                <Image
                            className={`card-img-top probootstrap-animate fadeInUp  probootstrap-animated ${
                              item.category + "img"
                            }`}
                            width={200}
                            height={200}
                            src={item.img}
                            alt="Card image cap"
                          ></Image>
                                                    {/* <img
                                                        className={`card-img-top probootstrap-animate fadeInUp  probootstrap-animated ${item.category + "img"
                                                            }`}
                                                        // className="card-img-top probootstrap-animate fadeInUp probootstrap-animated"
                                                        src={item.img}
                                                        alt="Card image cap"
                                                    /> */}
                                                </Link>
                                                {/* <div className="portfolio-info">
                                                    <h4>{item.name}</h4>
                                                    <p>{item.category}</p>
                                                </div> */}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BrassProduct;