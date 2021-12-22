import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import NavBar from "./core/NavBar";
import WeatherCard from "./core/WeatherCard";
import weatherReducer from "./reducers/weatherReducer";

const store = createStore(weatherReducer, applyMiddleware(thunkMiddleware));

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Container>
        <WeatherCard />
      </Container>
    </Provider>
  );
}

export default App;
