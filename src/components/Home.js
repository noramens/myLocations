import React, { useState } from 'react';

import { Container, TitleContainer, Title } from './Styles';
import { CategoriesTable } from './Categories';
import { LocationsTable } from './Locations';

export default function Home() {
  const [showCategories, setCategories] = useState(true);

  return (
    <Container>
      <TitleContainer>
        <Title onClick={() => setCategories(true)} selected={showCategories}>
          Categories
        </Title>
        <Title onClick={() => setCategories(false)} selected={!showCategories}>
          Locations
        </Title>
      </TitleContainer>
      {showCategories ? <CategoriesTable /> : <LocationsTable />}
    </Container>
  );
}
