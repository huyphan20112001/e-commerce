import React, { forwardRef, useState } from "react";
import images from "../../asssets/image";

const Image = forwardRef(({ src, className, ...props }, ref, alt) => {
  const [fallBack, setFallback] = useState("");

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      src={fallBack || src}
      className={className}
      ref={ref}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
