import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Table, timeoutsShape } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRestaurants, deleteRestaurant } from '../actions/restaurantActions';
import PropTypes from 'prop-types';
class RestaurantList extends Component {
    componentWillMount() {
        console.log("Component will mount");
        this.props.getRestaurants();
    }

    onDeleteClick = id => {
        this.props.deleteRestaurant(id);
    };
    render() {

        const { restaurants } = this.props.restaurant;
        console.log(restaurants);

        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Cuisine</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map((restaurant, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.cuisine}</td>
                            <td>
                                <button className="btn btn-light" onClick={this.onDeleteClick.bind(this, restaurant._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

RestaurantList.propTypes = {
    getRestaurants: PropTypes.func.isRequired,
    restaurant: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    restaurant: state.restaurant
})
export default connect(mapStateToProps, { getRestaurants, deleteRestaurant })(RestaurantList);