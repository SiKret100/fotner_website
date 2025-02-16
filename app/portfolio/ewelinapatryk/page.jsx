"use client"
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import React, {useState} from "react";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

const rawImages = [];
for (let index = 1; index <= 13; index++) {
    rawImages.push(`/ewelinapatryk/img_${index}.jpg`);
}

const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, 0, 0.9],
};

export default function EwelinaPatryk() {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoadedImages( (prev) => setLoadedImages(prev + 1))
        if(loadedImages == rawImages.length + 1){
            setIsLoaded(true);
        }

    }
        return (
        <div className="bg-neutral-900 min-h-screem">

            <div className="max-w-screen-lg mx-auto">

                <div className="relative flex items-center">
                    <div className="absolute left-0 flex sm:items-center items-end h-full">
                        <motion.div
                            initial={{ opacity: 0, y: "-50%" }}
                            animate={{ opacity: 1, y: 0}}
                            exit={{ opacity: 0, y: "-50%" }}
                            transition={transition1}
                            className="sm:text-5xl text-xl text-white pl-10 flex-row">
                            <div className="font-integral-medium font-bold">
                                Ewelina i Patryk
                            </div>

                            <div className={"font-integral-medium"}>
                                ślub w chełmie
                            </div>
                        </motion.div>

                    </div>

                    <motion.div

                        className="ml-auto px-4">
                        <Image
                            src="/ewelinapatryk/img_14.jpg"
                            alt="Image 14"
                            width={800}
                            height={800}
                            onLoad={handleImageLoad}
                        />
                    </motion.div>


                </div>

                <div className="w-1/4 h-[2px] bg-white mx-auto mt-10 mb-6"></div>


                <div>
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={rawImages.map((x) => ({
                            src: x,
                            width: 1200,
                        }))}
                        index={currentIndex}
                        styles={{
                            container: {
                                backgroundColor: "rgba(0, 0, 0, .8)",
                                backdropFilter: "blur(10px)",
                            },
                        }}
                    />

                    <div className="columns-3 gap-4 px-4 pb-4">
                        {rawImages.map((image, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale:0 }}
                                animate={{ opacity: 1, scale:1}}
                                exit={{ opacity: 0, y: "-50%" }}
                                transition={transition1}
                                key={index}
                                className="pt-4">
                                <Image
                                    src={image}
                                    alt={"Ewelina Patryk " + index}
                                    width={400}
                                    height={400}
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setOpen(true);
                                    }}
                                    onLoad={handleImageLoad}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
