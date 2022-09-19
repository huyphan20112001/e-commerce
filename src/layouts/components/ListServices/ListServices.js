import "./ListServices.scss";
import React from "react";
import ListServicesItem from "../../../components/ListServicesItem/ListServicesItem";

function ListServices() {
  return (
    <div id="list-services" className="list-services">
      <div className="container">
        <h3 className="list-services-heading">Services</h3>
        <div className="list-services-item">
          <ListServicesItem />
        </div>
      </div>
    </div>
  );
}

export default ListServices;
