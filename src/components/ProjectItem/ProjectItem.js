import "./ProjectItem.scss";
import React from "react";
import images from "../../asssets/image";
import Image from "../Image/Image";

function ProjectItem({ id, img, title, location }) {
  const handleClick = () => {
    alert("Hello");
  };

  return (
    <>
      <div onClick={handleClick} className={`project-item ${id}`}>
        <div className="project-img">
          <Image src={img} alt={title} />
        </div>
        <div className="project-info">
          <h4 className="project-title">{`${title} ${id}`}</h4>
          <p className="project-location">{location}</p>
        </div>
        <div className="background-bottom"></div>
      </div>
    </>
  );
}

export default ProjectItem;
