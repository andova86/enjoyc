import Destino_card_s from "../cards/destino_card_s";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Carrousel({text}) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 7
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5.5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1.3,

        }
    };

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            autoPlay={true}
            centerMode={true}


            ssr={true} // means to render carousel on server-side.
            infinite={true}
            //autoPlay={this.props.deviceType !== "mobile"}
            autoPlaySpeed={5000}
            keyBoardControl={true}





            containerClass="container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            //itemClass="border-primary"
            responsive={responsive}

        >
            <div>
                <Destino_card_s title={"Viaje a Cayo Coco"}/>

            </div>
            <div>
                <Destino_card_s title={"Viaje a Santiago de Cuba"}/>
            </div>
            <div>
                <Destino_card_s title={"Viaje a Ciénaga de Zapata"}/>
            </div>
            <div>
                <Destino_card_s title={"Viaje a Matanzas"}/></div>
            <div>

                <Destino_card_s title={"Viaje a Cayo Largo del Sur"}/>

                </div>
            <div>
                <Destino_card_s title={"Viaje a Villa Baracoa"}/>


            </div>

        </Carousel>




    )
}


Carousel.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const json = await res.json()
    console.log(json)
    return {text: json.title}
};

export default Carrousel