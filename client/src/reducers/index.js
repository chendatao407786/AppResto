import{combineReducers} from 'redux';
import restaurantReducer from './restaurantReducer';

export default combineReducers({
    restaurant: restaurantReducer
});