"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../public/fotner_logo.png";
import React from 'react'

const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, 0, 0.9],
};

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={transition1}
            className="min-h-screen flex flex-col justify-center items-center"
        >
            <div className="py-20 flex w-full justify-between items-center max-w-7xl">
                <Image
                    src={Logo}
                    alt="Fotner Studio"
                    width={500}
                    className="cursor-pointer"
                />
                <motion.div
                    initial={{ opacity: 0, y: "-50%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-50%" }}
                    transition={transition1}
                    className="text-center font-integral-medium font-bold text-5xl"
                >
                    Dawid Rutkowski <br /> & <br /> Bartosz Ptaszek
                </motion.div>
                <Image
                    src={Logo}
                    alt="Fotner Studio"
                    width={500}
                    className="cursor-pointer"
                />
            </div>
        </motion.div>
    );
}