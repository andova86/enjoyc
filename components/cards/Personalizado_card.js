import Image from 'next/image'
import Link from 'next/link'


const Destacado_card = (props) => {


    return (


        <Link href="/about">
            <a className="text-decoration-none ">
                <div className="personalizado_card">
                    <div className='personalizado_card_header position-relative'>
                        <Image
                            src={props.img}
                            alt="Picture of the author"
                            width={247}
                             height={160}
                        />
                        <div className=' position-absolute top-0 end-0 '>
                             <div className='bg_price_personalizado mb-0'>
                                 <p className='bg_price_personalizado_text mb-0 lh-1 mt-1'>
                                     <span className='fw-lighter'>desde</span><br/><span className='text-dark fw-bold'>USD</span>
                                 </p>
                                 <p className='text-uppercase text-secondary  font-10 mb-0 lh-1'><span className='bg_price_personalizado_price lh-1'>{props.value}</span></p>

                             </div>

                        </div>


                    </div>
                    <div className="personalizado_card_body ">
                         <p className="personalizado_card_place_subtitle"> {props.subtitle}</p>

                        <p className="personalizado_card_place_title">
                            {props.title}
                        </p>
                        <hr className='w-50 my-2 bg-dark'/>
                        <div className='personalizado_card_place_position'>
                            <img width={16} height={16} alt={'pos'} src='/svg/start5.svg' className='mr-3'/>
                            <p className='personalizado_card_place_position_text'>{props.position}</p>
                        </div>

                        <p className='personalizado_card_place_desc'>{props.text}</p>
                         <hr className='w-100 my-2 bg-dark'/>

                         <div className='personalizado_card_body_autor'>

                             <img width={32} height={32} alt={'pos'} src={props.img_author} className='mr-3'/>

                              <div className='personalizado_card_body_autor_data'>
                                <p className='personalizado_card_body_autor_data_name'>{props.name_author}</p>
                                  <p className='personalizado_card_body_autor_data_desc'>{props.desc_author}</p>


                              </div>
                         </div>




                    </div>

                     <div className='personalizado_card_footer'>


                            <p className='personalizado_card_footer_text'> <span className='fw-lighter font-10'>USD</span> {props.cant_comment}</p>
                        </div>


                </div>
            </a>


        </Link>


    );
}

export default Destacado_card;