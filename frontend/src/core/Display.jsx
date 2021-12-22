import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const weather = useSelector((state) => state.weather);

  return <div></div>;
}
