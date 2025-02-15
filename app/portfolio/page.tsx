'use client';
import Image from "next/image";
import Cover1 from "@/public/portfolio_cover/img_1.jpg";
import Cover2 from "@/public/portfolio_cover/img_2.jpg";
import Cover3 from "@/public/portfolio_cover/img_3.jpg";
import Cover4 from "@/public/portfolio_cover/img_4.jpg";
import Cover5 from "@/public/portfolio_cover/img_5.jpg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, 0, 0.9],
};

export default function PortfolioPage() {
    const pathname = usePathname();

    console.log("PortfolioPage rendered with pathname:", pathname);

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="bg-neutral-900 flex flex-col justify-center mx-60 pb-10"
        >
            <div className="font-integral-medium text-3xl font-light text-white text-center pt-10">
                Nasze portfolio
            </div>

            <div className="font-integral-medium text-xl font-light text-white text-center pt-5">
                Kilka naszych przykładowych prac prezentujących co oferujemy
            </div>

            <motion.div
                initial={{ opacity: 0, y: "50%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "50%" }}
                transition={transition1}
                className="flex flex-row flex-wrap gap-3 justify-center pt-10"
            >
                {[Cover1, Cover2, Cover3, Cover4, Cover5].map((cover, index) => (
                    <div key={index} className="flex flex-col bg-neutral-100">
                        <div className="overflow-hidden relative group">
                            <div className="flex flex-col items-center justify-center transition-transform duration-300 transform ease-in-out hover:scale-110 hover:brightness-75">
                                <Image
                                    src={cover}
                                    alt={`Cover ${index + 1}`}
                                    width="400"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="text-black font-integral-medium font-light">
                            {[
                                "Studniówka Pionki Luty 2025",
                                "Wesele Eweliny & Patryka Sierpień 2024",
                                "18 urodziny Igi 2024",
                                "HUNTRUN 2024 Białka Tatrzańska",
                                "Teledysk BINKIEWICZ - Ludzie Mówią",
                            ][index]}
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}