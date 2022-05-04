import React from 'react';
import PropTypes from 'prop-types';

export default function EmptyState({ name }) {
  return (
    <h3
      style={{
        textAlign: 'center',
        width: '40vw',
        margin: '5rem auto'
      }}
    >
      Your {name} list is empty. You may want to consider adding one using the{' '}
      <em>Add {name}</em> button.
    </h3>
  );
}

EmptyState.propTypes = {
  name: PropTypes.string.isRequired
};
