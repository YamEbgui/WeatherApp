const initialState = {
  loading: false,
  weather: {
    coord: { lon: 34.9892, lat: 32.8156 },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04n",
      },
    ],
    main: {
      temp: 14.01,
      feels_like: 13.06,
      temp_min: 14.01,
      temp_max: 14.01,
      pressure: 1021,
      humidity: 61,
      sea_level: 1021,
      grnd_level: 1011,
    },
    name: "Haifa",
  },
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_SEARCH":
      return { loading: true, weather: state.weather };
    case "WEATHER_SEARCH_SUCCEED":
      console.log(action.payload);
      return { loading: false, weather: action.payload };
    case "WEATHER_SEARCH_FAILED":
      return { loading: false, weather: state.weather };
    default:
      return state;
  }
};

export default weatherReducer;
