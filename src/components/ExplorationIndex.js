import React from 'react';
import Article from '../subcomponents/Article';
import exploration from '../assets/data/exploration';

export default function ExplorationIndex(props) {
  return (
    <Article articleTitle={'Exploration'} data={exploration} includeSublinks={false} {...props} />
  );
}