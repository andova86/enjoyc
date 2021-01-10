import Navbar from "./navbar";
import Head from 'next/head';

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Enjoy Cuba</title>
                <meta property="og:title" content="Enjoy Cuba" key="cuba"/>
            </Head>

            <Navbar/>

            <main>

                {children}

            </main>


            <footer>
                <div className="container text-center py-4">
                    <h1>Este es el Footer</h1>

                </div>

            </footer>

        </div>
    )
}