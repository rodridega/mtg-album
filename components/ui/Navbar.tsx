import Link from "next/link"

export const Navbar = () => {


    return (
        <div className="flex w-full flex-row items-center justify-start p-5 bg-gray-900 text-white">

            <Link href={'/'} className="text-xl cursor-pointer"><span className="text-3xl">M</span>agic</Link>

            <div className="flex-1"></div>
            <p>Favoritos</p>
        </div>
    )
}
