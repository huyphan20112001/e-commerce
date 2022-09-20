import "./Banner.scss";
import React, { useState } from "react";
import images from "../../../asssets/image";
import Image from "../../../components/Image/Image";
import Button from "../../../components/Button/Button";

function Banner() {
  const [active, setActive] = useState(1);

  const banners = [
    {
      id: 1,
      title: "New generation 1",
      description:
        "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifendaptent dapibus metus maecenas consequat. Elementum interdum asemper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetrasagittis sit aliquet at. Magna nam platea justo.",
      video: images.video,
    },
    {
      id: 2,
      title: "New generation 2",
      description:
        "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifendaptent dapibus metus maecenas consequat. Elementum interdum asemper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetrasagittis sit aliquet at. Magna nam platea justo.",
      video: images.video,
    },
    {
      id: 3,
      title: "New generation 3",
      description:
        "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifendaptent dapibus metus maecenas consequat. Elementum interdum asemper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetrasagittis sit aliquet at. Magna nam platea justo.",
      video: images.video,
    },
    {
      id: 4,
      title: "New generation 4",
      description:
        "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifendaptent dapibus metus maecenas consequat. Elementum interdum asemper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetrasagittis sit aliquet at. Magna nam platea justo.",
      video: images.video,
    },
    {
      id: 5,
      title: "New generation 5",
      description:
        "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifendaptent dapibus metus maecenas consequat. Elementum interdum asemper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetrasagittis sit aliquet at. Magna nam platea justo.",
      video: images.video,
    },
  ];

  return (
    <div id="banner" className="banner">
      {banners.map((banner, index) => {
        if (active === index + 1) {
          return (
            <>
              <div key={banner.id} className="banner-show active">
                <div className="banner-desc">
                  <h3 className="banner-title">{banner.title}</h3>
                  <p className="banner-detail">{banner.description}</p>
                  <Button
                    primary
                    learn
                    href="https://www.youtube.com/watch?v=gQlMMD8auMs"
                    target="_blank"
                  >
                    LEARN MORE
                  </Button>
                </div>
                <div className="banner-video">
                  <Button
                    target="_blank"
                    video
                    href="https://www.youtube.com/watch?v=gQlMMD8auMs"
                  >
                    <Image src={banner.video} alt="video" />
                  </Button>
                </div>
              </div>
            </>
          );
        }
      })}
      <div className="banner-dots">
        <div
          onClick={() => setActive(1)}
          className={`banner-dot ${active === 1 ? "active" : ""}`}
        ></div>
        <div
          onClick={() => setActive(2)}
          className={`banner-dot ${active === 2 ? "active" : ""}`}
        ></div>
        <div
          onClick={() => setActive(3)}
          className={`banner-dot ${active === 3 ? "active" : ""}`}
        ></div>
        <div
          onClick={() => setActive(4)}
          className={`banner-dot ${active === 4 ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
}

export default Banner;
