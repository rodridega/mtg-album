import Head from "next/head"
import { ReactNode } from "react"
import { Navbar } from "../ui"

type LayoutProps = {
    children: ReactNode,
    title?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title || 'Magic App'} </title>
                <meta name="author" content="Rodrigo Deganutti" />
                <meta name="description" content="Album de Cartas" />
                <meta name="keywords" content="XXXX, magic, album" />
            </Head>

            <Navbar />
            <main className="p-5">
                {children}
            </main>
        </>
    )
}
