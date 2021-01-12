import Link from 'next/link'
import Image from "next/image";


const Destacado_card = (props) => {


    return (


        <Link href="/">
            <a className="text-decoration-none ">
                <div className="viajero_card">
                    <div className='viajero_card_header '>
                        <p className='viajero_card_header_text'>{props.title}</p>
                        <hr className='w-100  bg-dark'/>
                    </div>
                    <div className="viajero_card_body ">
                        <p className="viajero_card_body_text"> {props.text}</p>
                    </div>
                    <div className='viajero_card_footer'>
                          <Image width={48}
                                 height={48}
                                 alt={props.name_author}
                                 src={props.img_author}
                                />



                            <div className='viajero_card_footer_autor'>


                                <p className='viajero_card_footer_autor_data_name'>{props.name_author}</p>
                                <p className='viajero_card_footer_autor_data_desc'>{props.date_author}</p>


                            </div>
                        </div>



                </div>
            </a>


        </Link>


    );
}

export default Destacado_card;