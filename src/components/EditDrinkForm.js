import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditDrinkForm(props) {
  const { drink } = props;
  function handleEditDrinkFormSubmission(event) {
    event.preventDefault();
    props.onEditDrink({
      names: event.target.names.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      tap: event.target.tap.value,
      image: event.target.image.value,
      id: drink.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditDrinkFormSubmission}
        buttonText="Update Drink"
        defaultNames={drink.names}
        defaultBrand={drink.brand}
        defaultFlavor={drink.flavor}
        defaultPrice={drink.price}
        defaultTap={drink.tap}
        defaultImage={drink.image}
      />
    </React.Fragment>
  );
}

EditDrinkForm.propTypes = {
  onEditDrink: PropTypes.func,
};

export default EditDrinkForm;
