import React from 'react';

import Table from './common/EnhancedTable';
import { headCells, rows } from '../helpers/constants';
import { Main } from './Styles';

export default function Locations() {
  function handleRowDelete() {
    return;
  }
  return (
    <Main style={{ width: '70vw' }}>
      <h2>Locations Management</h2>
      <Table
        headCells={headCells}
        rows={rows}
        onDeleteClick={handleRowDelete}
      />
    </Main>
  );
}
