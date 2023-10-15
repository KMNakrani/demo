// Reducers
import loader from './reducers/loader';
import snackbar from './reducers/snackbar';


// Utility Packages
import { combineReducers } from 'redux';

/* *********************** */
/* ***** Imports End ***** */
/* *********************** */

export default combineReducers({
  loader,
  snackbar,
});
