"use client"

import Image from "next/image";
import Logo from "../public/fotner_logo.png"
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTikTok} from "react-icons/ai";
import {useState} from "react";

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleNav = () : void => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={"fixed w-full h-20 bg-neutral-950 shadow-xl z-50"}>

            <div className="relative flex items-center h-full px-4 2xl:px-16 justify-start">
                <Link href="/" className="">
                    <Image
                        src={Logo}
                        alt="Fotner Studio"
                        width="70"
                        className="cursor-pointer h-120"
                    />
                </Link>

                <div
                    className="hidden sm:flex absolute left-1/2 -translate-x-1/2 justify-center items-center">
                    <ul className="flex">
                        <Link href="/">
                            <li className="font-integral-medium font-bold mr-10 text-white bg-black p-1 hover:bg-white hover:text-black transition ease-out duration-200">Home</li>
                        </Link>

                        <Link href="/">
                            <li className="font-integral-medium font-bold mr-10 text-white bg-black p-1 hover:bg-white hover:text-black transition ease-out duration-200">O
                                nas
                            </li>
                        </Link>

                        <Link href="/portfolio">
                            <li className="font-integral-medium font-bold mr-10 text-white bg-black p-1 hover:bg-white hover:text-black transition ease-out duration-200">Nasza
                                praca
                            </li>
                        </Link>

                        <Link href="/">
                            <li className="font-integral-medium font-bold text-white bg-black p-1 hover:bg-white hover:text-black transition ease-out duration-200">Kontakt</li>
                        </Link>
                    </ul>
                </div>

                <div className="flex flex-row justify-end ml-auto">
                    <Link href="/">
                        <AiOutlineInstagram size={25} className="cursor-pointer hover:scale-125 transform ease-in-out duration-200" color="white"/>
                    </Link>
                    <Link href={"/"}>
                        <AiOutlineFacebook size={25} className="cursor-pointer ml-10 hover:scale-125 transform ease-in-out duration-200" color="white"/>
                    </Link>
                    <Link href={"/"}>
                        <AiOutlineTikTok size={25} className="cursor-pointer ml-10 hover:scale-125 transform ease-in-out duration-200" color="white"/>
                    </Link>
                </div>

                <div onClick={handleNav} className={"sm:hidden cursor-pointer pl-10 hover:scale-125 transform ease-in-out duration-200"}>
                    <AiOutlineMenu size={25} color={"white"}/>
                </div>

            </div>


            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-100 p-10 ease-in duration-500"
                    :
                    "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"

            }>
                <div className={"flex w-full  items-center justify-between"}>
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Fotner Studio"
                            width="70"
                            className="cursor-pointer"
                        />
                    </Link>

                    <div onClick={handleNav} className={"cursor-pointer"}>
                        <AiOutlineClose size={25}/>
                    </div>
                </div>

                <div className={"flex-col py-4"}>
                    <ul>
                        <Link href="/">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className={"font-integral-medium font-bold py-4 cursor-pointer"}>Home
                            </li>
                        </Link>

                        <Link href="/">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className={"font-integral-medium font-bold py-4 cursor-pointer"}>O nas
                            </li>
                        </Link>

                        <Link href="/portfolio">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className={"font-integral-medium font-bold py-4 cursor-pointer"}>Nasza praca
                            </li>
                        </Link>

                        <Link href="/">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className={"font-integral-medium font-bold py-4 cursor-pointer"}>Kontakt
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className={"flex flex-row justify-around pt-10 items-center"}>
                    <AiOutlineInstagram size={25} className={"cursor-pointer"}/>
                    <AiOutlineFacebook size={25} className={"cursor-pointer"}/>
                    <AiOutlineTikTok size={25} className={"cursor-pointer"}/>
                </div>

            </div>

        </nav>
    )
}