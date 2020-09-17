import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";

function DrinkList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.drinkList.map((drink) => (
        <Drink
          whenDrinkClicked={props.onDrinkSelection}
          whenUptapClicked={props.onUptapSelection}
          whenDowntapClicked={props.onDowntapSelection}
          names={drink.names}
          brand={drink.brand}
          flavor={drink.flavor}
          price={drink.price}
          tap={drink.tap}
          id={drink.id}
          key={drink.id}
        />
      ))}
    </React.Fragment>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.array,
  onDrinkSelection: PropTypes.func,
  onUptapSelection: PropTypes.func,
  onDowntapSelection: PropTypes.func,
};

export default DrinkList;
