import { Provider } from "react-redux";
import { createStore } from "redux";
import NavBar from "./core/NavBar";
import weatherReducer from "./reducers/weatherReducer";

const store = createStore(
  weatherReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <NavBar />
    </Provider>
  );
}

export default App;
