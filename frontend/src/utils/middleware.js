import {
  weatherSearch,
  weatherSearchSucceed,
  weatherSearchFailed,
} from "../actions";
import { getWeatherRequest } from "./requests";

export const weatherMiddleware = (city) => async (dispatch, getState) => {
  console.log(city);
  dispatch(weatherSearch());
  const response = await getWeatherRequest(city);
  console.log(response);
  if (response.status < 400) {
    const weather = response.data;
    dispatch(weatherSearchSucceed(weather));
    return;
  } else {
    console.log(response);
    dispatch(weatherSearchFailed());
    return;
  }
};
