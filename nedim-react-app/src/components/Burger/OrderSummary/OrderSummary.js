import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Auxilary from '../../../hoc/Auxilary/Auxilary';


class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> {this.props.ingredients[igKey]}
                </li>
            );
        }); 

        return (
            <Auxilary>
                <h3>Your Order</h3>
                <p>A delecious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxilary>
        );
    }
} 

export default OrderSummary;