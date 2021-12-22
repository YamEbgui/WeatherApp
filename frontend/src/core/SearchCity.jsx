import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormControl } from "react-bootstrap";
import { weatherMiddleware } from "../utils/middleware";

export default function SearchCity() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

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
          placeholder="Enter city"
          className="me-2"
          aria-label="Search"
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(weatherMiddleware(city));
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
