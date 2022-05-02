import React from 'react';
import { useSelector } from 'react-redux';

import Table from './common/EnhancedTable';
import EmptyState from './common/EmptyState';
import { selectLocations } from '../store/locations';
import { locationHeader } from '../helpers/constants';
import { Main } from './Styles';

export default function Locations() {
  const locations = useSelector(selectLocations);

  return (
    <Main style={{ width: '70vw' }}>
      <h2>Locations Management</h2>

      {locations.length > 0 ? (
        <Table headCells={locationHeader} rows={locations} />
      ) : (
        <EmptyState name="location" />
      )}
    </Main>
  );
}
