import Image from 'next/image'
import Link from 'next/link'


const Viajes = (pr ops) => {


    return (


        <Link href="/about">
            <a className="text-decoration-none">
                 <div className="viaje_card">
                <Image
                    src={props.img}
                    alt="Picture of the author"
                    width={32}
                    height={32}
                    className="img-card"

                />

                <div className="viaje_card_body">
                    <p className="text_v">
                        {props.text}
                    </p>
                    <p className="title_v"> {props.title}</p>

                </div>


            </div>
            </a>

        </Link>


    );
}

export default Viajes;