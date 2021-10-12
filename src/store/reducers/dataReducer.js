import config from '../../config';

// ACTIONS
const GET_ESPECIALIDADES = 'psihelp/data/GET_ESPECIALIDADES';
const ADD_COMMENTS = 'psihelp/data/ADD_COMMENTS';

// REDUCER

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_ESPECIALIDADES:
      return {...state, especialidades: action.payload};
    case ADD_COMMENTS:
      return {...state, date: action.payload};
    default:
      return state;
  }
}

// ACTIONS

export const getEspecialidades = () => dispatch => {
  fetch(config.API_URI + config.SERVICES.especialidad)
    .then(response => response.json())
    .then(data =>
      data.result || data.entities
        ? dispatch({type: GET_ESPECIALIDADES, payload: data.entities})
        : dispatch({type: GET_ESPECIALIDADES, payload: 'error'}),
    )
    .catch(err => {
      console.log(`[Especialidades] ${err}`);
      dispatch({type: SEARCH, payload: 'error'});
    });
};

export const addComments = filter => dispatch => {
  const uri = config.API_URI + config.SERVICES.agenda;
  fetch(uri, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify(filter),
  })
    .then(response => response.json())
    .then(data =>
      data.result || data.entities
        ? dispatch({type: ADD_COMMENTS, payload: data.entities})
        : dispatch({type: ADD_COMMENTS, payload: 'error'}),
    )
    .catch(err => {
      console.log(`[ADD_COMMENTS] ${err}`);
      dispatch({type: ADD_COMMENTS, payload: 'error'});
    });
};
