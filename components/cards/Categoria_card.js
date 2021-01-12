import Image from 'next/image'
import Link from 'next/link'


const Categoria_card = (props) => {

    function active() {
        if (props.active)
        {

        }

    }

    return (


        <Link href="/about" >
            <a className="text-decoration-none " >
                <div className="categoria_card active" >

                    <div className='categoria_card_body'>
                         <Image
                        src={props.img}
                        alt={props.title}
                        width={32}
                        height={32}

                    />
                    </div>

                      <p className='categoria_card_title'>{props.title}</p>
                </div>


            </a>




        </Link>
    );
};

export default Categoria_card;