import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <title>About - Love Nature</title>
      <section id="about-wrapper" className="about-wrapper">
        <div className="elementor-background-overlay1"></div>
      </section>
      <section className="about-wrapper-section" id="about-content">
        <div className="container-sm">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba0c118">
            <div className="about-top">
              <div className="about-widget-heading">
                <div className="about-widget-container">
                  <h4 className="about-heading-title">
                    We’re a highly collaborative and supportive team, coming
                    together on every project to ensure our clients get the very
                    best result.
                  </h4>
                </div>
              </div>
              <div className="about-widget-image">
                <div className="about-widget-container">
                <Image
                    src="/image/about-img2.png"
                    width={1096}
                    height={877}
                    alt="widget-img"
                  ></Image>
                  {/* <img src="/image/about-img2.png"></img> */}
                </div>
              </div>
              <section className="about-widget-content">
                <div className="row">
                  <div className="col-lg-6 col-12 col-md-6">
                    <h3>Our Team</h3>
                    <p>
                      Our stable infrastructure of the organization is supported
                      by our committed and dedicated team of experts. These
                      accomplished professionals work earnestly to make and
                      design products that are in compliance with the industry
                      determined norms and also suit the needs of our wide
                      client base.
                    </p>
                  </div>
                  <div className="col-lg-6 col-12 col-md-6 content-principles">
                    <h3>Our Principles</h3>
                    <p>
                      Our company has set certain principle for ourselves that
                      has made us the prominent and reliable choice of many
                      clients. To consistently enhance the performance of the
                      team and carefully explain their role and responsibilities
                      to them & create safe and healthy working conditions for
                      all employees.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-middle">
        <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 col-md-12 mx-auto">
                <div className="about-middle-title">
                <Image
                  src="/image/img1.png"
                  width={37}
                  height={37}
                  alt="image"
                ></Image>
                  {/* <img src="/image/img1.png" width="37"></img> */}
                </div>
                <div className="abput-middle-content">
                  <h4>A Reliable Company That Is Actively Committed Towards Providing Premium Quality Collection of Brass Products As Per The Global Set Standards.</h4>
                </div>
                <div className="about-middle-img">
                <Image
                  src="/image/about-img1.png"
                  width={50}
                  height={128}
                  alt="image1"
                ></Image>
                  {/* <img src="/image/about-img1.png" width="50" height="128"></img> */}
                  <p>Emily Davis</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      {/* <section className="elementor-section elementor-top-section elementor-element elementor-element-e889fc3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e889fc3" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3c8f4a8" data-id="3c8f4a8" data-element_type="column">
            <div className="elementor-widget-wrap">
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ebb2ba7" data-id="ebb2ba7" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-14b6458 elementor-widget elementor-widget-image" data-id="14b6458" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" src="https://bhanderiinternational.com/wp-content/plugins/elementor/assets/images/placeholder.png" title="" alt="" loading="lazy"/>															</div>
              </div>
              <div className="elementor-element elementor-element-beb0353 elementor-widget elementor-widget-heading" data-id="beb0353" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">A Reliable Company That Is Actively Committed Towards Providing Premium Quality Collection of Brass Products As Per The Global Set Standards.
                  </h4>		</div>
              </div>
              <div className="elementor-element elementor-element-4e74ae5 elementor-widget elementor-widget-image" data-id="4e74ae5" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" width="128" height="128" src="https://bhanderiinternational.com/wp-content/uploads/2023/07/avatar_on_about.png" className="attachment-full size-full wp-image-2399" alt="" loading="lazy" />															</div>
              </div>
              <div className="elementor-element elementor-element-ec91cfa elementor-widget elementor-widget-text-editor" data-id="ec91cfa" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>Emily Davis</p>						
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-9e16007" data-id="9e16007" data-element_type="column">
            <div className="elementor-widget-wrap">
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
