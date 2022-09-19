import "./ListServicesItem.scss";
import React from "react";
import images from "../../asssets/image";
import Image from "../Image/Image";

const listServices = [
  {
    id: 1,
    img: images.listSer1,
    title: "Bathroom",
  },
  {
    id: 2,
    img: images.listSer2,
    title: "Kitchen",
  },
  {
    id: 3,
    img: images.listSer3,
    title: "Living Room",
  },
  {
    id: 4,
    img: images.listSer4,
    title: "Bedroom",
  },
  {
    id: 5,
    img: images.listSer5,
    title: "Outdoor",
  },
  {
    id: 6,
    img: images.listSer6,
    title: "Commercial",
  },
];

function ListServicesItem() {
  return (
    <>
      {listServices.map((service) => (
        <div key={service.id} className="list-service-item">
          <div className="list-service-img">
            <Image src={service.img} alt={service.title} />
          </div>
          <div className="list-service-title">{service.title}</div>
        </div>
      ))}
    </>
  );
}

export default ListServicesItem;
