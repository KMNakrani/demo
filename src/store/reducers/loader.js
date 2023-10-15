export default function loader(
  initialState = {
    isLoading: false,
  },
  action
) {
  switch (action.type) {
    case 'LOADING_START':
      return {
        ...initialState,
        isLoading: true,
      };

    case 'LOADING_STOP':
      return {
        ...initialState,
        isLoading: false,
      };

    case 'LOADING_RESET':
      return {
        ...initialState,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
