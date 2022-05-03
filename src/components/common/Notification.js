import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({ severity, message }) {
  const [open, setOpen] = useState(true);
  function handleClose() {
    setOpen(false);
  }
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

Notification.propTypes = {
  open: PropTypes.bool.isRequired,
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
