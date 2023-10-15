export default function snackbar(
  initialState = {
    open: false,
    snackbarMessage: '',
    snackbarType: 'warning',
  },
  action
) {
  switch (action.type) {
    case 'SNACKBAR_SHOW':
      return {
        ...initialState,
        open: true,
      };

    case 'SNACKBAR_HIDE':
      return {
        ...initialState,
        open: false,
      };

    case 'SNACKBAR_MESSAGE':
      return {
        ...initialState,
        snackbarMessage: action.payload,
      };

    case 'SNACKBAR_MESSAGE_TYPE':
      return {
        ...initialState,
        snackbarType: action.payload,
      };

    case 'SNACKBAR_RESET':
      return {
        ...initialState,
        open: false,
        snackbarMessage: '',
        snackbarType: 'warning',
      };

    default:
      return initialState;
  }
}
