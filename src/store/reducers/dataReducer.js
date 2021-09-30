import config from '../../config';

// ACTIONS
const GET_ESPECIALIDADES = 'psihelp/data/GET_ESPECIALIDADES';

// REDUCER

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_ESPECIALIDADES:
      return {...state, especialidades: action.payload};
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
