import config from '../../config';

// ACTIONS
const LOGIN = 'psihelp/user/LOGIN';
const REGISTER_USER = 'psihelp/user/REGISTER_USER';
const CLEAN_USER = 'psihelp/user/CLEAN_USER';

// REDUCER

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload};
    case REGISTER_USER:
      return {...state, user: action.payload};
    case CLEAN_USER:
      return {};
    default:
      return state;
  }
}

// ACTIONS

export const login =
  ({password, email}) =>
  dispatch => {
    const body = {
      Password: password,
      Correo: email,
    };
    const uri = config.API_URI + config.SERVICES.login;
    fetch(uri, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data =>
        data.result || data.entities
          ? dispatch({type: LOGIN, payload: data.entities[0]})
          : dispatch({type: LOGIN, payload: 'error'}),
      )
      .catch(err => {
        console.log(`[LOGIN] ${err}`);
        dispatch({type: LOGIN, payload: 'error'});
      });
  };

export const registerUser =
  ({name, phone, email, password}) =>
  dispatch => {
    const data = {
      Nombre: name,
      Password: password,
      IsDoctor: false,
      Correo: email,
      Telefono: phone,
    };
    fetch(config.API_URI + config.SERVICES.usuario, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data =>
        data.result || data.entities
          ? dispatch({type: LOGIN, payload: data.entities})
          : dispatch({type: LOGIN, payload: 'error'}),
      )
      .catch(err => {
        console.log(`[LOGIN] ${err}`);
        dispatch({type: LOGIN, payload: 'error'});
      });
  };

export const registerDoctor =
  ({name, phone, email, password, tarjetaProfesional}) =>
  dispatch => {
    const data = {
      Nombre: name,
      Password: password,
      IsDoctor: true,
      Correo: email,
      Telefono: phone,
      Tarjeta_profesional: tarjetaProfesional,
    };
    fetch(config.API_URI + config.SERVICES.usuario, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data =>
        data.result || data.entities
          ? dispatch({type: LOGIN, payload: data.entities})
          : dispatch({type: LOGIN, payload: 'error'}),
      )
      .catch(err => {
        console.log(`[LOGIN] ${err}`);
        dispatch({type: LOGIN, payload: 'error'});
      });
  };

export const cleanUser = () => dispatch => {
  dispatch({type: CLEAN_USER, payload: {}});
};
