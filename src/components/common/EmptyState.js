import React from 'react';

export default function EmptyState({ name }) {
  return (
    <h3
      style={{
        textAlign: 'center',
        width: '40vw',
        margin: 'auto'
      }}
    >
      Your {name} list is empty. You may want to consider adding one using the{' '}
      <em>Add {name}</em> button.
    </h3>
  );
}
