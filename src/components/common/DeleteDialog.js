import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

import { FormAction } from '../Styles';

export default function DeleteDialog({
  open,
  handleDialogClose,
  type,
  name,
  handleDelete,
  description
}) {
  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      open={open}
      onClose={handleDialogClose}
    >
      <DialogTitle>
        Confirm delete {name} {type}
      </DialogTitle>

      <DialogContent>
        <h3>
          Are you sure you want to delete <em> {name} </em>
          {type}?
        </h3>
        <p style={{ marginBottom: 0 }}>{description}</p>
      </DialogContent>

      <DialogActions>
        <FormAction secondary onClick={handleDialogClose}>
          Close
        </FormAction>
        <FormAction onClick={handleDelete}>Confirm Delete</FormAction>
      </DialogActions>
    </Dialog>
  );
}

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
  description: PropTypes.string
};
