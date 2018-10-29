import axios from 'axios';
import {GET_RESTAURANTS,ADD_RESTAURANT,DELETE_RESTAURANT,LOADING_RESTAURANT} from './types';
import Restaurant from '../components/Restaurant';

export const getRestaurants = () => dispatch => {
    dispatch(setRestaurantLoading());
    axios
        .get('/api/restaurants')
        .then(res => dispatch({
            type: GET_RESTAURANTS,
            payload:res.data
        }))

};
export const deleteRestaurant = id => dispatch=>{
    axios
        .delete('/api/restaurants/'+id)
        .then(res => dispatch({
            type:DELETE_RESTAURANT,
            payload:id
        }))
};

export const addItem = restaurant => dispatch=>{
    axios.post('/api/restaurants',restaurant)
}

export const setRestaurantLoading = ()=>{
    return{
        type:LOADING_RESTAURANT
    }
}