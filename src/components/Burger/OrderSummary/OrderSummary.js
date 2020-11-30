import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return <li key={igKey} ><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
});
    return(
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h5>Total Price : <strong>{props.price}</strong></h5>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </React.Fragment>
    )
}
export default orderSummary;