
import { MessageType } from "../../constants/general";
import { Actions } from "../../store/actions";
import { Store } from "../../store/configureStore"
import {  removeLocalStorageUserData,removeSessionToken } from "../session";

export function showMessage(content, type) {
  Store.dispatch({ type: Actions.Snackbar.SnackbarShow });
  Store.dispatch({ type: Actions.Snackbar.SnackbarMessage, payload: typeof (content) === 'string' ? content.replaceAll('"', '').replaceAll('\\', '') : content });

  switch (type) {

    case MessageType.Error:
      Store.dispatch({ type: Actions.Snackbar.SnackbarMessageType, payload: 'error' });
      break;

    case MessageType.Success:
      Store.dispatch({ type: Actions.Snackbar.SnackbarMessageType, payload: 'success' });
      break;

    default:
      Store.dispatch({ type: Actions.Snackbar.SnackbarMessageType, payload: 'warning' });
      break;
  }
}

export function handleError(error) {
  const status = error?.response?.status;
  const message = error?.response?.data?.message ? JSON.stringify(error.response.data.message) : error?.message ? JSON.stringify(error?.message) : null;

  if (status) {
    if (status === 401) {
      // handle when access token expired
      if (message) {
        showMessage(message, MessageType.Error);
      } else {
        showMessage('Session expired.', MessageType.Error);
      }
      handleLogout()
    } else if (message) {
      showMessage(message, MessageType.Error);
    } else {
      showMessage('Something went wrong.', MessageType.Error);
    }
  } else {
    showMessage('Something went wrong.', MessageType.Error);
  }
}

export function handleSuccess(response) {
  if ((response?.data?.code === 200 || response?.data?.code === 201) && response?.data?.message) {
    showMessage(response?.data?.message, MessageType.Success);
  }
}

// Manage Logout when access token expired
export function handleLogout() {
  let pathname = window.location.pathname.split("/")
  if (pathname.indexOf('login') === -1) {
removeSessionToken()
removeLocalStorageUserData()
  }
}