import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";

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
      <p>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={drink.picture}
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
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
