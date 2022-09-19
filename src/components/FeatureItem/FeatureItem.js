import "./FeatureItem.scss";
import React from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";

function FeatureItem({ img, title, description }) {
  return (
    <>
      <div className="fea-item">
        <div className="fea-img">
          <Image src={img} alt={title} />
        </div>
        <h4 className="fea-title">{title}</h4>
        <p className="fea-desc">{description}</p>
        <Button href="#" primary view>
          VIEW COLLECTION
        </Button>
      </div>
    </>
  );
}

export default FeatureItem;
