import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import Form from './Form';

function NewIceCreamForm(props){
  function handleNewIceCreamFormSubmission(event){
    event.preventDefault();
    props.onNewIceCreamCreation({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value), flavor: event.target.flavor.value, pintsLeft: 130, id: v4()});
  }
  return(
    <React.Fragment>
      <Form formSubmissionHandler= {handleNewIceCreamFormSubmission} buttonText="Submit"/>
    </React.Fragment>
  );
}

NewIceCreamForm.propTypes = {
  onNewIceCreamCreation: PropTypes.func
};

export default NewIceCreamForm;