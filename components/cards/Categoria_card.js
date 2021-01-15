import {useState, useEffect} from 'react';
import {setData, setInfo} from "../../redux/actions/main";
import {connect, useDispatch} from "react-redux";


const Categoria_card = (props) => {

  const { userInfo } = props;


    const adb = props.title + "_cat"

    useEffect(() => {
        console.log("using effect");
        handleContentLoaded();
    }, []);

  const DATA = [
        {
            id: 1,
            img: '/capitolio.png',
            title: 'CASA Costa Azul',
            subtitle: 'Habana',
            value: '87',
            text: 'Por noche',
            category: 'Casas'
        },
        {
            id: 2,
            img: '/capitolio.png',
            title: 'CASA Costa Azul',
            subtitle: 'Cerro',
            value: '87',
            text: 'Por noche',
              category: 'Casas'
        },
        {
            id: 3,
            img: '/capitolio.png',
            title: 'CASA Costa Azul',
            subtitle: 'Vedado',
            value: '50',
            text: 'Por noche',
              category: 'Casas'
        },
      {
            id: 3,
            img: '/capitolio.png',
            title: 'CASA Amelia',
            subtitle: 'Vedado',
            value: '87',
            text: 'Por noche',
            category: 'Casas'
        }
    ];

    const dispatch = useDispatch()


    const handleContentLoaded = () => {
        if (props.ch === 'yes') {

            const radio = document.getElementById(adb);
            if (radio) {

                radio.checked = true;

                radio.parentElement.querySelector('.categoria_card_body').classList.add('bg-primary')
                radio.parentElement.querySelector('.categoria_card_title').classList.add('text-primary')




            }
        }
    };


    const handleClick = (e) => {

        const radio = document.getElementById(adb);

        if (radio.checked) {
            delete_active(e);


            e.target.parentElement.querySelector('.categoria_card_body').classList.add('bg-primary')
            e.target.parentElement.querySelector('.categoria_card_title').classList.add('text-primary')

            // Esto es para actualizar el nombre de los destacados
               dispatch(setInfo(props.title))
            dispatch(setData(DATA))

        }


        //alert(adb)
    }

    function delete_active(e) {

        var all = e.target.parentElement.parentElement.querySelectorAll('.categoria_card_body');

        all.forEach(item => {
            if (item.classList.contains("bg-primary")) {

                item.classList.remove("bg-primary");
                item.parentElement.parentElement.querySelector('.categoria_card_title').classList.remove("text-primary");
            }
        });
    }


    return (


        <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   name="category_card_radio"
                   id={adb}
                   hidden={'true'}


                   value={props.title}
                   onClick={handleClick}/>
            <label className="form-check-label"
                   for={adb}>


                <div className="categoria_card">

                    <div className='categoria_card_body '>
                        <i className="icofont-3x icofont-hotel"/>

                    </div>

                    <p className='categoria_card_title'>{props.title}</p>
                </div>
            </label>
        </div>


    );
};

const mapStateToProps = state => ({
  userInfo: state.main
});

const mapDispatchToProps = {
  setInfo: setInfo,
    setData: setData
};

export default connect(mapStateToProps, mapDispatchToProps)(Categoria_card)

