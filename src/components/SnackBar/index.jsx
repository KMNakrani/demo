import React from 'react';
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from "@mui/material/Alert";
import { Actions } from '../../store/actions';
import { Store } from '../../store/configureStore';

export default function SnackBar() {
  //Store
  const { open, snackbarMessage, snackbarType } = useSelector(state => state.snackbar)

  const handleClose = () => {
    Store.dispatch({ type: Actions.Snackbar.SnackbarHide });
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
    >
      <MuiAlert onClose={handleClose} severity={snackbarType}>
        {snackbarMessage}
      </MuiAlert>
    </Snackbar>
  )
}
