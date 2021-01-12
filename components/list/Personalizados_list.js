import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Personalizado_card from "../cards/Personalizado_card";

function Personalizado_list({text}) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5.5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4.5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2.5
        },
        mobile: {
            breakpoint: {max: 464, min: 331},
            items: 1.3,

        },
        mini_mobile: {
            breakpoint: {max: 330, min: 0},
            items: 1,

        }
    };

    return (

        <div className='pb-5'>
            <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            autoPlay={false}
            centerMode={false}
            arrows={true}


            ssr={true} // means to render carousel on server-side.
            infinite={false}
            //autoPlay={this.props.deviceType !== "mobile"}
            autoPlaySpeed={5000}
            //keyBoardControl={true}


            containerClass="container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            //itemClass="border-primary"
            responsive={responsive}

        >
            <div>

                <Personalizado_card
                    img={'/hotel.png'}
                    title={'Vive Cuba al descubierto desde la raíz'}
                    subtitle={'7 días en Cuba'}
                    value={'80'}
                    text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'}
                    cant_comment={'24'}
                    position={'La Habana, Varadero, Remedios, Cienfuegos'}
                    img_author={'/avatar-1.jpg'}
                    name_author={'Giselle Pérez'}
                    desc_author={'Especialista en viajes clásicos y grupales'}
                />


            </div>

             <div>

                <Personalizado_card
                    img={'/hotel.png'}
                    title={'Vive Cuba al descubierto desde la raíz'}
                    subtitle={'7 días en Cuba'}
                    value={'80'}
                    text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'}
                    cant_comment={'24'}
                    position={'La Habana, Varadero, Remedios'}
                    img_author={'/avatar-1.jpg'}
                    name_author={'Giselle Pérez'}
                    desc_author={'Especialista en viajes clásicos y grupales'}
                />


            </div>

             <div>

                <Personalizado_card
                    img={'/hotel.png'}
                    title={'Vive Cuba al descubierto desde la raíz'}
                    subtitle={'7 días en Cuba'}
                    value={'80'}
                    text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'}
                    cant_comment={'24'}
                    position={'La Habana, Varadero, Remedios'}
                    img_author={'/avatar-1.jpg'}
                    name_author={'Giselle Pérez'}
                    desc_author={'Especialista en viajes clásicos y grupales'}
                />


            </div>

                 <div>

                <Personalizado_card
                    img={'/hotel.png'}
                    title={'Vive Cuba al descubierto desde la raíz'}
                    subtitle={'7 días en Cuba'}
                    value={'80'}
                    text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'}
                    cant_comment={'24'}
                    position={'La Habana, Varadero, Remedios'}
                    img_author={'/avatar-1.jpg'}
                    name_author={'Giselle Pérez'}
                    desc_author={'Especialista en viajes clásicos y grupales'}
                />


            </div>

                 <div>

                <Personalizado_card
                    img={'/hotel.png'}
                    title={'Vive Cuba al descubierto desde la raíz'}
                    subtitle={'7 días en Cuba'}
                    value={'80'}
                    text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'}
                    cant_comment={'24'}
                    position={'La Habana, Varadero, Remedios'}
                    img_author={'/avatar-1.jpg'}
                    name_author={'Giselle Pérez'}
                    desc_author={'Especialista en viajes clásicos y grupales'}
                />


            </div>


        </Carousel>
        </div>






    )
}


Personalizado_list.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const json = await res.json()
    console.log(json)
    return {text: json.title}
};

export default Personalizado_list