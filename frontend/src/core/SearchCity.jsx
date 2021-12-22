import React from "react";
import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export default function SearchCity() {
  const [city, setCity] = useState("");

  function handleInput(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <Form className="d-flex">
        <FormControl
          defaultValue={city}
          onInput={handleInput}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            console.log(city);
          }}
          variant="secondary"
        >
          Search
        </Button>
        {/* need to change the onClick function */}
      </Form>
    </div>
  );
}
