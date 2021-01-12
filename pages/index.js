import Viajes from "../components/cards/viajes";
import Layout from "../components/layout";
import Image from "next/dist/client/image";
import Destino_card from "../components/cards/destino_card";

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Carousel from "../components/base/Carousel";
import Comprometido_card from "../components/cards/Comprometido_card";
import Categoria_card from "../components/cards/Categoria_card";
import Destacado_card from "../components/cards/Destacado_card";
import Link from 'next/link'
import Personalizado_card from "../components/cards/Personalizado_card";
import Personalizado_list from "../components/list/Personalizados_list";


const IndexPage = () => {


    return (

        <Layout>

            <div className="container container_home ">
                <div className="viaje_list">

                    <Viajes img="/svg/viajes-fly-drive.svg" text={"Viaje"} title={"Fly & Drive"}/>
                    <Viajes img="/svg/viajes-lujo-cuba.svg" text={"Viaje"} title={"Lujo a Cuba"}/>
                    <Viajes img="/svg/viajes-LGBTI-cuba.svg" text={"Viaje"} title={"LGBTI a Cuba "}/>
                    <Viajes img="/svg/viajes-accesible-cuba.svg" text={"Viaje"} title={"Accesibles "}/>
                    <Viajes img="/svg/viajes-grupo-cuba.svg" text={"Viaje"} title={"Grupos y Eventos"}/>
                    <Viajes img="/svg/viajes-experiencia-cuba.svg" text={"Viaje"} title={"Experiencias"}/>

                </div>

                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <Image
                            src="/car.png"
                            alt="Picture of the author"
                            width={350}
                            height={350}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="tarjeta_cuba">
                            <p className="tarjeta_cuba-title">Viajes a Cuba </p>
                            <p className="tarjeta_cuba-percent">100%</p>
                            <p className="tarjeta_cuba-text"><span className='underline'> auténtico </span>carácter
                                cubano </p>

                            <p className="tarjeta_cuba-desc">Descubre un país con alma, con mucho ritmo, vistas
                                coloridas y rincones desconocidos. </p>

                            <button className="btn btn-secondary rounded-pill btn-sm ">Solicitar presupuesto</button>
                        </div>

                    </div>

                    <div className="col-12 text-left">

                        <p className="title_section">Destinos a Cuba</p>
                    </div>
                    <div className="col-12">
                        <div className="viaje_list">
                            <Destino_card img="/capitolio.png" text={"Viaje a"} title={"La Habana"}/>
                            <Destino_card img="/capitolio.png" text={"Viaje a"} title={"Varadero"}/>
                            <Destino_card img="/capitolio.png" text={"Viaje a"} title={"Holguin"}/>
                            <Destino_card img="/capitolio.png" text={"Viaje a"} title={"Cienfuegos"}/>
                            <Destino_card img="/capitolio.png" text={"Viaje a"} title={"La Habana"}/>
                            <Destino_card img="/capitolio.png" text={"Viaje a"} title={"La Habana"}/>
                            <Destino_card img="/capitolio.png" text={"Viaje a"} title={"La Habana"}/>
                        </div>
                    </div>

                    <div className="col-12">
                        <Carousel/>
                    </div>


                </div>
            </div>

            <section>
                <div className='container'>
                    <div className='row g-4 justify-content-center'>
                        <div className="col-lg-11 text-left pt-4">

                            <p className="title_section">Comprometidos de principio a ﬁn</p>
                        </div>

                        <div className="col-lg-11">
                            <div className="row g-4 justify-content-center gx-2">
                                <div className="col-lg-4 col-md-6 col-12">

                                    <Comprometido_card img="/svg/quote.svg"
                                                       text={"Nuestro equipo se encuentra permanentemente operativo para darle una respuesta inmediata ante cualquier necesidad. Le ofrecemos un servicio totalmente personalizado, ajustado a sus necesidades, aportándole una cotización de su viaje en tiempo real."}
                                                       title={"Cotización inmediata "}/>

                                </div>

                                <div className="col-lg-4 col-md-6 col-12">

                                    <Comprometido_card
                                        img="/svg/24-services.svg"
                                        text={"Nunca estará solo. Le ofrecemos un servicio de atención telefónica 24 horas en destino, a través de nuestro teléfono: +53 5 5923956. Mediante el cual, le acompañaremos en todo momento, para cubrir cualquier consulta o contingencia que pudiese derivarse, durante su estancia."}
                                        title={"Atención telefónica 24h"}
                                    />
                                </div>

                                <div className="col-lg-4 col-md-6 col-12">

                                    <Comprometido_card
                                        img="/svg/all-flexibility.svg"
                                        text={"Estamos a su servicio. Antes y durante su estancia, podrá solicitarnos cualquier detalle que requiera: reservas de restaurantes, servicio de baby sister, impresión de tarjetas, peticiones especiales… todo lo que usted sueñe, durante su visita lo haremos realidad. 100% garantizado."}
                                        title={"Flexibilidad total"}
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'py-4'}>


                <div className='container'>
                    <div className='row justify-content-center mb-4 g-4'>
                        <div className='col-12 text-center'>
                            <h1 className='category_title'>Cuba</h1>
                            <p className='category_subtitle'>al detalle</p>
                            <img alt={'linea'} src='/svg/linea_curvada.svg' width={180}/>
                        </div>

                        <div className='col-12'>

                            <div className='category_list pt-md-5'>
                                <Categoria_card img={'/svg/hotel.svg'} title={'Hoteles'}/>
                                <Categoria_card img={'/svg/hotel.svg'} title={'Casas'}/>
                                <Categoria_card img={'/svg/hotel.svg'} title={'Autos'}/>
                                <Categoria_card img={'/svg/hotel.svg'} title={'Traslados'}/>
                                <Categoria_card img={'/svg/hotel.svg'} title={'Vuelos'}/>
                                <Categoria_card img={'/svg/hotel.svg'} title={'Paquetes'}/>
                                <Categoria_card img={'/svg/hotel.svg'} title={'Excursiones'}/>

                            </div>

                        </div>

                        <div className='col-12'>

                            <div className='row g-4 justify-content-center bg-blue-light'>

                                <div className="col-12 text-center pt-4 ">

                                    <p className="title_section mb-0">Hoteles destacados</p>
                                </div>

                                <div className='col-12 '>
                                    <div className='destacado_list container-fluid'>
                                        <Destacado_card
                                            img={'/hotel.png'}
                                            title={'Hotel Nacional de Cuba la isla Antillana '}
                                            subtitle={'La Habana'}
                                            value={'80'}
                                            text={'Por noche'}
                                        />

                                        <Destacado_card
                                            img={'/hotel.png'}
                                            title={'Iberostart Costa Azul'}
                                            subtitle={'Varadero'}
                                            value={'87'}
                                            text={'Por noche'}
                                        />

                                        <Destacado_card
                                            img={'/hotel.png'}
                                            title={'Manzana Kempinski'}
                                            subtitle={'La Habana'}
                                            value={'80'}
                                            text={'Por noche'}
                                        />

                                        <Destacado_card
                                            img={'/hotel.png'}
                                            title={'Melia Las Morlas'}
                                            subtitle={'La Habana'}
                                            value={'80'}
                                            text={'Por noche'}
                                        />

                                        <Destacado_card
                                            img={'/hotel.png'}
                                            title={'Hotel Nacional de Cuba la isla Antillana '}
                                            subtitle={'La Habana'}
                                            value={'80'}
                                            text={'Por noche'}
                                        />

                                        <Destacado_card
                                            img={'/hotel.png'}
                                            title={'Hotel Nacional de Cuba la isla Antillana '}
                                            subtitle={'La Habana'}
                                            value={'80'}
                                            text={'Por noche'}
                                        />
                                    </div>
                                </div>
                                <div className='col-12 text-center pb-sm-5 mt-0'>
                                    <Link href="/">
                                        <a className="text-decoration-none link-primary">
                                            Ver todos los Hoteles »

                                        </a>
                                    </Link>
                                </div>

                            </div>


                        </div>
                    </div>


                </div>
            </section>

             <section className='py-4'>
                <div className='container'>
                    <div className='row justify-content-center g-4'>
                        <div className='col-12'>

                            <div className='row g-4 justify-content-center '>

                                <div className="col-12 text-center pt-4 d-flex justify-content-between container">

                                    <p className="title_section mb-0">Viajes Personalizados</p>
                                     <Link href="/" >
                                        <a className="text-decoration-none link-primary d-none d-md-block">
                                            Ver todos »

                                        </a>
                                    </Link>
                                </div>

                                <div className='col-12 '>
                                    <Personalizado_list/>
                                </div>


                            </div>


                        </div>


                    </div>
                </div>
            </section>


             <section className='py-4'>
                <div className='container'>
                    <div className='row justify-content-center g-4'>


                    </div>
                </div>
            </section>


            <section className='py-4'>
                <div className='container'>
                    <div className='row justify-content-center g-4'>


                    </div>
                </div>
            </section>


        </Layout>

    );
};

export default IndexPage;