import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import AllProduct from '@/component/data';
import Image from 'next/image';
const Index = () => {
    const [Ssproduct, setSsproduct] = useState(AllProduct);
    useEffect(() => {
        setSsproduct(Ssproduct.filter((i) => i.category == "bathroom"));
    }, [])
    return (
        <div>
            <title>Ss-products - Love Nature</title>
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
                                {Ssproduct.map((item, index) => {
                                    return (
                                        <div
                                            className="aos-init aos-animate"
                                            data-aos="zoom-out-up"
                                            key={index}
                                        >
                                            <div className="card img-loaded" id={item.category}>
                                                <Link href="#">
                                                    <Image
                                                        className={`card-img-top probootstrap-animate fadeInUp  probootstrap-animated ${item.category + "img"
                                                            }`}
                                                        src={item.img}
                                                        alt="Card image cap"
                                                        width={200}
                                                        height={200}
                                                    ></Image>
                                                    {/* <img
                                                        className={`card-img-top probootstrap-animate fadeInUp  probootstrap-animated ${item.category + "img"
                                                            }`}
                                                        src={item.img}
                                                        alt="Card image cap"
                                                    /> */}
                                                </Link>

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

export default Index