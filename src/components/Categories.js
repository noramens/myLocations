import React from 'react';
import { useSelector } from 'react-redux';

import EmptyState from './common/EmptyState';
import { selectCategories } from '../store/categories';
import { categoryHeader } from '../helpers/constants';
import { Main } from './Styles';
import CollapsibleTable from './common/CollapsibleTable';

export default function Categories() {
  const categories = useSelector(selectCategories);

  return (
    <Main style={{ width: '70vw' }}>
      <h2> Categories Management</h2>
      {categories.length > 0 ? (
        <CollapsibleTable headCells={categoryHeader} rows={categories} />
      ) : (
        <EmptyState name="category" />
      )}
    </Main>
  );
}
