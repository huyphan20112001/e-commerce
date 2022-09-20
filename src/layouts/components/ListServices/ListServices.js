import "./ListServices.scss";
import React from "react";
import ListServicesItem from "../../../components/ListServicesItem/ListServicesItem";

function ListServices({ mode }) {
  return (
    <div id="list-services" className={`list-services ${mode}`}>
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
