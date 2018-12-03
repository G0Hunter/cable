import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [
        {
        	id: '1',
          name: 'J-Y(St)Y...Lg',
          price: 149.99,
          file: '',
          specifications: 'huy',
          description: `Инсталляционный кабель с огнестойкостью,
          электростатическим экраном из алюминиевой фольги, с изоляцией и
          оболочкой выполненной из компаунда, не содержащего галогенов, не распространяющего дыма.`,
          img: 'j-red.png'
        },
        {
          id: '2',
          name: 'J-Y(St)Y...Lg',
          price: 149.99,
          file: '',
          specifications: 'huy',
          description: `Инсталляционный кабель с огнестойкостью,
          электростатическим экраном из алюминиевой фольги, с изоляцией и
          оболочкой выполненной из компаунда, не содержащего галогенов, не распространяющего дыма.`,
          img: 'j-red.png'
        },
      ]
    }
  })
}

export default createStore;
