import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import { Checkbox } from '@mui/material';
import { selectLocations } from '../../store/locations';
import { useSelector } from 'react-redux';
import CollapsibleTableRow from './CollapsibleTableRow';

export default function CollapsibleTable({ rows }) {
  const locations = useSelector(selectLocations);
  const [selected, setSelected] = React.useState([]);

  const numSelected = selected?.length;
  const rowCount = rows?.length;

  const isSelected = name => selected.indexOf(name) !== -1;

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <TableContainer component={Paper}>
      <EnhancedTableToolbar
        numSelected={selected.length}
        selectedRow={selected}
        setSelectedRow={setSelected}
      />
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={handleSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts'
                }}
              />
            </TableCell>
            <TableCell />
            <TableCell>Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map(row => (
            <CollapsibleTableRow
              key={row.id}
              row={row}
              handleClick={handleClick}
              isSelected={isSelected}
              locations={locations}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
