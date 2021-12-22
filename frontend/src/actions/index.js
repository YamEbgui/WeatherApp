function weatherSearch() {
  return {
    type: "WEATHER_SEARCH",
  };
}

function weatherSearchSucceed(weather) {
  return {
    type: "WEATHER_SEARCH_SUCCEED",
    payload: weather,
  };
}

function weatherSearchFailed() {
  return {
    type: "WEATHER_SEARCH_FAILED",
  };
}

export { weatherSearch, weatherSearchFailed, weatherSearchSucceed };
