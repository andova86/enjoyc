import {useState, useEffect} from 'react';


const Categoria_card = (props) => {

    const [checked, setChecked] = useState(props.ch);
    const adb = props.title + "_cat"

    useEffect(() => {
        console.log("using effect");
        handleContentLoaded();
    }, []);


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
            // body.classList.add('bg-info');
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

export default Categoria_card;