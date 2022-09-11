import React from "react";
import PropTypes from "prop-types";

function IceCreamDetail(props){
  const { icecream, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h1>IceCream Detail</h1>
      <h3>{icecream.name} - {icecream.flavor}</h3>
      <h5>{icecream.brand}</h5>
      <p><em>Pint price: ${icecream.price}.00</em></p>
      <p><em>Pints left: {icecream.pintsLeft}</em></p>
      <button onClick={()=> onClickingDelete(icecream.id)}>Delete IceCream</button>
      <hr/>
    </React.Fragment>
  );
}

IceCreamDetail.propTypes = {
  icecream: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default IceCreamDetail;