import Image from "next/image";
import Logo from "../public/fotner_logo.png"
import Link from "next/link";

export default function NavBar() {
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

        </nav>
    )
}