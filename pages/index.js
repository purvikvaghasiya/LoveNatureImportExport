import Image from "next/image";
import { Inter } from "next/font/google";
import Services from "@/component/Services";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ width: "100%", overflow: "auto" }}>
      <title>Home - Love Nature</title>
      <section id="home-wrapper" className="home-wrapper">
        <div className="elementor-background-overlay"></div>
      </section>
      <Services />
      <section id="banner" className="banner-wrapper">
        <div className="elementor-container">
          <div className="row">
            <div className="col-lg-2 col-12 mx-auto banner-img-wrapper">
              <div className="d-block ">
                <div className="banner-img">
                  <Image
                    src="/image/banner-slider.jpg"
                    width={164}
                    height={93}
                    sizes="(max-width:991px) 800px"
                    alt="slider-img"
                    className="mx-auto"
                  ></Image>
                  {/* <img src="/image/banner-slider.jpg"></img> */}
                </div>
                <div className="banner-img">
                  <Image
                    src="/image/banner-slider1_.jpg"
                    width={164}
                    height={82}
                    sizes="(max-width:768px) 761px"
                    alt="slider-img1"
                  ></Image>
                  {/* <img src="/image/banner-slider1_.jpg"></img> */}
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex">
              <div
                className="banner-content"
                style={{
                  padding: "20px 0px",
                  position: "relative",
                  width: "100%",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div style={{ textAlign: "center", display: "block" }}>
                    <Image
                      src="/image/img1.png"
                      width={37}
                      height={25}
                      alt="img"
                      style={{
                        opacity: "0.3",
                        verticalAlign: "middle",
                        display: "inline-block",
                      }}
                    ></Image>
                  </div>
                </div>
                <div className="h4">
                  <h4>
                    A Reliable Company That Is Actively Committed Towards
                    Providing Premium Quality Collection of Brass Products As
                    Per The Global Set Standards.
                  </h4>
                </div>
                <div className="banner-widget-img ">
                  <Image
                    src="/image/banner-img.png"
                    width={50}
                    height={50}
                    alt="banner-img"
                  ></Image>
                  {/* <img src="/image/banner-img.png"></img> */}
                </div>
                <div className="banner-widget-text-editor">
                  <p>Jane Miller</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-12 col-md-12 col-12 banner-img-wrapper">
            <div className="banner-img"> 
            <Image
                src="/image/banner-slider2.jpg"
                width={164}
                height={87}
                sizes="(max-width:768px) 716px"
                alt="slider-img2"
              ></Image></div>
             
              {/* <img src="/image/banner-slider2.jpg"></img> */}
            </div>
          </div>
        </div>
      </section>
      <section className="about-section" id="about-section">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-7 about-content">
              <div className="about-top">
                <p>
                  <strong>ABOUT US</strong>
                </p>
              </div>
              <div className="about-middle">
                <h4>
                  We are the Foremost Companies Engaged in Manufacturer &
                  Exporter of Brass Precision Components Providing Best Services
                  to the Very Highly Profiled Organizations & OEMs in India as
                  Well As Abroad Countries.
                </h4>
              </div>
              <div className="about-bottom">
                <Link href="#">
                  <span className="about-button-text">Find Out More</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12 about-img-content d-sm-none d-md-flex d-lg-flex d-none">
              <div className="about-img">
                <Image
                  src="/image/about-img.png"
                  width={404}
                  height={227}
                  alt="about-img-content"
                ></Image>
                {/* <img src="/image/about-img.png"></img> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="question-section" id="question-section">
        <div
          style={{
            backgroundColor: "#000000",
            opacity: "0.5",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            position: "absolute",
          }}
        ></div>
        {/* <div className="elementor-background-overlay"></div> */}
        <div className="container">
          <div className="question-content">
            <div className="question-text">
              <h1 className="elementor-heading-title elementor-size-default">
                QUESTIONS?
              </h1>
            </div>
            <div className="question-text">
              <p>
                Whether you’re curious about features, a free trial, or even
                press, we’re here to answer any questions.
              </p>
            </div>
            <div className="question-button">
              <Link href="#" className="question-button-link">
                <span className="question-button-text">
                  Let&apos;s Talk Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="img-wrapper">
        <div className="container">
          <Image
            src="/image/img.jpeg"
            width={1024}
            height={512}
            alt="img-wrapper"
          ></Image>
          {/* <img src="/image/img.jpeg"></img> */}
        </div>
      </section>
    </div>
  );
}
