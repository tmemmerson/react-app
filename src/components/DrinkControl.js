import React from "react";
import NewDrinkForm from "./NewDrinkForm";
import DrinkList from "./DrinkList";
import DrinkDetail from "./DrinkDetail";
import EditDrinkForm from "./EditDrinkForm";
import Button from "react-bootstrap/Button";

class DrinkControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterDrinkList: [],
      selectedDrink: null,
      editing: false,
    };
  }

  /*   IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  } */

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.state.masterDrinkList.filter(
      (drink) => drink.id === id
    )[0];
    this.setState({ selectedDrink: selectedDrink });
  };

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleChangingSelectedUptap = (id) => {
    const selectedDrink = this.state.masterDrinkList.filter(
      (drink) => drink.id === id
    )[0];
    // selectedDrink.tap += 1; Solution 2 not functional programming
    const incrementedDrink = Object.assign({}, selectedDrink, {
      tap: selectedDrink.tap + 1,
    });
    // const incrementedDrink2 = { ...selectedDrink, tap: selectedDrink.tap + 1}; Solution 3 spread operator
    const editedMasterDrinkList = this.state.masterDrinkList
      .filter((drink) => drink.id !== id)
      .concat(incrementedDrink);
    this.setState({
      masterDrinkList: editedMasterDrinkList,
    });
  };

  handleChangingSelectedDowntap = (id) => {
    const selectedDrink = this.state.masterDrinkList.filter(
      (drink) => drink.id === id
    )[0];
    if (selectedDrink.tap > 0) {
      const decrementedDrink = Object.assign({}, selectedDrink, {
        tap: selectedDrink.tap - 1,
      });
      const editedMasterDrinkList = this.state.masterDrinkList
        .filter((drink) => drink.id !== id)
        .concat(decrementedDrink);
      this.setState({
        masterDrinkList: editedMasterDrinkList,
      });
    }
  };

  handleAddingNewDrinkToList = (newDrink) => {
    const newMasterDrinkList = this.state.masterDrinkList.concat(newDrink);
    this.setState({
      masterDrinkList: newMasterDrinkList,
      formVisibleOnPage: false,
    });
  };

  handleDeletingDrink = (id) => {
    const newMasterDrinkList = this.state.masterDrinkList.filter(
      (drink) => drink.id !== id
    );
    this.setState({
      masterDrinkList: newMasterDrinkList,
      selectedDrink: null,
    });
  };

  handleEditingDrinkInList = (drinkToEdit) => {
    const editedMasterDrinkList = this.state.masterDrinkList
      .filter((drink) => drink.id !== this.state.selectedDrink.id)
      .concat(drinkToEdit);
    this.setState({
      masterDrinkList: editedMasterDrinkList,
      editing: false,
      selectedDrink: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditDrinkForm
          drink={this.state.selectedDrink}
          onEditDrink={this.handleEditingDrinkInList}
        />
      );
      buttonText = "Return to Drink List";
    } else if (this.state.selectedDrink != null) {
      currentlyVisibleState = (
        <DrinkDetail
          drink={this.state.selectedDrink}
          onClickingDelete={this.handleDeletingDrink}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Drink List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />
      );
      buttonText = "Return to Drink List";
    } else {
      currentlyVisibleState = (
        <DrinkList
          drinkList={this.state.masterDrinkList}
          onDrinkSelection={this.handleChangingSelectedDrink}
          onUptapSelection={this.handleChangingSelectedUptap}
          onDowntapSelection={this.handleChangingSelectedDowntap}
        />
      );
      buttonText = "New Drink";
    }
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        <React.Fragment>
          {currentlyVisibleState}
          <Button variant="primary" onClick={this.handleClick}>
            {buttonText}
          </Button>
        </React.Fragment>
      </div>
    );
  }
}

export default DrinkControl;
