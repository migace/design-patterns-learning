import React from 'react';

import { Button } from './styles';

export const BackButton = ({ onClick }) => (
  <Button className="button is-success" onClick={onClick}>
    <span className="icon is-small">
      <i className="fas fa-chevron-left" />
    </span>
    <span>Back</span>
  </Button>
);
