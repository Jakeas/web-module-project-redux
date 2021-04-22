function reducer(state = initialState, action) {
    switch(action.type){
        case ADDITIONAL_PRICE:
            return {
                ...state,
                price: action.payload
            }
        case ADDITIONAL_FEATURES:
            return {
                ...state,
                feature: action.payload
            }
        case CAR:
            return {
                ...state,
                
            }
    }
}