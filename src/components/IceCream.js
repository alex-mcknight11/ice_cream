import React from "react";
import PropTypes from 'prop-types';

function IceCream(props){
  return(
    <React.Fragment>
      <div onClick = {()=> props.whenIceCreamClicked(props.id)}>
        <h3>{props.name} - {props.flavor}</h3>
        <p><em>Pint price : $ {props.price}.00</em></p>
        <p><em>Pints left: {props.pintsLeft}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

IceCream.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenIceCreamClicked: PropTypes.func,
};

export default IceCream;