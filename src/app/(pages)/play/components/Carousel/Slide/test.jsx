"use client";
import Gutter from "../Gutter";
import Button from "./Button";
import Pin from "./Pin";
import { useCallback, useEffect, useState, useMemo } from "react";
import { HomeImageType, SliderButtonVariants } from "@/app/utils/global.types";
import Image from "next/image";
import { API_URL } from "@/app/utils/apiUrl.util";

const Slider = () => {
  const [imageAnimation, setImageAnimation] = useState("fade-in");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [images, setImages] = useState<Array<HomeImageType>>([]);
  const currentImage: HomeImageType = images[currentIndex];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + "/api/home/images");
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const IncrementCurrentImage = useCallback(() => {
    if (images.length > 1) {
      setImageAnimation("transition-right");
    }
    setIsActive(true);
    setCurrentIndex((prevCur) => {
      if (prevCur === images.length - 1) {
        return 0;
      }
      return prevCur + 1;
    });
  }, [images]);

  const DecrementCurrentImage = () => {
    if (images.length > 1) {
      setImageAnimation("transition-left");
    }
    setIsActive(true);
    setCurrentIndex((prevCur) => {
      if (prevCur === 0) {
        return images.length - 1;
      }
      return prevCur - 1;
    });
  };

  const setCurrentImage = (index: number) => {
    setIsActive(true);
    setImageAnimation("fade-in");
    setCurrentIndex(index);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (!isActive) {
        IncrementCurrentImage();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isActive, IncrementCurrentImage]);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(false);
      }, 5000);
    }
  }, [isActive]);

  return (
    <Gutter>
      <div
        className="lg:h-[36rem] xl:h-[40rem] overflow-hidden flex w-full
        items-center justify-center rounded-xl relative bg-black aspect-video"
      >
        {currentImage && (
          <Image
            src={`${API_URL}${currentImage.path}${currentImage.fileName}`}
            alt={currentImage.alt}
            key={`${API_URL}${currentImage.path}/${currentImage.fileName}`}
            width={1280}
            height={720}
            priority
            unoptimized
            className={`bg-gray-400 bg-cover ${imageAnimation}`}
          />
        )}
        <Button
          type={SliderButtonVariants.backward}
          handleClick={DecrementCurrentImage}
        />
        <Button
          type={SliderButtonVariants.forward}
          handleClick={IncrementCurrentImage}
        />
        <div className="absolute w-full bottom-4 flex justify-center gap-2">
          {images &&
            images.map((image,i) => (
              <Pin
                key={i}
                image={image}
                index={currentIndex}
                currentIndex={i}
                handleClick={setCurrentImage}
              />
            ))}
        </div>
      </div>
    </Gutter>
  );
};

export default Slider;