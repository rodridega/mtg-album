import { UniqueSet } from "@/interfaces"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
    set: UniqueSet
}

export const SetCard: FC<Props> = ({ set }) => {

    const router = useRouter()

    const goToSet = () => {
        router.push(`/set/${set.code}`)
    }


    return (
        <div onClick={goToSet} className="border border-orange-200 rounded-md flex flex-col items-center justify-evenly cursor-pointer hover:bg-orange-100">
            <div className="p-1">
                <Image src={set.icon_svg_uri} alt={set.name} width={50} height={50} />
            </div>
            <div>
                <p className="text-center">
                    {set.name}
                </p>
            </div>
        </div>
    )
}
