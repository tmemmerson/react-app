import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control type="text" name="names" placeholder="Drink Name" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="brand" placeholder="Brand" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="picture" placeholder="picture url" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="number" name="price" placeholder="Price(USD)" />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            name="flavor"
            placeholder="Describe flavor."
          />
        </Form.Group>
        <div style={{ padding: 10 }}>
          <Button variant="info" type="submit">
            {props.buttonText}
          </Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
