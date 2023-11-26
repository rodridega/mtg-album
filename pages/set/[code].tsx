import { magicApi } from '@/api'
import { Card } from '@/components/card'
import { Layout } from '@/components/layouts'
import { CardData, SetData, SetsListResponse } from '@/interfaces'
import axios from 'axios'
import { GetStaticProps, NextPage, GetStaticPaths } from 'next'

import React from 'react'

interface Props {
  set: CardData[]
}

const Set: NextPage<Props> = ({ set }) => {


  return (
    <Layout>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 xl:grid-cols-6">
        {set.map((card) => (
          card.image_uris?.normal && (
            <Card key={card.id} card={card} />
          )
        ))}
      </div>
    </Layout>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await magicApi.get<SetsListResponse>('/sets')

  return {
    paths: data.data.map((set) => ({
      params: { code: set.code }
    })),
    fallback: "blocking"
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  try {
    const data = await magicApi.get<SetData>(`/cards/search?include_extras=true&include_variations=true&order=set&q=e%3A${ctx.params?.code}&unique=prints`)
    return {
      props: {
        set: data.data.data
      }
    }
  } catch (error: unknown) {

    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 429) {
        console.error('Límite de velocidad excedido. Reintentando después de un retraso...');

        // Reintentar después de 5 segundos
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // Reintentar la solicitud
        return getStaticProps(ctx);
      } else {
        console.error('Error:', error.message);
        return {
          props: {
            set: [], // O algún valor por defecto
          },
        };
      }
    } else {
      console.error('Error desconocido:', error);
    }
    // Devuelve un objeto vacío o algún valor por defecto en caso de error
    return {
      props: {
        set: [], // O algún valor por defecto
      },
    };
  }



}

export default Set