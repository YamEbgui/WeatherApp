import axios from "axios";

const baseApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric";
// const apiKey = process.env.API_KEY;
const apiKey = "302465e5b5429ea41f9973ea0473215d";
export const getWeatherRequest = async (city) => {
  const result = await axios.get(`${baseApiUrl}&appid=${apiKey}&q=${city}`);
  return result;
};

const iconWeatherUrl = "https://openweathermap.org/img/wn/";

export const getIconSrc = (iconId) => {
  const iconSrc = `${iconWeatherUrl}${iconId}@2x.png`;
  return iconSrc;
};
