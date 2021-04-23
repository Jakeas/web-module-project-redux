import { ADD_FEATURES, REMOVE_FEATURES}  from '../actions/actions'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FEATURES:
      console.log(action.payload)
        return {
          ...state,
          car: {
            ...state.car,
            features: [
              ...state.car.features,
              action.payload
            ],
            price:
              // do NOT need to copy the object
              // you need the current price and add the new payload to it
              state.car.price +
              action.payload.price
          },
          additionalFeatures:
            // have multiple objects within an array? Think filter!
            state.additionalFeatures.filter((feature) =>{
              return (
                feature !== action.payload
              )    
            })
        }
    case REMOVE_FEATURES:
      return {
        ...state,
          car: {
            ...state.car,
            features: [
              ...state.car.features.filter((feature)=>{
                return (
                  feature !== action.payload
                )
              })
            ],
            price: state.car.price - action.payload.price
          },
        additionalFeatures: [
            ...state.additionalFeatures, action.payload
        ]    
      }
    default:
      return state
  }
}
export default reducer