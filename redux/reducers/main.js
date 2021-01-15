import * as t from "../types";

  const d_list = [
        {
            id: 1,
            img: '/hotel.png',
            title: 'Iberostart Costa Azul',
            subtitle: 'Varadero',
            value: '87',
            text: 'Por noche',
            category: 'Hoteles'
        },
        {
            id: 2,
            img: '/hotel.png',
            title: 'Iberostart Costa Azul',
            subtitle: 'Varadero',
            value: '87',
            text: 'Por noche',
             category: 'Hoteles'
        },
        {
            id: 3,
            img: '/hotel.png',
            title: 'Iberostart Costa Azul',
            subtitle: 'Varadero',
            value: '87',
            text: 'Por noche',
             category: 'Hoteles'
        }
    ];


      const data_casas = [
        {
            id: 1,
            img: '/hotel.png',
            title: 'Iberostart Costa Azul',
            subtitle: 'Varadero',
            value: '87',
            text: 'Por noche',
        },
        {
            id: 2,
            img: '/hotel.png',
            title: 'Iberostart Costa Azul',
            subtitle: 'Varadero',
            value: '87',
            text: 'Por noche',
        },
        {
            id: 3,
            img: '/hotel.png',
            title: 'Iberostart Costa Azul',
            subtitle: 'Varadero',
            value: '87',
            text: 'Por noche',
        }
    ];

const main = (state = {
    name: "Hoteles",
    loading: false,
    error: null,
    data: d_list


}, action) => {
  switch(action.type){
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
      case t.SET_DATA:
      return {
        ...state,
        data: action.payload
      };

    default:
      return {...state};
  }
};

export default main;