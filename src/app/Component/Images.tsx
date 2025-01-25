"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

// Define the type for an image object, assuming each image is an object with a URL and other properties.
interface ImageObject {
  _id: string;
  _type: "image";
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface iAppProps {
  images: ImageObject[]; // Array of ImageObject
}

export default function Images({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState<ImageObject>(images[0]);

  const handleSmallImageClick = (image: ImageObject) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {/* Corrected Large Image */}
      <div className="relative overflow-hidden rounded-lg lg:col-span-5">
        <Image
          src={urlFor(bigImage).url()}
          alt={bigImage.alt || ""}
          width={492}
          height={360}
          className="object-cover object-center"
        />

        <div className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </div>
      </div>

      {/* Small Images */}
      <div className="flex gap-4 lg:col-span-5 overflow-auto">
        {images.map((image: ImageObject, idx: number) => (
          <div key={idx} className="overflow-hidden rounded-lg">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt={image.alt || ""}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
