// components/TextWrapAroundImage.tsx
import React from "react";

interface TextWrapAroundImageProps {
  imageUrl: string;
  text: string;
}

const TextWrapAroundImage: React.FC<TextWrapAroundImageProps> = ({
  imageUrl,
  text,
}) => {
  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <img
        src={imageUrl}
        alt="Background"
        style={{ width: "100%", height: "auto" }}
      />
      <p
        style={{
          position: "absolute",
          top: 0,
          right: "100%",
          width: "200px",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default TextWrapAroundImage;
