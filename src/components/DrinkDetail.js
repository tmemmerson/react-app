import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";

function DrinkDetail(props) {
  const { drink, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{drink.names}</h1>
      <h3>{drink.brand}</h3>
      <p>
        <em>{drink.flavor}</em>
      </p>
      <p>
        <em>On tap: {drink.tap} (oz)</em>
      </p>
      <p>
        <Figure>
          <Figure.Image width={250} height={250} src={drink.picture} />
          <Figure.Caption>
            <em>${drink.price}.00</em>
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
      <div>
        <Button onClick={props.IncrementItem}>Click to increment by 1</Button>
        <Button onClick={props.DecreaseItem}>Click to decrease by 1</Button>
        {/*    {this.state.show ? <h2>{this.state.clicks}</h2> : ""} */}
      </div>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickDecreaseItem: PropTypes.func,
  onClickIncreaseItem: PropTypes.func,
};

export default DrinkDetail;
