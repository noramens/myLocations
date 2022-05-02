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
  handleModalClose,
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
      onClose={handleModalClose}
    >
      <DialogTitle>Confirm delete {type}</DialogTitle>

      <DialogContent>
        Are you sure you want to delete {name} {type}? <br />
        {description}
      </DialogContent>

      <DialogActions>
        <FormAction secondary onClick={handleModalClose}>
          Close
        </FormAction>
        <FormAction onClick={handleDelete}>Confirm Delete</FormAction>
      </DialogActions>
    </Dialog>
  );
}

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired
};
