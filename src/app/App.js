// Importamos los hooks de Redux.
import { useDispatch, useSelector } from "react-redux"; 
// Importamos los action creators que utilizaremos en nuestro componente para modificar el store.
import { increment } from "../redux/Counter";
import { setTitle } from "../redux/Title";

export function App() {
  // Utilizamos el hook useDispatch() de Redux para invocar action creators.
  const dispatch = useDispatch();

  // Accedemos a los valores de counter.count y title.text almacenados en el store, utilizando el hook useSelector() de Redux.
  const count = useSelector((store) => store.counter.count);
  const title = useSelector((store) => store.title.text);

  return (
    <div>
      <h1>{title}</h1>
      <p>Contador: {count}</p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(setTitle("Redux Hooks"))}>Mostrar título</button>
    </div>
  );
}
