"use client"

import Image from "next/image";
import Logo from "../public/fotner_logo.png"
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTikTok} from "react-icons/ai";
import {useState} from "react";

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={"fixed w-full h-18 bg-white shadow-xl"}>
            <div className={"flex justify-between items-center h-full px-4 2xl:px-16"}>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Fotner Studio"
                        width="75"
                        className="cursor-pointer"
                    />
                </Link>

                <div className={"hidden sm:flex"}>
                    <ul className={"hidden sm:flex"}>
                        <Link href="/">
                            <li className={"font-integral-medium font-bold mr-10"}>Home</li>
                        </Link>

                        <Link href="/">
                            <li className={"font-integral-medium font-bold mr-10"}>O nas</li>
                        </Link>

                        <Link href="/">
                            <li className={"font-integral-medium font-bold mr-10"}>Nasza praca</li>
                        </Link>

                        <Link href="/">
                            <li className={"font-integral-medium font-bold"}>Kontakt</li>
                        </Link>
                    </ul>
                </div>

                <div onClick = {handleNav} className={"sm:hidden cursor-pointer pl-24"}>
                    <AiOutlineMenu size={25}/>
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
                                className={"font-integral-medium font-bold py-4 cursor-pointer"}>Home</li>
                        </Link>

                        <Link href="/">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className={"font-integral-medium font-bold py-4 cursor-pointer"}>O nas</li>
                        </Link>

                        <Link href="/">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className={"font-integral-medium font-bold py-4 cursor-pointer"}>Nasza praca</li>
                        </Link>

                        <Link href="/">
                            <li
                                onClick={() => setMenuOpen(false)}
                                className={"font-integral-medium font-bold py-4 cursor-pointer"}>Kontakt</li>
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