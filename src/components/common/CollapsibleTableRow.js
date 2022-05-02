import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { locationHeader } from '../../helpers/constants';
import {
  TableRow,
  TableCell,
  Checkbox,
  Table,
  Collapse,
  Typography,
  Box,
  TableBody,
  IconButton,
  TableHead
} from '@mui/material';

export default function CollapsibleTableRow({
  row,
  handleClick,
  isSelected,
  locations
}) {
  const [open, setOpen] = React.useState(false);

  const isItemSelected = isSelected(row.name);
  const labelId = `enhanced-table-checkbox-${row.key}`;
  const tableItems = locations.filter(
    location => location.categoryName === row.name
  );

  return (
    <React.Fragment>
      <TableRow hover key={row.id}>
        <TableCell
          padding="checkbox"
          onClick={event => handleClick(event, row.name)}
          role="checkbox"
          aria-checked={isItemSelected}
          tabIndex={-1}
          key={row.id}
          selected={isItemSelected}
        >
          <Checkbox
            color="primary"
            checked={isItemSelected}
            inputProps={{
              'aria-labelledby': labelId
            }}
          />
        </TableCell>

        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?.name}
        </TableCell>
      </TableRow>
      <TableRow key={row.id * 2}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Locations
              </Typography>
              {tableItems.length === 0 ? (
                <h3 style={{ textAlign: 'center' }}>
                  There are no locations under this category
                </h3>
              ) : (
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      {locationHeader.map(header => (
                        <TableCell>{header.label}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableItems.map(tableItem => (
                      <TableRow hover key={tableItem.id}>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {tableItem.locationName}
                        </TableCell>
                        <TableCell align="right">{tableItem.address}</TableCell>
                        <TableCell align="right">
                          {tableItem.latitude}
                        </TableCell>
                        <TableCell align="right">
                          {tableItem.longitude}
                        </TableCell>
                        <TableCell align="right">
                          {tableItem.categoryName}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

CollapsibleTableRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  handleClick: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired
};
