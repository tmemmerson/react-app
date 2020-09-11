import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function DrinkDetail(props) {
  const { drink, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Drink Detail</h1>
      <h3>
        {drink.brand} - {drink.names}
      </h3>
      <p>
        <em>{drink.flavor}</em>
      </p>
      <p>
        <em>{drink.price}</em>
      </p>
      <p>
        <em>{drink.tap}</em>
      </p>
      <Button
        style={{ margin: 10 }}
        variant="success"
        onClick={props.onClickingEdit}
      >
        Update Drink
      </Button>
      <Button variant="danger" onClick={() => onClickingDelete(drink.id)}>
        Close Drink
      </Button>
      <hr />
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default DrinkDetail;
