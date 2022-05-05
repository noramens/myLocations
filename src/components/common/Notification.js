import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from '@mui/material/Alert';
import { Snackbar, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { removeNotification } from '../../store/notifications';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({ open, severity, message }) {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(removeNotification());
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

Notification.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
