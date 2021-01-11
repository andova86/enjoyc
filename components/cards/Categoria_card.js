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
                    <Image
                        src={props.img}
                        alt="Picture of the author"
                        width={32}
                        height={32}
                    />
                </div>

                 <p className={'categoria_card_title'}>{props.title}</p>
            </a>




        </Link>
    );
};

export default Categoria_card;