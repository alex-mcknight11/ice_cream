import React from "react";
import IceCream from "./IceCream";
import PropTypes from "prop-types";

function IceCreamList(props){
  const {onSellPint} = props;
  return (
  <React.Fragment>
    <hr/>
    {props.icecreamList.map((icecream, index)=>
    <React.Fragment>
      <IceCream
        whenIceCreamClicked = {props.onIceCreamSelection}
        name = {icecream.name}
        brand= {icecream.brand}
        price = {icecream.price}
        flavor = {icecream.flavor}
        pintsLeft = {icecream.pintsLeft}
        id={icecream.id}
        key={icecream.id}
        />
        <button onClick={()=> onSellPint(icecream.id)}>Sell Pint</button>
        <hr/>
      </React.Fragment>
    )}
  </React.Fragment>
  );
}

IceCreamList.propTypes ={
  icecreamList: PropTypes.array,
  onIceCreamSelection: PropTypes.func,
  onSellPint: PropTypes.func
};

export default IceCreamList;