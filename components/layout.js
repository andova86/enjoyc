import Navbar from "./navbar";
import Head from 'next/head';
import Image from "next/dist/client/image";
import Link from "next/link";

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Enjoy Cuba</title>
                <meta property="og:title"
                      content="Enjoy Cuba"
                      key="cuba"/>
            </Head>

            <Navbar/>

            <main className='main'>

                {children}

            </main>


            <footer className='border-top shadow'>
                <div className="container  py-4">

                    <div className="footer_div">
                        <div className="footer_div_boxsocial">
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/svg/logo_blue.svg"
                                        alt="logo"
                                        width={100}
                                        height={85}
                                    />
                                </a>


                            </Link>

                            <div className="footer_div_boxsocial_social">
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/svg/twitter_blue.svg"
                                            alt="logo"
                                            width={16}
                                            height={16}
                                        />
                                    </a>

                                </Link>
                                <Link href="/">
                                    <a className='link-dark'>
                                        <Image
                                            src="/svg/facebook_blue.svg"
                                            alt="logo"
                                            width={16}
                                            height={16}
                                        />
                                    </a>

                                </Link>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/svg/instagram_blue.svg"
                                            alt="logo"
                                            width={16}
                                            height={16}
                                        />
                                    </a>

                                </Link>
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/svg/linkedin_blue.svg"
                                            alt="logo"
                                            width={16}
                                            height={16}
                                        />
                                    </a>

                                </Link>

                            </div>

                        </div>

                        <div className='d-inline-flex '>
                             <div className='footer_div_link pr-5'>

                                <p className='footer_div_link_title'>
                                    Sitios EnjoyCuba
                                </p>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        España
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        México
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Colombia
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Italia
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Portugal
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Rusia
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Chile
                                    </a>
                                </Link>
                            </div>

                           <div className='footer_div_link'>

                                <p className='footer_div_link_title'>
                                    Más...
                                </p>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        About Us
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Blog
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country '>
                                        Contact
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Sitemap
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Privacy Policy
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className='text-decoration-none footer_div_link_country'>
                                        Terms of use
                                    </a>
                                </Link>


                            </div>

                        </div>



                    </div>


                </div>
                <div className='bg-secondary py-2 text-center text-white font-10'>
                    © EnjoyCuba. All rights reserved.
                </div>

            </footer>

        </div>
    )
}