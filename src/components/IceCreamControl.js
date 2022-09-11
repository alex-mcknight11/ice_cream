import React from 'react';
import NewIceCreamForm from './NewIceCreamForm';
import IceCreamList from './IceCreamList';
import IceCreamDetail from './IceCreamDetails';


class IceCreamControl extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      formVisibleOnPage: false,
      mainIceCreamList: [],
      selectedIceCream: null,
      sellPint: false
    };
  }
  handleClick = () => {
    if(this.state.selectedIceCream != null){
      this.setState({
        formVisibleOnPage: false,
        selectedIceCream: null,
        sellPint: false
      });
    }else{
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleSellPint = () => {
    console.log("sell pint!");
    this.setState({sellPint: true});
  }

  handlePintDecrease = (id) => {
    const newIceCream = this.state.mainIceCreamList.filter(icecream => icecream.id === id)[0];
    if(newIceCream.pintsLeft - 1 < 0){
      newIceCream.pintsLeft = 0;
    }else{
      newIceCream.pintsLeft -= 1;
    }
    const newMainIceCreamList = this.state.mainIceCreamList
    .filter(icecream => icecream.id !== id)
    .concat(newIceCream);
    this.setState({mainIceCreamList: newMainIceCreamList,
      selectedIceCream: null, sellPint: false
    });
  }

  handleAddingNewIceCreamToList = (newIceCream) => {
    const newMainIceCreamList = this.state.mainIceCreamList.concat(newIceCream);
    this.setState({mainIceCreamList: newMainIceCreamList, formVisibleOnPage: false});
  }

  handleChangingSelectedIceCream = (id) => {
    const selectedIceCream = this.state.mainIceCreamList.filter(icecream => icecream.id === id)[0];
    this.setState({selectedIceCream: selectedIceCream});
  }

  handleDeletingIceCream = (id) => {
    const newMainIceCreamList = this.state.mainIceCreamList.filter(icecream => icecream.id !== id);
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      selectedIceCream: null
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
  if(this.state.selectedIceCream != null){
      currentlyVisibleState = <IceCreamDetail icecream = {this.state.selectedIceCream} onClickingDelete = {this.handleDeletingIceCream} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to IceCream List";
    }
    else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewIceCreamForm onNewIceCreamCreation = {this.handleAddingNewIceCreamToList}/>
      buttonText = "Return to IceCream List";
    }
    else{
      currentlyVisibleState = <IceCreamList icecreamList={this.state.mainIceCreamList} onIceCreamSelection = {this.handleChangingSelectedIceCream} onSellPint = {this.handlePintDecrease}/>
      buttonText = "Add IceCream";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}
export default IceCreamControl;