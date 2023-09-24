import React from "react";

const Services = () => {
  const servicedata = [
    {
      id: 1,
      img: "/image/services-img.jpeg",
      title: "CUSTOMIZED PRODUCTS",
      subtitle:
        "We have a large range of options for those who are looking for the right choice in the exclusive Brass Components.",
    },
    {
      id: 2,
      img: "/image/services-img1.jpeg",
      title: "QUALITY ASSURANCE",
      subtitle:
        "We have well-trained & skilled staff in each and every department. Our goods are manufactured under the strict Quality.",
    },
    {
      id: 3,
      img: "/image/services-img2.jpeg",
      title: "INFRASTRUCTURE",
      subtitle:
        "We are well equipped with the latest plant and machinery to manufacture high-class quality Products work culture.",
    },
  ];
  return (
    <section id="ourservices" className="ourservices-wrapper">
      <div className="container">
        <div className="ourservices-title">
          <h2>Our Services</h2>
        </div>
        <div className="row mt-5">
          {servicedata.map((item, index) => (
            <div
              className="col-lg-4 col-md-4 col-sm-12 service-item"
              key={index}
            >
              <img src={item.img}></img>
              <div className="services-content">
                <h3>{item.title}</h3>
                <p className="section-description">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
