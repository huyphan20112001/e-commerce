import "./ServicesItem.scss";
import React from "react";
import images from "../../asssets/image";
import Image from "../Image/Image";
import Button from "../Button/Button.js";

const services = [
  {
    id: 1,
    img: images.service1,
    title: "Measurement Service",
    description:
      "Our sales support team will come & measure your property in order to ensure accuracy in design and help you calculate how many tiles you need. Please call our toll free number 800 122 22 20 to arrange a visit, or visit one of our Showrooms.",
    link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
  },
  {
    id: 2,
    img: images.service2,
    title: "Product Advice",
    description:
      "Consult our professionals by calling our toll free number 800 122 22 20 or by visiting one of our showrooms where our qualified sales team will offer you product advice highlighting the latest interior and exterior trends.",
    link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
  },
  {
    id: 3,
    img: images.service3,
    title: "Interior Design",
    description:
      "Benefit from our free interior design service. Our fully qualified interior designers will provide CAD visuals to help you visualise your selected tiles before you buy.",
    link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
  },
];

const handleClick = () => {
  alert("Shutdown ur computer, man!");
};

function ServicesItem() {
  return (
    <>
      {services.map((service) => (
        <div
          key={service.id}
          className="service-item"
          style={
            service.id % 2 === 1
              ? { paddingRight: 93 + "px" }
              : { paddingLeft: 93 + "px" }
          }
        >
          {service.id % 2 === 1 ? (
            <>
              <div className="service-img">
                <Image src={service.img} alt={service.title} />
              </div>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-desc">{service.description}</p>
                <Button learn primary href={service.link} learnBlackBorder>
                  LEARN MORE
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-desc">{service.description}</p>
                <Button
                  learn
                  primary
                  target="_blank"
                  href={service.link}
                  learnBlackBorder
                >
                  LEARN MORE
                </Button>
              </div>
              <div className="service-img">
                <Image src={service.img} alt={service.title} />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default ServicesItem;
