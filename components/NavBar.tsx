import Image from "next/image";
import Logo from "../public/fotner_logo.png"
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className={"fixed w-full h-24 bg-white shadow-xl"}>
            <div className={"flex justify-between items-center h-full px-4 2xl:px-16"}>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Fotner Studio"
                        width="95"
                        className="cursor-pointer"
                    />
                </Link>


                    <ul className={"hidden sm:flex"}>
                        <Link href="/">
                            <li className={"mr-10 uppercase"}>Home</li>
                        </Link>

                        <Link href="/">
                            <li className={"mr-10 uppercase"}>O nas</li>
                        </Link>

                        <Link href="/">
                            <li className={"mr-10 uppercase"}>Nasza praca</li>
                        </Link>

                        <Link href="/">
                            <li className={"uppercase"}>Kontakt</li>
                        </Link>
                    </ul>


            </div>

        </nav>
    )
}