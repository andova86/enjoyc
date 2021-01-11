import Image from 'next/image'
import Link from 'next/link'


const Destino_card_s = (props) => {


    return (


        <Link href="/about" >
            <a className="text-decoration-none " >
                <div className="destino_card_s border border-1">


                        <p className="destino_card_s_title">
                            {props.title}
                        </p>


                </div>
            </a>


        </Link>


    );
}

export default Destino_card_s;