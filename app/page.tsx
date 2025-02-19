"use client";
import { motion } from "framer-motion";
import img_dawid from "@/public/homepage/img_dawid.png"
import img_bartek from "@/public/homepage/img_bartek.png"
import mini_camera from "@/public/homepage/mini_camera.png"
import React from 'react'
import Image from "next/image";
import Link from "next/link";


const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, 0, 0.9],
};

export default function Home() {
    return (
        <div className={"bg-neutral-900 min-h-screen"}>
            <div className={"pt-8 flex flex-row justify-between border-white border-2 "}>
                <Image src={img_dawid}
                       alt={"Image dawid"}
                       height={600}
                       width={600}
                />

                <div className={"flex flex-col my-10"}>

                    <div
                        className={"bg-white border-2 text-center text-4xl font-integral-medium flex flex-row justify-center items-center gap-2"}>
                        Fotner

                        <Image
                            src={mini_camera}
                            alt={"Image mini_camera"}
                            width={35}
                        />

                        Studio
                    </div>

                    <div
                        className={"text-white text-3xl font-integral-medium border-2 py-3 my-4 flex flex-col gap-3 justify-center text-center px-2"}>
                        <div>
                            Studniówki
                        </div>

                        <div className={"text-black stroke-2 stroke-white outline-2 border-solid"} style={{
                            color: "black",
                            WebkitTextStroke: "2px white",
                            fontSize: "32px",
                        }}>
                            Rolki
                        </div>

                        <div>
                            Materiały <br/> reklamowe
                        </div>

                        <div className={"text-black stroke-2 stroke-white outline-2 border-solid"} style={{
                            color: "black",
                            WebkitTextStroke: "2px white",

                        }}>
                            imprezy
                        </div>

                        <div>
                            teledysi
                        </div>

                        <div className={"text-black stroke-2 stroke-white outline-2 border-solid"} style={{
                            color: "black",
                            WebkitTextStroke: "2px white",

                        }}>
                            wydarzenia sportowe
                        </div>

                        <div>
                            wesela
                        </div>
                    </div>

                    <div
                        className={"text-white font-integral-medium text-2xl font-bold  flex flex-row  justify-between"}>
                        <Link href={'/'}>
                            <div
                                className={'bg-black  p-2 hover:bg-white hover:text-black transition ease-out duration-200 border-2 border-whited'}>
                                Kontakt
                            </div>
                        </Link>

                        <Link href={'/'}>
                            <div
                                className={'bg-black p-2 hover:bg-white hover:text-black transition ease-out duration-200 border-2 border-whited'}>
                                Nasza praca
                            </div>
                        </Link>

                        <Link href={'/'}>
                            <div
                                className={'bg-black  p-2 hover:bg-white hover:text-black transition ease-out duration-200 border-2 border-whited'}>
                                Oferta
                            </div>
                        </Link>

                    </div>




                </div>

                <Image
                    src={img_bartek}
                    alt={"Image bartek"}
                    height={600}
                    width={600}
                />

            </div>
        </div>
    );
}