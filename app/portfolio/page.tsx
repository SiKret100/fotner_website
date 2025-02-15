'use client'
import Image from "next/image";
import Cover1 from "@/public/portfolio_cover/img_1.jpg"
import Cover2 from "@/public/portfolio_cover/img_2.jpg"
import Cover3 from "@/public/portfolio_cover/img_3.jpg"
import Cover4 from "@/public/portfolio_cover/img_4.jpg"
import Cover5 from "@/public/portfolio_cover/img_5.jpg"
import { RiCameraLensLine } from "react-icons/ri";


export default function PortfolioPage() {
    return(
        <div className={"bg-neutral-900 flex flex-col justify-center mx-60 pb-10 "}>
            <div className={"font-integral-medium text-3xl font-light text-white text-center pt-10"}>
                Nasze portfolio

            </div>

            <div className={"font-integral-medium text-xl font-light text-white text-center pt-5"}>
                Kilka naszych przykładowych prac prezentujących co oferujemy
            </div>

            <div className={"flex flex-row flex-wrap gap-3 justify-center pt-10"}>

                <div className={"flex flex-col bg-neutral-100"}>
                    <div className="overflow-hidden relative group">
                        <div
                            className="flex flex-col items-center justify-center transition-transform duration-300 transform ease-in-out hover:scale-110 hover:brightness-75">

                            <Image
                                src={Cover1}
                                alt="Cover 1"
                                width="400"
                                className="cursor-pointer"
                            />

                        </div>
                    </div>


                    <div className={"text-black font-integral-medium font-light "}>
                        Studniówka Pionki Luty 2025
                    </div>
                </div>

                <div className={"flex flex-col bg-neutral-100"}>
                    <div className="overflow-hidden relative group">
                        <div
                            className="flex flex-col items-center justify-center transition-transform duration-300 transform ease-in-out hover:scale-110 hover:brightness-75">

                            <Image
                                src={Cover2}
                                alt="Cover 2"
                                width="400"
                                className="cursor-pointer"
                            />

                        </div>
                    </div>

                    <div className={"text-black font-integral-medium font-light "}>
                        Wesele Eweliny & Patryka Sierpień 2024
                    </div>
                </div>

                <div className={"flex flex-col bg-neutral-100"}>
                    <div className="overflow-hidden relative group">
                        <div
                            className="flex flex-col items-center justify-center transition-transform duration-300 transform ease-in-out hover:scale-110 hover:brightness-75">

                            <Image
                                src={Cover3}
                                alt="Cover 3"
                                width="400"
                                className="cursor-pointer"
                            />

                        </div>
                    </div>

                    <div className={"text-black font-integral-medium font-light "}>
                        18 urodziny Igi 2024
                    </div>
                </div>

                <div className={"flex flex-col bg-neutral-100"}>
                    <div className="overflow-hidden relative group">
                        <div
                            className="flex flex-col items-center justify-center transition-transform duration-300 transform ease-in-out hover:scale-110 hover:brightness-75">

                            <Image
                                src={Cover4}
                                alt="Cover 4"
                                width="400"
                                className="cursor-pointer"
                            />

                        </div>
                    </div>

                    <div className={"text-black font-integral-medium font-light "}>
                        HUNTRUN 2024 Białka Tatrzańska
                    </div>
                </div>

                <div className={"flex flex-col bg-neutral-100"}>
                    <div className="overflow-hidden relative group">
                        <div
                            className="flex flex-col items-center justify-center transition-transform duration-300 transform ease-in-out hover:scale-110 hover:brightness-75">

                            <Image
                                src={Cover5}
                                alt="Cover 5"
                                width="400"
                                className="cursor-pointer"
                            />

                        </div>
                    </div>

                    <div className={"text-black font-integral-medium font-light "}>
                        Teledysk BINKIEWICZ - Ludzie Mówią
                    </div>
                </div>


            </div>

        </div>
    )
}