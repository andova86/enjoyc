import Destacado_card from "../cards/Destacado_card";
import Link from "next/link";
import {setInfo} from "../../redux/actions/main";
import {connect} from "react-redux";
import {useState} from "react"


const DestacadosList = (props) => {

    const {userInfo} = props;




    const handleSearch = (e) => {
        console.log(e);
    }

    return (

        <div className='row g-4 justify-content-center bg-blue-light'>

            <div className="col-12 text-center pt-4 ">

                <p className="title_section mb-0">{userInfo.name} destacados</p>
            </div>

            <div className='col-12 '>
                <div className='destacado_list container-fluid'>

                    {
                        userInfo.data.map(

                            (item) =>


                            <Destacado_card
                                img={item.img}
                                title={item.title}
                                subtitle={item.subtitle}
                                value={item.value}
                                text={item.text}
                            />
                        )
                    }


                </div>

            </div>
            <div className='col-12 text-center pb-md-5 mt-0 mb-0'>
                <Link href="/">
                    <a className="text-decoration-none link-primary">
                        Ver todos los Hoteles »

                    </a>
                </Link>
            </div>

        </div>


    )
};


const mapStateToProps = state => ({
    userInfo: state.main
});

const mapDispatchToProps = {
    setInfo: setInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(DestacadosList)

