import * as React from 'react';

export interface Props {
  Navigation: React.ComponentType;
}

export default ({ Navigation }: Props) => <Navigation />;
