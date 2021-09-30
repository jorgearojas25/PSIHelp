import config from '../../config';

// ACTIONS
const SEARCH = 'psihelp/search/LOGIN';
const CLEAN_SEARCH = 'psihelp/search/CLEAN_SEARCH';
const TOP_DOCS = 'psihelp/search/TOP_DOCS';

// REDUCER

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SEARCH:
      return {...state, search: action.payload};
    case CLEAN_SEARCH:
      return {...state, search: action.payload};
    case TOP_DOCS:
      return {...state, top: action.payload};
    default:
      return state;
  }
}

// ACTIONS

export const filter = filter => dispatch => {
  const uri = config.API_URI + config.SERVICES.filter;
  console.log(filter);
  fetch(uri, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify(filter),
  })
    .then(response => response.json())
    .then(data =>
      data.result || data.entities
        ? dispatch({type: SEARCH, payload: data.entities})
        : dispatch({type: SEARCH, payload: 'error'}),
    )
    .catch(err => {
      console.log(`[LOGIN] ${err}`);
      dispatch({type: SEARCH, payload: 'error'});
    });
};

export const cleanSearch = () => dispatch => {
  dispatch({type: CLEAN_SEARCH, payload: []});
};

export const topDocs = filter => dispatch => {
  const uri = config.API_URI + config.SERVICES.filter;
  fetch(uri, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify(filter),
  })
    .then(response => response.json())
    .then(data =>
      data.result || data.entities
        ? dispatch({type: TOP_DOCS, payload: data.entities})
        : dispatch({type: TOP_DOCS, payload: 'error'}),
    )
    .catch(err => {
      console.log(`[LOGIN] ${err}`);
      dispatch({type: TOP_DOCS, payload: 'error'});
    });
};
