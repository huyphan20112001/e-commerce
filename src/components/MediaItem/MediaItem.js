import "./MediaItem.scss";
import React from "react";
import images from "../../asssets/image";
import Image from "../Image/Image";
import Button from "../Button/Button";

const media = [
  {
    id: 1,
    img: images.media,
    title: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
    description:
      "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
  },
  {
    id: 2,
    title: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
    description:
      "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
  },
  {
    id: 3,
    title: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
    description:
      "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
  },
  {
    id: 4,
    title: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
    description:
      "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
  },
  {
    id: 5,
    title: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
    description:
      "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.",
  },
];

function MediaItem() {
  return (
    <>
      {media.map((medium) => (
        <div key={medium.id} className={"media-item-".concat(medium.id)}>
          <div
            style={medium.img ? { display: "block" } : { display: "none" }}
            className="media-img"
          >
            <Image src={medium.img} alt={medium.title} />
          </div>
          <div className="media-info">
            <h4 className="media-title">{medium.title}</h4>
            <p className="media-desc">{medium.description}</p>
          </div>
          <Button href="#" primary learn learnBlackBorder read>
            READ MORE
          </Button>
        </div>
      ))}
    </>
  );
}

export default MediaItem;
