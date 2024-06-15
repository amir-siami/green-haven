import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image4 from "../images/image-4.jpg";
import image5 from "../images/image-5.jpg";
import image6 from "../images/image-6.jpg";
import image7 from "../images/image-7.jpg";

const images = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 },
  { url: image6 },
  { url: image7 },
];

function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const handleSlides = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="group relative mx-auto h-[600px] w-full max-w-[1520px] p-4">
      <div
        className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      ></div>
      <div
        onClick={handlePrev}
        style={{ backgroundColor: "var(--color-primary-300)" }}
        className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl group-hover:block"
      >
        <BsChevronCompactLeft />
      </div>
      <div
        onClick={handleNext}
        style={{ backgroundColor: "var(--color-primary-300)" }}
        className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl group-hover:block"
      >
        <BsChevronCompactRight />
      </div>
      <div className="top-4 flex justify-center py-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => handleSlides(i)}
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
