"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react";

interface iAppProps {
    images: any;
}

export default function Images({ images }: iAppProps) {
    const [bigImage, setBigImage] = useState(images[0]);

    const handleSmallImageClick = (image: any) => {
        setBigImage(image);
    }

    return (
        <div className="grid gap-4 lg:grid-cols-5">
            {/* Corrected Large Image */}
            <div className="relative overflow-hidden rounded-lg lg:col-span-5">
                <Image 
                    src={urlFor(bigImage).url()} 
                    alt="" 
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
                {images.map((image: any, idx: any) => (
                    <div key={idx} className="overflow-hidden rounded-lg ">
                        <Image 
                            src={urlFor(image).url()} 
                            width={200} 
                            height={200} 
                            alt="" 
                            className="h-full w-full object-cover object-center cursor-pointer" 
                            onClick={() => handleSmallImageClick(image)} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
