import "./Feature.scss";
import React, { useState } from "react";
import FeatureItem from "../../../components/FeatureItem/FeatureItem";
import images from "../../../asssets/image";

function Feature({ mode }) {
  const [indexFeature, setIndexFeature] = useState(0);

  const handleNext = () => {
    indexFeature < features.length - 3
      ? setIndexFeature((prev) => prev + 1)
      : setIndexFeature(0);
  };

  const handlePrev = () => {
    indexFeature === 0
      ? setIndexFeature(features.length - 3)
      : setIndexFeature((prev) => prev - 1);
  };

  const features = [
    {
      id: 1,
      img: images.fea1,
      title: "Air Insulated Switchgear",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
      link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
    },
    {
      id: 2,
      img: images.fea2,
      title: "Mira Switches",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
      link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
    },
    {
      id: 3,
      img: images.fea3,
      title: "Transformers & Package Substations",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
      link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
    },
    {
      id: 4,
      img: images.fea3,
      title: "Transformers & Package Substations",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
      link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
    },
    {
      id: 5,
      img: images.fea2,
      title: "Transformers & Package Substations",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
      link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
    },
    {
      id: 6,
      img: images.fea1,
      title: "Transformers & Package Substations",
      description:
        "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.",
      link: "https://www.youtube.com/watch?v=gQlMMD8auMs",
    },
  ];

  return (
    <div id="feature" className={`feature ${mode}`}>
      <h3 className="fea-heading">FEATURED COLLECTION</h3>
      <div className="fea-track">
        <div className="prev-btn fea-btn" onClick={handlePrev}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
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
                link={feature.link}
                key={feature.id}
                img={feature.img}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        <div className="next-btn fea-btn" onClick={handleNext}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Feature;
