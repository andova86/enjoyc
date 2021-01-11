import Image from 'next/image'



const Destino_card = (props) => {


    return (



                <div className="comprometido_card ">
                    <div className='comprometido_card_header'>
                       <img
                        src={props.img}
                        alt="Picture of the author"
                        className={'comprometido_card_img'}

                    />
                    </div>


                    <div className="comprometido_card_body ">
                        <p className="comprometido_card_title">
                            {props.title}
                        </p>
                        <p className="comprometido_card_text"> {props.text}</p>

                    </div>


                </div>





    );
}

export default Destino_card;