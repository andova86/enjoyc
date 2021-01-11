import Image from 'next/image'
import Link from 'next/link'


const Destino_card = (props) => {


    return (


        <Link href="/about" >
            <a className="text-decoration-none " >
                <div className="destino_card shadow shadow-sm">
                    <Image
                        src={props.img}
                        alt="Picture of the author"
                        layout="fill"



                    />

                    <div className="destino_card_body position-absolute bottom-0 end-0">
                        <p className="text_d">
                            {props.text}
                        </p>
                        <p className="title_d"> {props.title}</p>

                    </div>


                </div>
            </a>


        </Link>


    );
}

export default Destino_card;