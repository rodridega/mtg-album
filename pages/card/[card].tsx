import { Layout } from '@/components/layouts'
import { NextPage,GetStaticPaths,GetStaticProps } from 'next'
import React from 'react'

interface Props{
    card: string
}


const Card: NextPage<Props> = ({card}) => {

    console.log(card);
    

    return (
        <Layout>

        </Layout>
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {


    return {
        paths: [
            {
                params: {
                    card: 'pepe'
                }
            }
        ],
        fallback: "blocking"
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

    console.log(ctx.params)

    return {
        props: {
            
        }
    }
}



export default Card