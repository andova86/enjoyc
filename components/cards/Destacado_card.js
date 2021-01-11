import Image from 'next/image'
import Link from 'next/link'


const Destacado_card = (props) => {


    return (


        <Link href="/about">
            <a className="text-decoration-none ">
                <div className="destacado_card">
                    <div className='destacado_card_header position-relative'>
                        <Image
                            src={props.img}
                            alt="Picture of the author"
                            width={193}
                             height={155}
                        />
                        <div className='position-absolute top-0 end-0'>
                            <Image
                            src={'/svg/start5.svg'}
                            alt="start"
                            width={50}
                             height={50}
                        />
                        </div>


                    </div>


                    <div className="destacado_card_body ">

                        <p className="destacado_card_place_title">
                            {props.title}
                        </p>
                        <p className="destacado_card_place_subtitle"> {props.subtitle}</p>



                    </div>

                     <div className='destacado_card_footer'>
                            <p className='destacado_card_footer_text'>{props.text}</p>

                            <p className='destacado_card_footer_value'> <span className='fw-lighter font-10'>USD</span> {props.value}</p>
                        </div>


                </div>
            </a>


        </Link>


    );
}

export default Destacado_card;