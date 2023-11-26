import { CardData } from '@/interfaces'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
    card: CardData
}

export const Card: FC<Props> = ({ card }) => {

    console.log(card);


    const router = useRouter()
    const goCardInfo = () => {
        router.push(`/card/${card.name}`)
    }


    return (
        <div key={card.id} onClick={goCardInfo} className='cursor-pointer'>
            <Image src={card.image_uris?.normal} alt={card.name} width={350} height={1} />
        </div>
    )
}
