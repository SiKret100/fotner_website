"use client";
import { motion } from "framer-motion";
import img_bg from "@/public/homepage/bg_photo_ng.jpg";
import mini_camera from "@/public/homepage/mini_camera.png";
import React from "react";
import Image from "next/image";
import GradualSpacing from "@/components/gradual-spacing";

const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, 0, 0.9],
};

export default function Home() {
    return (
        <div className={"bg-white"}>
            <div className={"relative h-screen"}>
                <div
                    className="absolute text-white flex flex-row justify-center items-center font-integral-medium font-bold text-7xl pb-10 w-screen z-10"
                    style={{
                        background: "linear-gradient(180deg, rgba(0,0,0,1) 54%, rgba(0,0,0,0) 100%)",
                    }}
                >
                    <Image
                        src={mini_camera}
                        alt={"Image mini_camera"}
                        width={65}
                        height={65}
                        className={"invert mx-2"}
                    />

                    <motion.div
                        className={""}
                        initial={{ opacity: 0, y: "-50%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-50%" }}
                        transition={transition1}
                    >
                        <GradualSpacing text="Fotner Studio" />
                    </motion.div>
                </div>

                <motion.div
                    className="absolute w-full h-full z-0"
                    initial={{ opacity: 0, y: "-50%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-50%" }}
                    transition={transition1}
                >
                    <Image
                        src={img_bg}
                        alt={"Image background"}
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>
            </div>
        </div>
    );
}
