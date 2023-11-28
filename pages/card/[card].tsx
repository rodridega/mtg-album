import { magicApi } from '@/api'
import { Layout } from '@/components/layouts'
import { CardInfo } from '@/interfaces'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const Card: NextPage = () => {

    const router = useRouter()

    const [card, setCard] = useState<CardInfo>()
    console.log(card);

    useEffect(() => {
        magicApi.get<CardInfo>(`/cards/named?fuzzy=${router.query?.card}`)
            .then((data) => setCard(data?.data))
    }, [])



    return (
        <Layout>
            <div className='flex justify-between'>
                <div className='w-3/12'>
                    <img src={card?.image_uris?.normal} alt={card?.name} />
                </div>
                <div className='w-8/12 bg-slate-300 p-4 rounded-md'>
                    <h2 className='text-3xl'> {card?.name} </h2>
                    <p className='font-semibold'> {card?.type_line} </p>
                    <p> Precio: ${card?.prices?.usd} </p>
                    <p className='font-serif'> {card?.flavor_text} </p>
                </div>
            </div>

        </Layout>
    )
}

export default Card