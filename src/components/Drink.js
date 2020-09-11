import React from "react";
import PropTypes from "prop-types";

function Drink(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenDrinkClicked(props.id)}>
        <h3>
          {props.brand} - {props.names}
        </h3>
        <p>
          <em>{props.flavor}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Drink.propTypes = {
  names: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  flavor: PropTypes.string,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func,
};

export default Drink;
