import React from 'react';

import Table from './common/EnhancedTable';
import { headCells, rows } from '../helpers/constants';
import { Main } from './Styles';

export default function Categories() {
  return (
    <Main style={{ width: '70vw' }}>
      <h2> Categories component</h2>
      <Table headCells={headCells} rows={rows} />
    </Main>
  );
}
