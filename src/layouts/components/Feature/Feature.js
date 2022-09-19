import "./Feature.scss";
import React, { useState } from "react";
import FeatureItem from "../../../components/FeatureItem/FeatureItem";
import images from "../../../asssets/image";

function Feature() {
  const [indexFeature, setIndexFeature] = useState(0);

  const handleNext = () => {
    indexFeature < features.length - 3
      ? setIndexFeature((prev) => prev + 1)
      : setIndexFeature(0);

    console.log(indexFeature);
  };

  const handlePrev = () => {
    indexFeature === 0
      ? setIndexFeature(features.length - 3)
      : setIndexFeature((prev) => prev - 1);
    console.log(indexFeature);
  };

  const features = [
    {
      id: 1,
      img: images.fea1,
      title: "Air Insulated Switchgear",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
    },
    {
      id: 2,
      img: images.fea2,
      title: "Mira Switches",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
    },
    {
      id: 3,
      img: images.fea3,
      title: "Transformers & Package Substations",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
    },
    {
      id: 4,
      img: images.fea3,
      title: "Transformers & Package Substations",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
    },
    {
      id: 5,
      img: images.fea2,
      title: "Transformers & Package Substations",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
    },
    {
      id: 6,
      img: images.fea1,
      title: "Transformers & Package Substations",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
    },
  ];

  return (
    <div id="feature" className="feature">
      <h3 className="fea-heading">FEATURED COLLECTION</h3>
      <div className="fea-track">
        <div className="prev-btn" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z" />
          </svg>
        </div>
        <div className="fea-wrapper">
          <div
            className="fea-list"
            style={{
              transform: `translate(-${
                (indexFeature * 100) / features.length
              }%,0)`,
              width: `${(100 / 3) * features.length}%`,
            }}
          >
            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                img={feature.img}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        <div className="next-btn" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Feature;
