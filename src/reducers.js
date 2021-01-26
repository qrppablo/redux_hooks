// Como tenemos mas de un reducer, importaremos combineReducers().
import { combineReducers } from "redux";
// Importamos los reducers.
import { CounterReducer } from "./redux/Counter";
import { TitleReducer } from "./redux/Title";

// Combinamos nuestros reducers para crear el store de Redux.
export default combineReducers({
  counter: CounterReducer,
  title: TitleReducer
});
