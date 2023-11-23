import Image from "next/image"

export const Navbar = () => {
    return (
        <div className="flex w-full flex-row items-center justify-start px-0 py-5 bg-gray-900 text-white">
            <Image
                alt="Carta random"
                width={70}
                height={70}
                src={"https://cards.scryfall.io/small/front/b/c/bcedbfc9-dd0c-4298-976e-a66fd5d4d2a5.jpg?1698987923"}
            />
            <p className="text-xl"><span className="text-3xl">M</span>agic</p>

            <div className="flex-1"></div>
            <p>Favoritos</p>
        </div>
    )
}
