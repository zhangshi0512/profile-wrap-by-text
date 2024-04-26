// pages/index.tsx
import React from "react";
import ImageUpload from "../components/ImageUpload";
import TextWrapAroundImage from "../components/TextWrapAroundImage";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Profile Wrap by Text</h1>
      <ImageUpload />
      <TextWrapAroundImage
        imageUrl="/path/to/image.jpg"
        text="Example text that will wrap around the image boundary."
      />
    </div>
  );
};

export default Home;
