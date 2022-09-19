import "./ProductsItem.scss";
import images from "../../asssets/image";
import React from "react";
import Image from "../Image/Image";

const products = [
  {
    id: 1,
    img: images.prod1,
    title: "Bedroom Tiles",
    description: "Ante mus blandit sapien sociosqu per consequat ad.",
  },
  {
    id: 2,
    img: images.prod2,
    title: "Bedroom Tiles",
    description: "Ante mus blandit sapien sociosqu per consequat ad.",
  },
  {
    id: 3,
    img: images.prod3,
    title: "Outdoor Tiles",
    description: "Ante mus blandit sapien sociosqu per consequat ad.",
  },
  {
    id: 4,
    img: images.prod4,
    title: "Kitchen Tiles",
    description: "Ante mus blandit sapien sociosqu per consequat ad.",
  },
];

function ProductsItem() {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={"product-item-".concat(product.id)}>
          <div className="product-img">
            <Image src={product.img} alt={product.title} />
          </div>
          <div className="product-info">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-desc">{product.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductsItem;
