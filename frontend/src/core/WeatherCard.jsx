import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getIconSrc } from "../utils/requests";

export default function WeatherCard() {
  const weather = useSelector((state) => state.weather);
  console.log(weather);
  const iconSrc = getIconSrc(weather.weather[0].icon);

  return (
    <div className="mt-5">
      <Card
        bg="Light"
        text="dark"
        style={{ width: "25rem" }}
        className="mt-5 mx-auto"
      >
        <Card.Header className="h4">{weather.name.toUpperCase()}</Card.Header>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Text className="h3">
            {Math.floor(weather.main.temp) + "°C"}
          </Card.Text>
          <Card.Text></Card.Text>
          <Card.Img
            style={{ width: "7rem" }}
            variant="top"
            src={`${iconSrc}`}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
