import Destacado_card from "../cards/Destacado_card";
import Link from "next/link";


const DestacadosList = (props) => {

    const data = [
        {
            id: 1,
            img: '/hotel.png',
            title: 'Iberostart Costa Azul',
            subtitle: 'Varadero',
            value: '87',
            text: 'Por noche',
        },
        {
                id: 2,
                img: '/hotel.png',
                title: 'Iberostart Costa Azul',
                subtitle: 'Varadero',
                value: '87',
                text: 'Por noche',
            },
        {
                id: 3,
                img: '/hotel.png',
                title: 'Iberostart Costa Azul',
                subtitle: 'Varadero',
                value: '87',
                text: 'Por noche',
            }
   ];




    const handleSearch = (e) => {
        console.log(e);


    }

    return (

        <div className='row g-4 justify-content-center bg-blue-light'>

            <div className="col-12 text-center pt-4 ">

                <p className="title_section mb-0">{props.name} destacados</p>
            </div>

            <div className='col-12 '>
                <div className='destacado_list container-fluid'>

                    {
                        data.map((item) =>

                            <Destacado_card
                                img={item.img}
                                title={item.title}
                                subtitle={item.subtitle}
                                value={item.value}
                                text={item.text}
                            />
                        )
                    }


                </div>

            </div>
            <div className='col-12 text-center pb-md-5 mt-0 mb-0'>
                <Link href="/">
                    <a className="text-decoration-none link-primary">
                        Ver todos los Hoteles »

                    </a>
                </Link>
            </div>

        </div>


    )
};

export default DestacadosList;