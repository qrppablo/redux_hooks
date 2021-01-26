// Actions

// En primer lugar, se definirán los nombres de las acciones. Por convención, para no cometer errores de sintaxis
// se crean constantes de strings, utilizando mayusculas.

const INCREMENT = "INCREMENT";

// Reducer

// El reducer se encargará de interpretar las acciones y de llevar a cabo los cambios en el state.
// Recibe 2 parametros: el state inicial y una acción. Deberá retornar SIEMPRE una copia del state (...state),
// seguido de la/s propiedad/es que queramos cambiar. Por convención, se deberá crear una constante con el nombre INITIAL_STATE,
// conteniendo un objeto que represente el estado inicial de nuestra aplicación.

const INITIAL_STATE = {
  // El valor inicial de count será 0.
  count: 0
};
export const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Si la acción recibida es de tipo INCREMENT, le sumamos 1 al valor de count.  
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    // Por defecto, retornamos el estado entero.
    default:
      return state;
  }
};

// Action creator

// Los action creators son funciones que crean acciones, y que nos servirán para enviar datos desde la aplicación al reducer.
// para invocarlas se debe utilizar el hook useDispatch(). Deben contener el tipo de acción (que luego será interpretada
// por el reducer), y si es necesario, el dato que queramos enviar (comunmente llamado "payload").

export const increment = () => ({
  // Como al valor de la propiedad count lo modificaremos directamente desde el reducer, 
  // solo indicaremos el tipo de acción (sin "payload").
  type: INCREMENT
});
