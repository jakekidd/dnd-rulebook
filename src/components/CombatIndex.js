import React from 'react';
import Article from '../subcomponents/Article';
import combat from '../assets/data/combat';

export default function CombatIndex(props) {
  return (
    <Article articleTitle={'Combat'} data={combat} includeSublinks={false} {...props} />
  );
}