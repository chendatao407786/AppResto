import {GET_RESTAURANTS,ADD_RESTAURANT,DELETE_RESTAURANT,LOADING_RESTAURANT} from '../actions/types';
const initialState = {
    restaurants: [],
    loading: false
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_RESTAURANTS:
            return{
                ...state,
                restaurants:action.payload,
                loading:false
            };
        case DELETE_RESTAURANT:
            return{
                // ...state,
                restaurants:state.restaurants.filter(restaurant => restaurant._id !== action.payload)
            };
        case ADD_RESTAURANT:
            return{
                ...state,
                items:[action.payload,...state.items]
            };
        case LOADING_RESTAURANT:
            return{
                ...state,
                loading:true
            }
        default:
            return state;
    }
}

 