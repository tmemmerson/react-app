import React from "react";
import Header from "./Header";
import DrinkControl from "./DrinkControl";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container
        style={{
          backgroundColor: "rgba(245, 245, 245, 0.5)",
          marginTop: "150px",
        }}
      >
        <DrinkControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
