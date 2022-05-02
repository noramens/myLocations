import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toolbar, Typography, Tooltip, IconButton, alpha } from '@mui/material';

import EditLocation from './EditLocation';
import DeleteDialog from './DeleteDialog';
import { deleteLocation, selectLocations } from '../../store/locations';

export default function EnhancedTableToolbar({
  numSelected,
  selectedRow,
  setSelectedRow
}) {
  const location = useLocation();
  const dispatch = useDispatch();

  const locations = useSelector(selectLocations);

  const [showEditLcoationDialog, setShowEditLocationDialog] = useState(false);
  const [showEditCategoryDialog, setShowEditCategoryDialog] = useState(false);

  const [showDeleteLocationDialog, setShowDeleteLocationDialog] =
    useState(false);
  const [showDeleteCategoryDialog, setShowDeleteCategoryDialog] =
    useState(false);

  const categoryIsActive = location?.pathname?.includes('add-category');
  const locationName = locations.filter(
    item => item.id === selectedRow?.[0]
  )?.[0]?.locationName;

  function handleEditClick() {
    categoryIsActive
      ? setShowEditCategoryDialog(true)
      : setShowEditLocationDialog(true);
  }

  function handleDeleteClick() {
    categoryIsActive
      ? setShowDeleteCategoryDialog(true)
      : setShowDeleteLocationDialog(true);
  }

  function handleCloseDeleteLocation() {
    setSelectedRow([]);
    setShowDeleteLocationDialog(false);
  }

  function handleDeleteLocation() {
    dispatch(deleteLocation(selectedRow?.[0]));
    handleCloseDeleteLocation();
  }

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: theme =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            )
        })
      }}
    >
      {numSelected > 0 && (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      )}

      {numSelected === 1 && (
        <Tooltip title="Edit">
          <IconButton onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}

      <EditLocation
        open={showEditLcoationDialog}
        setOpen={setShowEditLocationDialog}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />

      {showDeleteCategoryDialog ? (
        <DeleteDialog />
      ) : (
        <DeleteDialog
          type="location"
          name={locationName}
          open={showDeleteLocationDialog}
          handleModalClose={handleCloseDeleteLocation}
          handleDelete={handleDeleteLocation}
        />
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  selectedRow: PropTypes.array.isRequired,
  setSelectedRow: PropTypes.func.isRequired
};
