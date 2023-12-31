import {FC} from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl: string
}

export const ShopLayout: FC<Props> = ({children, title, pageDescription,imageFullUrl}) => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={pageDescription} />
            <meta name='og:title' content={title} />
            <meta name='og:description' content={pageDescription} />
            {
                imageFullUrl && (
                    <meta name='og:description' content={pageDescription} />
                )
            }
        </Head>
        <nav>
            {/* TODO: Navbar*/}
            <Navbar></Navbar>
        </nav>
        {/**  TODO Sidebar*/}
        <main style={{
            margin: '80px auto',
            maxWith: '1440px',
            padding: '0px 30px'
        }}>
            {children}
        </main>
        {/** TODO footer */}
        <footer>
            {/** TODO footer costumer */}
        </footer>
        </>
    )
}