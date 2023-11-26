import { magicApi } from "@/api";
import { Layout } from "@/components/layouts";
import { SetCard } from "@/components/set";
import { SetsListResponse, UniqueSet } from "@/interfaces";
import { GetStaticProps, NextPage } from 'next'


interface Props {
  sets: UniqueSet[]
}

const Home: NextPage<Props> = ({ sets }) => {
  ;



  return (
    <Layout title="Listado de cartas">

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-12">
        {sets.map((set) => <SetCard set={set} key={set.id} />)}
      </div>
    </Layout>

  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  /*   const { data } = await  // your fetch function here 
   */
  const { data } = await magicApi.get<SetsListResponse>('/sets')

  const sets: UniqueSet[] = data.data.map((set) => {
    return {
      name: set.name,
      icon_svg_uri: set.icon_svg_uri,
      id: set.id,
      code: set.code,
      uri: set.uri
    }
  })

  return {
    props: {
      sets
    }
  }
}

export default Home


