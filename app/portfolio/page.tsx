'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Cover1 from "@/public/portfolio_cover/img_1.jpg";
import Cover2 from "@/public/portfolio_cover/img_2.jpg";
import Cover3 from "@/public/portfolio_cover/img_3.jpg";
import Cover4 from "@/public/portfolio_cover/img_4.jpg";
import Cover5 from "@/public/portfolio_cover/img_5.jpg";

export default function PortfolioPage() {
    const { scrollYProgress } = useScroll();

    const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const dates = ["Luty 2025", "Sierpień 2024", "Listopad 2024", "Wrzesień 2024", "Wrzesień 2024"];
    const titles = [
        "Studniówka Pionki",
        "Ślub Eweliny & Patryka",
        "18 urodziny Igi",
        "HUNTRUN Białka Tatrzańska",
        "BINKIEWICZ - Ludzie Mówią",
    ];

    const transition1 = {
        duration: 1.4,
        ease: [0.6, 0.01, 0, 0.9],
    };

    return (
        <div className="bg-neutral-900 flex flex-col min-h-screen">
            <motion.div
                style={{ y: titleY, opacity }}
                className="text-center top-10 sticky"
            >
                <div className="font-integral-medium text-3xl font-bold text-white pt-10">
                    Nasze portfolio
                </div>
                <div className="font-integral-medium text-xl font-light text-white pt-5">
                    Kilka wydarzeń które z wami przeżyliśmy
                </div>
                <div className="w-1/4 h-[2px] bg-white mx-auto mt-10"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: "50%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "50%" }}
                transition={transition1}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mt-10 mb-6"
            >
                {[Cover1, Cover2, Cover3, Cover4, Cover5].map((cover, index) => (
                    <div key={index} className="flex flex-col bg-neutral-100">
                        <div className="overflow-hidden relative group">
                            <motion.div
                                className="flex flex-col items-center justify-center transition-transform duration-300 transform ease-in-out hover:scale-110 hover:brightness-75"
                            >
                                <Image
                                    src={cover}
                                    alt={`Cover ${index + 1}`}
                                    width="600"
                                    className="cursor-pointer"
                                />
                            </motion.div>
                        </div>
                        <div className="text-neutral-700 font-integral-medium italic text-xs font-light ml-2 mt-2">
                            {dates[index]}
                        </div>
                        <div className="text-black font-integral-medium font-light text-xl ml-2">
                            {titles[index]}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
