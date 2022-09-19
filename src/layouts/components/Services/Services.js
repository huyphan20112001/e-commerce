import "./Services.scss";
import React from "react";
import ServicesItem from "../../../components/ServicesItem/ServicesItem";

function Services() {
  return (
    <div className="container">
      <div id="services" className="services">
        <h3 className="service-heading">Services</h3>
        <div className="service-list">
          <ServicesItem />
        </div>
      </div>
    </div>
  );
}

export default Services;
